'use client'
import React, { useState, useEffect, useRef } from 'react';

const HomePage = () => {
    const [language, setLanguage] = useState('EN');
    const [slide, setSlide] = useState('default');
    const [showModal, setShowModal] = useState(false);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'TH' ? 'EN' : 'TH'));
    };

    const toggleSlide = (newSlide) => {
        setSlide(newSlide);
    };

    const handleReset = (event) => {
        setSlide('default');
    };

    const handleSeeMore = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="bg-[#141414] min-h-screen flex flex-col md:flex-row items-center justify-center p-20">
            <div className="text-white md:w-1/2 space-y-4">
                <div className="pb-4">
                    <div className="relative inline-block">
                        <button
                            onClick={toggleLanguage}
                            className="relative z-10 flex items-center justify-between w-24 h-10 bg-gray-800 text-white rounded-full p-1 transition duration-500 ease-in-out"
                        >
                            <span className={`w-1/2 text-center ${language === 'EN' ? 'text-blue-500' : ''}`}>EN</span>
                            <span className={`w-1/2 text-center ${language === 'TH' ? 'text-blue-500' : ''}`}>TH</span>
                        </button>
                        <div
                            className={`absolute top-0 left-0 w-1/2 h-full bg-blue-500 rounded-full transition-transform duration-500 ease-in-out ${language === 'EN' ? 'transform translate-x-full' : ''}`}
                        ></div>
                    </div>
                    <div className="ml-4 relative inline-block">
                        <button
                            onClick={handleReset}
                            className="relative w-24 h-10 bg-gray-800 text-white rounded-full p-1 transition duration-500 ease-in-out"
                        >
                            Reset
                        </button>
                    </div>
                </div>
                {language === 'TH' ? (
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-2">ชยากร อารีย์</h1>
                        <p className="text-lg md:text-2xl mb-5 w-11/12">
                            รับแก้-พัฒนาระบบหลังบ้าน รับทำเว็บไซต์ทั้งหน้าบ้านและหลังบ้าน และรับออกแบบเว็บไซต์ ราคากันเอง
                        </p>
                        <div className="space-y-2">
                            <a
                                href="#projects"
                                onClick={() => toggleSlide('projects')}
                                className={`block hover:underline ${slide === 'projects' ? 'text-2xl text-blue-400' : 'text-xl text-blue-400'}`}
                            >
                                ผลงาน
                            </a>
                            <a
                                href="#story"
                                onClick={() => toggleSlide('tools')}
                                className={`block hover:underline ${slide === 'tools' ? 'text-2xl text-blue-400' : 'text-xl text-blue-400'}`}
                            >
                                ภาษาและเครื่องมือที่ใช้
                            </a>
                            <a
                                href="#contact"
                                onClick={() => toggleSlide('contact')}
                                className={`block hover:underline ${slide === 'contact' ? 'text-2xl text-blue-400' : 'text-xl text-blue-400'}`}
                            >
                                ติดต่อเรา
                            </a>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-2 typing-animation">HI, I'M HARIS</h1>

                        <style jsx>{`
                            .typing-animation {
                                overflow: hidden;
                                white-space: nowrap;
                                margin: 0 auto;
                                animation: typing .5s steps(40, end), blink-caret .75s step-end infinite;
                            }

                            @keyframes typing {
                                from { width: 0 }
                                to { width: 100% }
                            }

                        `}</style>
                        <p className="text-lg md:text-2xl mb-5">
                            I offer backend system development and enhancement services, website creation for both frontend and backend, and professional website design services at competitive prices.
                        </p>
                        <div className="space-y-2">
                            <a
                                href="#projects"
                                onClick={() => toggleSlide('projects')}
                                className={`block hover:underline ${slide === 'projects' ? 'text-2xl text-blue-400' : 'text-xl text-blue-400'}`}
                            >
                                Projects
                            </a>
                            <a
                                href="#story"
                                onClick={() => toggleSlide('tools')}
                                className={`block hover:underline ${slide === 'tools' ? 'text-2xl text-blue-400' : 'text-xl text-blue-400'}`}
                            >
                                Tools
                            </a>
                            <a
                                href="#contact"
                                onClick={() => toggleSlide('contact')}
                                className={`block hover:underline ${slide === 'contact' ? 'text-2xl text-blue-400' : 'text-xl text-blue-400'}`}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                {slide === 'default' && (
                    <img
                        src="/profile-img.JPG"
                        alt="Portfolio"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                )}
                {slide === 'projects' && (
                    <div className="text-white">
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <img
                                src="/project1.png"
                                alt="Project"
                                className="w-full h-auto object-cover rounded-lg mb-4"
                            />
                            {language === 'EN' ?
                            <h2 className="text-2xl font-bold mb-2">School Booking Shift WebApp</h2>
                            : <h2 className="text-2xl font-bold mb-2">ระบบจองเวรรักษาการณ์ของโรงเรียน</h2> }
                            {language === 'EN' ?
                            <p className="mb-4">I was responsible for developing the backend system for the duty roster booking website of Watpapradoo School</p>
                            : <p className="mb-4">ได้เป็นคนทำระบบหลังบ้านของเว็บระบบจองเวรรักษาการณ์ของโรงเรียนวัดป่าประดู่</p>}
                            <button
                                onClick={handleSeeMore}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                            >
                                See More
                            </button>
                        </div>
                    </div>
                )}
                {slide === 'tools' && (
                    <div className="text-white flex flex-wrap justify-center">
                        <img
                                src="/php.png"
                                alt="Project"
                                className="w-36 h-full object-cover rounded-lg mb-4 mr-5"
                        />
                        <img
                                src="/react.png"
                                alt="Project"
                                className="w-36 h-full object-cover rounded-lg mb-4 mr-5"
                        />
                        <img
                                src="/tailwind.png"
                                alt="Project"
                                className="w-36 h-full object-cover rounded-lg mb-4 mr-5"
                        />
                        <img
                                src="/next.png"
                                alt="Project"
                                className="w-36 h-full object-cover rounded-lg mb-4 mr-5"
                        />
                        <img
                                src="/node.png"
                                alt="Project"
                                className="w-36 h-full object-cover rounded-lg mb-4 mr-5"
                        />
                    </div>
                )}
                {slide === 'contact' && (
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                    <div className="text-white">
                    {language === 'EN' ? 
                        <div>
                        <h2 className="text-2xl font-bold mb-4">My Contact</h2>
                        <p className="mb-2">Instagram: <a href='https://www.instagram.com/_hr1pct/' target='_blank' className="text-blue-400 hover:underline">_hr1pct</a></p>
                        <p className="mb-2">Github: <a href='https://github.com/HRZXD' target='_blank' className="text-blue-400 hover:underline">@hrzdev</a></p>
                        <p className="mb-2">Email: 
                            <a href="mailto:chayakorn261@gmail.com" className="text-blue-400 hover:underline"> chayakorn261@gmail.com</a>
                        </p>
                        <p>Phone: <span className="text-blue-400">+66 061-840-5251</span></p>
                        </div>
                        : 
                        <div>
                        <h2 className="text-2xl font-bold mb-4">ช่องทางติดต่อ</h2>
                        <p className="mb-2">Instagram: <a href='https://www.instagram.com/_hr1pct/' target='_blank' className="text-blue-400 hover:underline">_hr1pct</a></p>
                        <p className="mb-2">Github: <a href='https://github.com/HRZXD' target='_blank' className="text-blue-400 hover:underline">@hrzdev</a></p>
                        <p className="mb-2">Email: 
                            <a href="mailto:chayakorn261@gmail.com" className="text-blue-400 hover:underline"> chayakorn261@gmail.com</a>
                        </p>
                        <p>Phone: <span className="text-blue-400">+66 061-840-5251</span></p>
                        </div>
                    }
                    </div>
                    </div>
                )}
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full">
                        <h2 className="text-2xl font-bold mb-4">{language === 'EN' ? 'Details' : ''}</h2>
                        {language === 'EN' ?
                        <p>In this project, my responsibility was to handle the backend development using Node.js and MySQL as the database. As this is my first large-scale project, the website may not be fully secure, but it is functional and performs as expected.</p>
                        : <p></p> }
                        {language === 'EN' ?
                        <p>What've I done?</p>
                        : <p></p> }
                        {language === 'EN' ?
                            <p>System : Login-Register System , Admin System and Booked System</p>
                        : <p></p> }
                        {language === 'EN' ?
                            <p>Duration : 6-8 Months</p>
                        : <p></p> }
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                        >
                            {language === 'EN' ? 'Close' : ''}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;