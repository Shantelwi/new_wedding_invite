import React, { useState } from "react";
import Footer from './Footer';

function RSVPForm() {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [attending,setAttending] = useState(false);
    const [guestName,setGuestName] = useState('');
    const [submitted,setSubmitted] = useState(false);

    const handleAttendingChange = (e) => {
        const isAttending = e.target.value === 'true';
        setAttending(isAttending);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/rsvp',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    attending,
                    guestName,
                }),
            });
            
            if(!response.ok){
                // eslint-disable-next-line no-template-curly-in-string
                throw new Error('HTTP error! Status: ${response.status}');
            }
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitted(true);

            await new Promise(resolve => setTimeout(resolve, 2000));

            window.location.href = '/';
        } catch (error) {
            console.error("Submission error:", error);
        }
    };
    return (
        <div>
            <div className="flex justify-center mb-4">
                <img className='link-images'  src="images/R+S-037.jpg" alt="weddingImage" />
            </div>
            <div style={{ color: '#ffffff' }}>
                <h1 className="text-3xl font-bold mb-4 flex justify-center text-black">~ RSVP ~</h1>
                <p className="text-2xl mb-8 flex justify-center text-black">We ask that you please RSVP by Jan. 15th, 2026</p>
            </div>

            <div className="flex justify-center p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-lg ">
                    <div className="mb-4 flex">
                        <div className="mr-2 w-1/2">
                            <label htmlFor="first_name" className="block font-semibold mb-2 text-black">First name :</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                                value={first_name}
                                onChange={(e) => setFirst_name(e.target.value)}
                                required
                            />
                        </div>
                        <div className="ml-2 w-1/2">
                            <label htmlFor="last_name" className="block font-semibold mb-2 text-black">Last Name :</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                                value={last_name}
                                onChange={(e) => setLast_name(e.target.value)}
                                required
                            />
                        </div>
                    </div>


                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-2 text-black">Email :</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 flex">
                        <div className="mr-2 w-1/2">
                            <label htmlFor="attending" className="block font-semibold mb-2 text-black"> Will you be attending? :</label>
                            <select
                                id="attending"
                                className="w-full py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                                onChange={handleAttendingChange}
                                required
                                style={{color: 'slategray'}}
                            >
                                <option value="">
                                    Select an option
                                </option>
                                <option value="true">Joyfully Accept!</option>
                                <option value="false">Respectfully Decline.</option>
                            </select>
                        </div>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="guestName" className="block font-semibold mb-2">Guest Name(s):</label>
                        <input
                            type="text"
                            id="guestName"
                            className="w-1/2 py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">{submitted ? "Submitted" : "Submit RSVP"}</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
    
};

export default RSVPForm;
