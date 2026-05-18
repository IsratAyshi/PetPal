import React from 'react';
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const stories = [
    {
        name: "Sarah & Bruno",
        image:
            "https://images.unsplash.com/photo-1579119134757-5c38803f34fc?q=80&w=1200&auto=format&fit=crop",
        quote:
            "Bruno became the missing piece of our family. PetPal made the adoption journey smooth, supportive, and truly heartwarming.",
    },
    {
        name: "Mark & Luna",
        image:
            "https://images.unsplash.com/photo-1552794839-be1638cbbd1c?q=80&w=1200&auto=format&fit=crop",
        quote:
            "As a first-time pet owner, I had so many questions. The PetPal team guided me through everything, and Luna settled in beautifully.",
    },
];

const SuccessStories = () => {
    return (
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">

            <Image
                src="/assets/ilustration2.png"
                alt="ilustration2"
                width={400}
                height={400}
                className="w-[180px] md:w-[200px] h-auto absolute top-280 right-10 md:top-160 lg:top-150 md:right-10 lg:right-50 opacity-90 rotate-12"
            />

            <div className=" mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4b2e2e] mb-4">
                    Happy Pals & Success Stories
                </h2>

                <p className="text-[#6d5d5d] text-lg">
                    Real stories from loving families and their adorable companions.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="relative bg-[#FFF6E5] p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div
                            className="absolute -top-5 right-6 w-14 h-14 bg-[#FFD9C8] rounded-2xl rotate-12 flex items-center justify-center shadow-md"
                        >
                            <Quote className="text-[#ff7f50]" size={26} />
                        </div>

                        <div className="flex items-center gap-5 mb-6">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                                <Image
                                    src={story.image}
                                    alt={story.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <h4 className="text-2xl font-bold text-[#4b2e2e] mb-1 font-londrina-solid tracking-wider">
                                    {story.name}
                                </h4>

                                {/* Stars */}
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((star, index) => (
                                        <Star
                                            key={index}
                                            size={16}
                                            className="fill-[#ffb347] text-[#ffb347]"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-[#6d5d5d] text-lg italic leading-relaxed">
                            “{story.quote}”
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SuccessStories;