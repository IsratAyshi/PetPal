import { Bird, Cat, Fish, PawPrint, Rabbit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className="bg-[#FFF6E5]">
            <footer className="bg-[#EAAC8E] text-[#4b2e2e] px-6 md:px-16 py-10 rounded-t-4xl">
                <div className="container mx-auto">
                    <div className="mb-10">
                        <h1 className="text-6xl md:text-7xl font-bold text-white font-londrina-solid tracking-wider">
                            PetPal
                        </h1>
                        <p className="mt-4 max-w-xl">
                            Find your soul companion today with PetPal.
                        </p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="hover:text-white cursor-pointer">Home</Link></li>
                                <li><Link href="/all-pets" className="hover:text-white cursor-pointer">All Pets</Link></li>
                                <li><Link href="#whoWeAre" className="hover:text-white cursor-pointer">Who We Are</Link></li>

                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>
                            <ul className="space-y-2">
                                <li><Link href="#faq" className="hover:text-white cursor-pointer">FAQ</Link></li>
                                <li className="hover:text-white cursor-pointer">
                                    Terms of Service
                                </li>
                                <li className="hover:text-white cursor-pointer">
                                    Privacy Policy
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
                            <ul className="space-y-2">
                                <li>786 401 6666</li>
                                <li>info@petpal.com</li>
                            </ul>

                            <div className="flex gap-5 mt-3  text-white text-lg">
                                <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                                    <RiInstagramFill className='text-xl' />
                                </div>
                                <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                                    <FaFacebookF className='text-xl' />
                                </div>
                                <div className="bg-white text-black p-2 rounded-full cursor-pointer">
                                    <FaXTwitter className='text-xl' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-[#4b2e2e]/50 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">
                            © 2026 PetPal. All rights reserved.
                        </p>

                        <div className="flex gap-2 text-[#4b2e2e]/50 mt-4 md:mt-0">

                            <Fish />
                            <Bird />
                            <Cat />
                            <PawPrint />
                            <Rabbit />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;