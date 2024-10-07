require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmetCsp = require('helmet-csp');
const winston = require('winston');

const homeRoutes = require('./routes/home');
const faqRoutes = require('./routes/faq');
const locationRoutes = require('./routes/location');

const app = express();
const PORT = process.env.PORT || 8000;
console.log(PORT);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log', maxsize: 1048576, level: 'info' })
    ]
});

app.use(cors({
    origin:['http://localhost:3000','https://main.d2rhfblr3h62yy.amplifyapp.com'],
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
    optionsSuccessStatus:204,
}));
app.use(helmet());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    next();
});

app.use((req, res, next) => {
    logger.info(`Request from ${req.ip} to ${req.originalUrl}`);
    next();
});

app.use(
    helmetCsp({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", 'cdnjs.cloudflare.com']
        }
    })
);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Internal Server Error');
});

const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.app_password,
    },
    logger: true,
    debug: true,
});

transporter.verify(function (error, success) {
    if (error) {
        console.error('Nodemailer verification error:', error);
        throw error;
    } else {
        console.log('Nodemailer is ready to send emails:', success);
    }
});

const validate = [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('attending').isBoolean().withMessage('Attending should be boolean'),
    body('guestName').optional().isString().withMessage('Guest name should be a string')
];

app.post('/api/rsvp', validate, async (req, res) => {
    try {
        console.log('Received RSVP request:', req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { first_name, last_name, email, attending, guestName } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'williamsshantel73@gmail.com && rebecagonzalez0913@gmail.com',
            subject: 'New RSVP Submission',
            text: `New Wedding RSVP Submission:\n\nName: ${first_name} ${last_name}\nEmail: ${email}\nAttending: ${attending ? 'Yes' : 'No'}\nGuest Name: ${guestName || 'N/A'}`,
        };

        console.log('Mail Options:', mailOptions);

        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent:', info);

        if (info.rejected.length > 0 || !info.response.includes('250')) {
            console.error('Error sending email:', info);
            return res.status(500).send('Error sending email');
        }

        console.log('RSVP submission successful');
        return res.status(200).send('RSVP Submitted');

    } catch (error) {
        console.error('Error in /api/rsvp:', error);
        logger.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.use('/', homeRoutes);
app.use('/faq', faqRoutes);
app.use('/location', locationRoutes);

const server = app.listen(PORT, () => {
    logger.info(`listening on http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
    logger.info('Received SIGTERM, closing server gracefully');
    server.close(() => {
        logger.info('Server closed');
        process.exit(0);
    });
});
