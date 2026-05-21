import React from 'react';
import { Accordion } from "@heroui/react";
import { ChevronDown, CheckCheckIcon } from "lucide-react";
import FadeUp from '../animation/FadeUp';

const faqItems = [
    {
        title: "What is the adoption process like?",
        content:
            "Our adoption process is simple and caring. Browse available pets, submit an adoption request, meet your chosen companion, and complete the final approval process to welcome them home.",

    },
    {
        title: "What veterinary care do the pets receive?",
        content:
            "All pets at PetPal receive health checkups, vaccinations, and necessary treatments before adoption to ensure they are healthy and ready for their new homes.",

    },
    {
        title: "Do you offer support for new pet owners?",
        content:
            "Yes! We guide new pet parents with care tips, feeding advice, and basic training support to help both you and your companion adjust comfortably.",

    },
    {
        title: "Are there requirements for adopters?",
        content:
            "We simply look for safe, loving, and responsible homes where pets will receive proper care, attention, and affection.",

    },
];


const Faq = () => {
    return (
        <section id="faq" className="py-24 px-6 lg:px-12 bg-[#FFF6E5] dark:bg-[#1E1A17]">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <FadeUp>
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] mb-4">
                            Frequently Asked Questions
                        </h2>

                        <p className="text-[#6d5d5d] dark:text-[#F0CAA5]">
                            Everything you need to know before welcoming a new companion home.
                        </p>
                    </div>
                </FadeUp>

                {/* Accordion */}
                <FadeUp delay={0.1}>
                    <Accordion className="w-full">
                        {faqItems.map((item, index) => (
                            <Accordion.Item key={index}>
                                <Accordion.Heading>
                                    <Accordion.Trigger>
                                        <CheckCheckIcon size={20} className="mr-2" />
                                        {item.title}
                                        <Accordion.Indicator>
                                            <ChevronDown />
                                        </Accordion.Indicator>
                                    </Accordion.Trigger>
                                </Accordion.Heading>
                                <Accordion.Panel>
                                    <Accordion.Body>{item.content}</Accordion.Body>
                                </Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </FadeUp>
            </div>
        </section>
    );
};

export default Faq;