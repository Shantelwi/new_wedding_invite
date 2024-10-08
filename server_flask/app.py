# from dotenv import load_dotenv
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from flask_mail import Mail, Message
# from flask_limiter import Limiter
# from flask_limiter.util import get_remote_address
# from marshmallow import Schema, fields, ValidationError
# import logging
# import os

# app = Flask(__name__)
# CORS(app, origins=['http://localhost:3000', 'https://main.d2rhfblr3h62yy.amplifyapp.com'])
# limiter = Limiter(get_remote_address, app=app)

# load_dotenv()

# # Configure logging
# logging.basicConfig(level=logging.INFO,
#                     format='%(asctime)s - %(name)s - %(levelname)s = %(messages)s')
# logger = logging.getLogger(__name__)

# # Configure Flask-Mail
# app.config['MAIL_SERVER'] = 'smtp.mail.yahoo.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
# app.config['MAIL_PASSWORD'] = os.getenv('app_password')
# mail = Mail(app)

# # Define a schema for validation
# class RSVPRequestSchema(Schema):
#     first_name = fields.Str(required=True)
#     last_name = fields.Str(required=True)
#     email = fields.Email(required=True)
#     attending = fields.Bool(required=True)
#     guestName = fields.Str(allow_none=True)

# @app.route('/api/rsvp', methods=['POST'])
# @limiter.limit("100 per 15 minutes")
# def rsvp():
#     try:
#         data = request.get_json()
#         logger.info(f'Received RSVP request: {data}')
        
#         # Validate input
#         schema = RSVPRequestSchema()
#         schema.load(data)

#         # Send email
#         msg = Message('New RSVP Submission',
#                     sender=os.getenv('EMAIL_USER'),
#                     recipients=['williamsshantel73@gmail.com', 'rebecagonzalez0913@gmail.com'])
#         msg.body = f"New Wedding RSVP Submission:\n\nName: {data['first_name']} {data['last_name']}\nEmail: {data['email']}\nAttending: {'Yes' if data['attending'] else 'No'}\nGuest Name: {data.get('guestName', 'N/A')}"
        
#         mail.send(msg)
#         logger.info('Email sent successfully')
#         return jsonify({'message': 'RSVP Submitted'}), 200

#     except ValidationError as err:
#         logger.error(f'Validation error: {err.messages}')
#         return jsonify({'errors': err.messages}), 400
#     except Exception as e:
#         logger.error(f'Error in /api/rsvp: {e}', exc_info=True)
#         return jsonify({'error': 'Internal Server Error'}), 500

# if __name__ == '__main__':
#     app.run(port=8000)


# from dotenv import load_dotenv
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from flask_mail import Mail, Message
# from flask_limiter import Limiter
# from flask_limiter.util import get_remote_address
# from redis import Redis
# from marshmallow import Schema, fields, ValidationError
# import logging
# import os

# # Initialize Flask app
# app = Flask(__name__)
# CORS(app, origins=['http://localhost:3000', 'https://main.d2rhfblr3h62yy.amplifyapp.com'])

# # Initialize Redis
# redis_client = Redis(host='localhost', port=6379, db=0)

# # Initialize Flask-Limiter with Redis storage
# limiter = Limiter(
#     get_remote_address,
#     app=app,
#     storage_uri='redis://localhost:6379'
# )

# # Load environment variables
# load_dotenv()

# # Configure logging
# logging.basicConfig(level=logging.INFO, 
#                     format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
# logger = logging.getLogger(__name__)

# # Configure Flask-Mail
# app.config['MAIL_SERVER'] = 'smtp.mail.yahoo.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
# app.config['MAIL_PASSWORD'] = os.getenv('app_password')
# mail = Mail(app)

# # Define a schema for validation
# class RSVPRequestSchema(Schema):
#     first_name = fields.Str(required=True)
#     last_name = fields.Str(required=True)
#     email = fields.Email(required=True)
#     attending = fields.Bool(required=True)
#     guestName = fields.Str(allow_none=True)

# @app.route('/api/rsvp', methods=['POST'])
# @limiter.limit("100 per 15 minutes")
# def rsvp():
#     try:
#         data = request.get_json()
#         logger.info(f'Received RSVP request: {data}')
        
#         # Validate input
#         schema = RSVPRequestSchema()
#         schema.load(data)

#         # Prepare email message
#         msg = Message('New RSVP Submission',
#                     sender=os.getenv('EMAIL_USER'),
#                     recipients=['williamsshantel73@gmail.com', 'rebecagonzalez0913@gmail.com'])
#         msg.body = f"New Wedding RSVP Submission:\n\nName: {data['first_name']} {data['last_name']}\nEmail: {data['email']}\nAttending: {'Yes' if data['attending'] else 'No'}\nGuest Name: {data.get('guestName', 'N/A')}"
        
#         logger.info('Attempting to send email...')
#         mail.send(msg)
#         logger.info('Email sent successfully')
#         return jsonify({'message': 'RSVP Submitted'}), 200

#     except ValidationError as err:
#         logger.error(f'Validation error: {err.messages}')
#         return jsonify({'errors': err.messages}), 400
#     except Exception as e:
#         logger.error(f'Error in /api/rsvp: {e}', exc_info=True)  # Log the stack trace
#         return jsonify({'error': 'Internal Server Error'}), 500

# if __name__ == '__main__':
#     app.run(port=8000)

from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from redis import Redis
from marshmallow import Schema, fields, ValidationError
import logging
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins=['http://localhost:3000', 'https://main.d2rhfblr3h62yy.amplifyapp.com'])

# Initialize Redis
redis_client = Redis(host='localhost', port=6379, db=0)

# Initialize Flask-Limiter with Redis storage
limiter = Limiter(
    get_remote_address,
    app=app,
    storage_uri='redis://localhost:6379'  # Ensure Redis is running
)

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.mail.yahoo.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')  # Ensure this is set in .env
app.config['MAIL_PASSWORD'] = os.getenv('app_password')  # Ensure this is set in .env
mail = Mail(app)

# Define a schema for validation
class RSVPRequestSchema(Schema):
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    email = fields.Email(required=True)
    attending = fields.Bool(required=True)
    guestName = fields.Str(allow_none=True)

@app.route('/api/rsvp', methods=['POST'])
@limiter.limit("100 per 15 minutes")
def rsvp():
    try:
        data = request.get_json()
        logger.info(f'Received RSVP request: {data}')
        
        # Validate input
        schema = RSVPRequestSchema()
        schema.load(data)

        # Prepare email message
        msg = Message('New RSVP Submission',
                    sender=os.getenv('EMAIL_USER'),
                    recipients=['williamsshantel73@gmail.com', 'rebecagonzalez0913@gmail.com'])
        msg.body = f"New Wedding RSVP Submission:\n\nName: {data['first_name']} {data['last_name']}\nEmail: {data['email']}\nAttending: {'Yes' if data['attending'] else 'No'}\nGuest Name: {data.get('guestName', 'N/A')}"
        
        logger.info('Attempting to send email...')
        mail.send(msg)
        logger.info('Email sent successfully')
        return jsonify({'message': 'RSVP Submitted'}), 200

    except ValidationError as err:
        logger.error(f'Validation error: {err.messages}')
        return jsonify({'errors': err.messages}), 400
    except Exception as e:
        logger.error(f'Error in /api/rsvp: {e}', exc_info=True)  # Log the stack trace
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(port=8000)

