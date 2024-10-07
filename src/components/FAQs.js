import React, { useState } from "react";
import Footer from "./Footer";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What section will the wedding party be able to book?",
            answer: "You will be able to book the TRS Coral (Adults Only) or Family Selection at the Grand Palladium - Cancun: Costa Mujeres. Adults booked in the Family Selection will have access to the TRS Coral as long as children are not present. "
        },

        {
            question: "What activities do they have for my children?",
            answer: "Children will have access to their own clubs that offer different activities such as: cooking classes, video games, trips to the pool, and lounge areas. They offer many swimming pools with a Splash Pad.",
        },

        {
            question: "How do we get around the resort? ",
            answer: " The resorts are walking distance but golf carts and taxi boats will be available to use free of charge.",
        },

        {
            question: "What amenities do the rooms come with?",
            answer: "The room comes with a Nespresso coffee machine, minibar, terrace, safe, hair dryer, wifi, hydromassage bathtub, bathrobe and slippers, 50” TV, Iron, 24/7 Room Service. ",
        },

        {
            question: "What dining and drinking services do they offer? ",
            answer: "This is an all inclusive resort with 30+ restaurants and bars (all types of cuisines). You can eat and drink as much as you would like. Restaurants are family focused with menus and facilities for children."
        },

        {
            question: "Do I have to book with your travel agent? ",
            answer: "Yes, she will provide you with the best deals and rooms for you and your family. She will be booking your rooms and flights (if needed). She is here to make this process seamless and stress free. If you need a translator, please let Rebeca know. "
        },

        {
            question: "What is the attire for the wedding?",
            answer: "Black Tie Event."
        },

        {
            question: "How many nights should we stay? ",
            answer: "We encourage you to stay a minimum of 3 nights as you can take this time to celebrate our new venture but also take some personal time off. "
        },

        {
            question: "What are the wedding details?",
            answer: "The ceremony will be located in the village deck on  May 9, 2026 at 4 PM. Cocktail hour will be located in the __ at _ PM. Reception will be located in the ballroom at __ at __ PM. "
        }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="flex justify-center mb-4">
                <img  className="link-images" src="images/R+S_bw-29.jpg" alt="weddingImage" />
            </div>
            <h1 style={{ fontSize: "30px", textAlign: "center" }}>
                {" "}
                Frequently Asked Questions
            </h1>
            {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: "15px", fontSize: "20px", padding: "20px" }}>
                    <h3
                        onClick={() => toggleAnswer(index)}
                        style={{ cursor: "pointer", color: "#566c56" }}
                    >
                        {faq.question}
                    </h3>
                    {activeIndex === index && (
                        <p
                            style={{
                                padding: "10px",
                                backgroundColor: "#f9f9f9",
                                border: "1px solid #ddd",
                            }}
                        >
                            {faq.answer}
                        </p>
                    )}
                </div>
            ))}
            <Footer />
        </div>
    );
}
export default FAQ;
