import React from 'react';
import Image from "next/image";
import {
    MapPin, Clock, Shield, Syringe,
    DollarSign, User, Mail, Heart, ArrowLeft,
    PawPrint
} from "lucide-react";
import Link from "next/link";
import AdoptionForm from '@/components/AdoptionForm';


const speciesEmoji = {
    Dog: "🐶",
    Cat: "🐱",
    Bird: "🐦",
    Rabbit: "🐰",
    Fish: "🐟",
    Hamster: "🐹",
    Other: "🐾"
};

const PetDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/${id}`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Failed to fetch pet details");
    }
    const pet = await res.json();

    const detailItems = [
        {
            icon: Heart,
            label: "Species",
            value: pet.species
        },
        {
            icon: PawPrint,
            label: "Breed",
            value: pet.breed
        },
        {
            icon: Clock,
            label: "Age",
            value: pet.age
        },
        {
            icon: User,
            label: "Gender",
            value: pet.gender
        },
        {
            icon: MapPin,
            label: "Location",
            value: pet.location
        },
        {
            icon: DollarSign,
            label: "Adoption Fee",
            value: pet.adoptionFee === 0 ? "Free" : `$${pet.adoptionFee}`
        },
        {
            icon: Shield,
            label: "Health Status",
            value: pet.healthStatus
        },
        {
            icon: Syringe,
            label: "Vaccinated",
            value: pet.vaccinationStatus
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFF6E5] dark:bg-[#1C1410]">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">

                <Link
                    href="/all-pets"
                    className="inline-flex items-center gap-2 text-sm text-[#4b2e2e] dark:text-[#C4A99A] hover:underline hover:text-[#b36639] dark:hover:text-[#FFAA80] mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Pets
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left side Pet Details */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Image */}
                        <div className="relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src={pet.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/No-Image-Placeholder-landscape.svg/3840px-No-Image-Placeholder-landscape.svg.png"}
                                alt={pet.petName}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Available badge */}
                            <div className={`absolute top-4 left-4 ${pet.adoptionStatus === "Available" ? "bg-green-600" : "bg-[#E94043]"} text-white text-xs font-semibold px-3 py-2 rounded-full capitalize shadow`}>
                                {pet.adoptionStatus}
                            </div>
                        </div>

                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex flex-col gap-2">

                                <h1 className="text-4xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-widest">
                                    {pet.petName}
                                </h1>

                                {/* Tags */}
                                <div className="flex items-center gap-2 flex-wrap">

                                    <span className="text-xs px-3 py-1 rounded-full bg-[#EAAC8E]/30 dark:bg-[#3A2E28] text-[#b36639] dark:text-[#FFAA80] font-medium">
                                        {pet.species}
                                    </span>

                                    {pet.breed && (
                                        <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-[#2A1F1A] text-slate-600 dark:text-slate-300 font-medium border border-slate-200 dark:border-[#3A2E28]">
                                            {pet.breed}
                                        </span>
                                    )}

                                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${pet.gender === "Male"
                                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                        : "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300"
                                        }`}>
                                        {pet.gender}
                                    </span>

                                </div>
                            </div>

                            {/*Adoption Fee*/}
                            <div className="text-right">
                                <p className="text-xs text-slate-400 dark:text-slate-500">Adoption Fee</p>
                                <p className="text-2xl font-bold text-[#ff7f50] dark:text-[#FFAA80]">
                                    {pet.adoptionFee === 0 ? "Free" : `$${pet.adoptionFee}`}
                                </p>
                            </div>
                        </div>



                        {/* All Details*/}
                        <div className="grid grid-cols-2 gap-3">
                            {detailItems.map((info, index) => {
                                const value = info?.value;
                                const label = info.label;
                                const Icon = info?.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 bg-white dark:bg-[#2A1F1A] rounded-xl p-4 border border-[#EAAC8E]/20 dark:border-[#3A2E28]"
                                    >
                                        <Icon className="w-4 h-4 text-[#b36639] dark:text-[#FFAA80] flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-slate-400 dark:text-slate-500">{label}</p>
                                            <p className="text-sm font-semibold text-[#4b2e2e] dark:text-[#FFE8D6]">{value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Description */}
                        <div className="bg-white dark:bg-[#2A1F1A] rounded-2xl p-6 border border-[#EAAC8E]/30 dark:border-[#3A2E28]">
                            <h2 className="font-bold text-[#4b2e2e] dark:text-[#FFE8D6] mb-3  text-xl">
                                About {pet.petName}
                            </h2>
                            <p className="text-slate-600 dark:text-[#C4A99A] text-sm leading-relaxed">
                                {pet.description}
                            </p>
                        </div>


                        {/* Owner Information */}
                        <div className="bg-white dark:bg-[#2A1F1A] rounded-2xl p-6 border border-[#EAAC8E]/30 dark:border-[#3A2E28]">
                            <h2 className="font-bold text-[#4b2e2e] dark:text-[#FFE8D6] mb-4 text-xl">
                                Listed By
                            </h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-[#C4A99A]">
                                    <User className="w-4 h-4 text-[#b36639] dark:text-[#FFAA80]" />
                                    {pet.ownerName || "Anonymous"}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-[#C4A99A]">
                                    <Mail className="w-4 h-4 text-[#b36639] dark:text-[#FFAA80]" />
                                    {pet.ownerEmail || "—"}
                                </div>
                            </div>
                        </div>

                    </div>




                    {/* Right side Adoption Form */}
                    <div className="lg:sticky lg:top-24">
                        <div
                            className="md:max-w-md
                        bg-white dark:bg-[#2A1F1A] rounded-2xl border border-[#EAAC8E]/40 dark:border-[#3A2E28] shadow-sm p-6">

                            <AdoptionForm pet={pet} />


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PetDetailsPage;