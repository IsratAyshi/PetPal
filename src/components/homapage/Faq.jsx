import React from 'react';
import { Accordion } from "@heroui/react";
import { ChevronDown, CheckCheckIcon } from "lucide-react";

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
        <section className="py-24 px-6 lg:px-12 bg-[#FFF6E5]">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#4b2e2e] mb-4">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[#6d5d5d]">
                        Everything you need to know before welcoming a new companion home.
                    </p>
                </div>

                {/* Accordion */}
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
            </div>
        </section>
    );
};

export default Faq;