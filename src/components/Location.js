import React from "react";
import Footer from '../components/Footer';

function Location() {
    return (
        <div>
            <div className="flex justify-center mb-4">
                <img className="link-images" src="images/R+S-154.jpg" alt="weddingImage" />
            </div>
            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-4 flex justify-center text-center">~ Travel Info ~</h1>
                <div className="flex justify-center text-center">
                    <div className="w-1/2 p-4">
                        <h1 className="text-gray-600 text-2xl mb-2">Hotel</h1>
                        <p className="text-gray-600 text-2xl mb-2 mt-10">
                            The Grand Palladium Costa Mujeres Resort & Spa
                        </p>
                        <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                            <a href="https://www.palladiumhotelgroup.com/en/hoteles/mexico/costamujerescancun/grand-palladium-costa-mujeres-resort-spa?partner=3369&gclid=0dc1d92b1e02191f862ebfee4961108d&gclsrc=3p.ds&msclkid=0dc1d92b1e02191f862ebfee4961108d&utm_source=bing&utm_medium=cpc&utm_campaign=BING_ECOMMERCE_USA_EN_USD_ALL_GRAND%20PALLADIUM_HOT_ALL_ALL&utm_term=grand%20palladium%20costa%20mujeres%20resort&utm_content=USA_EN_USD_MX_GRAND%20PALLADIUM_HOT_GP%20COSTA%20MUJERES%20RESORT%20%26%20SPA_CANCUN">
                                View the Resort</a>
                        </button>
                    </div>
                    <div className="w-1/2 p-4">
                        <h1 className="text-gray-600 text-2xl mb-2">Booking</h1>
                        <p className="text-gray-600 text-2xl mb-2 mt-10">
                            Book with our travel agent.
                            Click the links below.
                        </p>
                        <button type="submit" className=" submit_1 bg-green-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mx-4">
                            <a href="mailto:bonitastewart1@yahoo.com">
                                Contact
                            </a>
                        </button>
                        
                        <button type="submit" className=" submit_2 bg-green-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mb-6">
                            <a href="https://traveljoy.com/bookings/Z1xZW3q8x241gvQR72D6nGSq">
                                Book Now
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Location;