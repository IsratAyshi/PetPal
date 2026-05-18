import React from 'react';
import { Heart, ShieldCheck, Birdhouse } from "lucide-react";

const WhyAdopt = () => {
    return (
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto bg-white">

            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#4b2e2e] mb-3">
                    Why Adopt a Pet?
                </h2>
                <p className="text-[#6d5d5d] text-lg">
                    The benefits go beyond just bringing a new friend home.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="p-8 bg-[#FFD9C8]/40 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] shadow-sm hover:shadow-lg">
                    <div className="w-16 h-16 bg-[#FFD9C8] rounded-full flex items-center justify-center mb-6">
                        <Birdhouse className="text-[#ff7f50]" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#4b2e2e] mb-3">
                        Save a Life
                    </h3>

                    <p className="text-[#6d5d5d] leading-relaxed">
                        Every adoption creates space for another animal in need, giving them a second chance at life and love.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-8 bg-[#FFE7D6]/40 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] shadow-sm hover:shadow-lg">
                    <div className="w-16 h-16 bg-[#FFE7D6] rounded-full flex items-center justify-center mb-6">
                        <Heart className="text-[#ff7f50]" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#4b2e2e] mb-3">
                        Unconditional Love
                    </h3>

                    <p className="text-[#6d5d5d] leading-relaxed">
                        Experience pure companionship that brings comfort, joy, and emotional support into your everyday life.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-8 bg-[#F0CAA5]/40 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] shadow-sm hover:shadow-lg">
                    <div className="w-16 h-16 bg-[#F0CAA5]/80 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="text-[#ff7f50]" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#4b2e2e] mb-3">
                        Fully Vetted
                    </h3>

                    <p className="text-[#6d5d5d] leading-relaxed">
                        All pets are vaccinated, health-checked, and prepared to safely join their forever families.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyAdopt;