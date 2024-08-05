// src/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Spedito</h2>
                        <p className="text-gray-400 mt-2">Delicious Food. Great Atmosphere.</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                        <a href="#menu" className="hover:text-gray-400">Menu</a>
                        <a href="#about" className="hover:text-gray-400">About Us</a>
                        <a href="#contact" className="hover:text-gray-400">Contact</a>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <p className="text-gray-400 text-sm">© 2024 Restaurant Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
