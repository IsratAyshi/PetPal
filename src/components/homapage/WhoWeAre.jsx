
import Image from "next/image";
import React from "react";
import { Heart, PawPrint, Users, HandHeart, Home } from "lucide-react";
import FadeUp from "../animation/FadeUp";

const WhoWeAre = () => {
    return (
        <section id="whoWeAre" className="relative bg-[#FFF6E5] dark:bg-[#1E1A17] overflow-hidden py-30 px-6">

            <Image
                src="/assets/Union.png"
                alt="Union Background"
                width={1600}
                height={300}
                className="w-full h-auto absolute top-0 left-0 opacity-90 dark:opacity-72"
            />

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
                {/* Left Image Section */}
                <FadeUp>
                    <div className="relative group md:w-7/12 md:mx-auto lg:w-full">
                        <div className="relative aspect-square rounded-[40px] overflow-hidden bg-[#FFD9C8] ">
                            <Image
                                src="/assets/leftImg2.png"
                                alt="pets"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute bottom-10 right-5 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                            <Heart className="text-[#ff7f50] fill-[#ffb199]" size={22} />
                            <span className="font-semibold text-[#5c4033]">
                                Companionship starts here
                            </span>
                        </div>
                    </div>
                </FadeUp>

                {/* Right Content */}
                <FadeUp delay={0.2}>
                    <div className="space-y-10">
                        <div>
                            <span className="inline-block bg-[#FFD9C8] text-[#7a4b36] px-4 py-2 rounded-full text-sm font-semibold mb-5">
                                About PetPal
                            </span>

                            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#4b2e2e] dark:text-[#FFE8D6] leading-tight mb-6">
                                More Than Adoption, <br></br>
                                <span className="text-[#ff7f50] dark:text-[#FFAA80] italic">
                                    {" "}
                                    We Create Families
                                </span>
                            </h2>

                            <p className="text-[#6d5d5d] dark:text-[#F0CAA5] text-lg leading-relaxed mb-4">
                                PetPal is a loving space where animals and humans discover each
                                other. We help rescued and homeless pets find caring families,
                                safe homes, and a fresh start filled with affection.
                            </p>

                            <p className="text-[#6d5d5d] dark:text-[#F0CAA5] text-lg leading-relaxed">
                                From playful companions to gentle friends, every pet deserves
                                warmth, care, and a place to belong — and we’re here to make that
                                connection possible.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-5">
                            {/* Card 1 */}
                            <FadeUp delay={0.1}>
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <PawPrint className="text-[#ff7f50]" size={28} />
                                        <span className="text-3xl font-extrabold text-[#4b2e2e]">
                                            850+
                                        </span>
                                    </div>

                                    <p className="text-[#7a6a6a] font-medium text-sm uppercase tracking-wide">
                                        Pets Rehomed
                                    </p>
                                </div>
                            </FadeUp>

                            {/* Card 2 */}
                            <FadeUp delay={0.2}>
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <Home className="text-[#ff7f50]" size={28} />
                                        <span className="text-3xl font-extrabold text-[#4b2e2e]">
                                            620+
                                        </span>
                                    </div>

                                    <p className="text-[#7a6a6a] font-medium text-sm uppercase tracking-wide">
                                        Happy Families
                                    </p>
                                </div>
                            </FadeUp>

                            {/* Card 3 */}
                            <FadeUp delay={0.3}>
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <Users className="text-[#ff7f50]" size={28} />
                                        <span className="text-3xl font-extrabold text-[#4b2e2e]">
                                            100+
                                        </span>
                                    </div>

                                    <p className="text-[#7a6a6a] font-medium text-sm uppercase tracking-wide">
                                        Volunteers
                                    </p>
                                </div>
                            </FadeUp>

                            {/* Card 4 */}
                            <FadeUp delay={0.4}>
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <HandHeart className="text-[#ff7f50]" size={28} />
                                        <span className="text-3xl font-extrabold text-[#4b2e2e]">
                                            20K+
                                        </span>
                                    </div>

                                    <p className="text-[#7a6a6a] font-medium text-sm uppercase tracking-wide">
                                        Donations Raised
                                    </p>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </FadeUp>
            </div>

            <Image
                src="/assets/Union2.png"
                alt="Union Background"
                width={1600}
                height={300}
                className="w-full h-auto absolute bottom-0 left-0 opacity-90 dark:opacity-72"
            />
        </section>
    );
};

export default WhoWeAre;