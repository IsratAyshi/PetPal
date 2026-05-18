"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section
            className="relative overflow-hidden py-20 px-6 lg:px-12 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/assets/BannerImg.jpg')",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-white/30 dark:bg-[#1E1A17]/50" />

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center z-10">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#4b2e2e] dark:text-[#FFE8D6]">
                        Find your{" "}
                        <span className="text-[#ff7f50] dark:text-[#FFAA80] italic">perfect</span>{" "}
                        companion today with <span className="text-[#ff7f50] dark:text-[#FFAA80]">PetPal</span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-[#6d5d5d] dark:text-[#C4A99A] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        PetPal is a warm sanctuary connecting caring families with adorable pets. From playful tails to gentle chirps, discover pets waiting to fill your home with joy and love.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="/all-pets"
                            className="bg-[#ffbfa3] hover:bg-[#ffa67e] text-[#4b2e2e] dark:bg-[#7A3E28] dark:hover:bg-[#9B5035] dark:text-[#FFE8D6] px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            Adopt a Pet
                            <span>→</span>
                        </Link>

                        <Link
                            href="#whoWeAre"
                            className="bg-white/80 hover:bg-white text-[#4b2e2e] dark:bg-[#2A1F1A]/80 dark:hover:bg-[#2A1F1A] dark:text-[#FFE8D6] px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Who We Are
                        </Link>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative flex justify-center items-center h-[420px] sm:h-[500px]">
                    {/* Animated Text Circle */}
                    <div className="absolute w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] animate-spin-slow opacity-10 dark:opacity-20 dark:text-[#FFCBA4]">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <path
                                id="circlePath"
                                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                fill="none"
                            />

                            <text
                                fill="currentColor"
                                className="text-[7.5px] font-bold uppercase tracking-[0.2em]"
                            >
                                <textPath href="#circlePath">
                                    PetPal • Companion • Adopt • Love • Care •
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    <div className="relative w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] rounded-full overflow-hidden border-8 border-white dark:border-[#3A2820] shadow-2xl -translate-x-6 sm:-translate-x-12 -translate-y-6 sm:-translate-y-8 z-10">
                        <Image
                            src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1200&auto=format&fit=crop"
                            alt="silly dog"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="absolute w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] rounded-full overflow-hidden border-8 border-white dark:border-[#3A2820] shadow-2xl translate-x-12 sm:translate-x-20 translate-y-20 sm:translate-y-24 z-20">
                        <Image
                            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop"
                            alt="sleepy cat"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Floating Chips */}
                    <div className="absolute top-8 right-10 sm:right-20 bg-[#ffdacb] dark:bg-[#4A2E20] text-[#6b3f2d] dark:text-[#FFCBA4] px-4 py-2 rounded-full text-sm font-semibold shadow-md z-30 font-londrina-solid tracking-wider">
                        RABBITS
                    </div>

                    <div className="absolute bottom-20 left-6 sm:left-20 bg-[#ffdacb] dark:bg-[#4A2E20] text-[#6b3f2d] dark:text-[#FFCBA4] px-4 py-2 rounded-full text-sm font-semibold shadow-md z-30 font-londrina-solid tracking-wider">
                        CATS
                    </div>

                    <div className="absolute bottom-5 right-6 sm:right-10 bg-[#ffdacb] dark:bg-[#4A2E20] text-[#6b3f2d] dark:text-[#FFCBA4] px-4 py-2 rounded-full text-sm font-semibold shadow-md z-30 font-londrina-solid tracking-wider">
                        FISH
                    </div>

                    <div className="absolute top-20 left-9 sm:left-10 bg-[#ffd6a5] dark:bg-[#4A3520] text-[#6b3f2d] dark:text-[#FFCBA4] px-4 py-2 rounded-full text-sm font-semibold shadow-md z-30 font-londrina-solid tracking-wider">
                        DOGS
                    </div>

                    <div className="absolute bottom-50 right-3 sm:-right-4 bg-[#ffd6a5] dark:bg-[#4A3520] text-[#6b3f2d] dark:text-[#FFCBA4] px-4 py-2 rounded-full text-sm font-semibold shadow-md z-30 font-londrina-solid tracking-wider">
                        BIRDS
                    </div>
                </div>
            </div>

            {/* Animation */}
            <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </section>
    );
};

export default Banner;