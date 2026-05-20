"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { MapPin, Heart, CalendarDays } from 'lucide-react';

const speciesEmoji = {
    Dog: "🐶",
    Cat: "🐱",
    Bird: "🐦",
    Rabbit: "🐰",
    Fish: "🐟",
    Hamster: "🐹",
    Other: "🐾"
};

const genderColor = {
    Male: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    Female: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
};

const PetCard = ({ pet }) => {

    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleAdoptNow = () => {
        if (!user) {
            router.push("/login");
            return;
        }
        router.push(`/all-pets/${pet._id}`);
    };

    return (
        <div className="group bg-white dark:bg-[#2A1F1A] border border-[#EAAC8E]/30 dark:border-[#3A2E28] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">

            <div className="relative h-52 overflow-hidden">
                <Image
                    src={pet?.image || "/assets/placeholderNoimg.png"}
                    alt={pet.petName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div
                    className="absolute top-3 left-3 bg-white/90 dark:bg-[#2A1F1A]/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-[#4b2e2e] dark:text-[#FFE8D6]">
                    {speciesEmoji[pet.species]} {pet.species}
                </div>

                <div
                    className="absolute top-3 right-3 bg-[#EAAC8E] dark:bg-[#7A3E28] px-2 py-1 rounded-full text-xs font-bold text-[#4b2e2e] dark:text-[#FFE8D6]">
                    ${pet.adoptionFee}
                </div>
            </div>


            <div className="p-4 flex flex-col flex-1 gap-3">
                <div className="flex items-center justify-between">

                    <h3 className="text-lg font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-widest">
                        {pet.petName}
                    </h3>

                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${genderColor[pet.gender]}`}>
                        {pet.gender}
                    </span>

                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-[#C4A99A]">
                    <span>{pet?.breed || "Unknown Breed"}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        Age: {pet.age}
                    </span>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-[#C4A99A]/60">
                    <MapPin className="w-3 h-3" />
                    {pet.location}
                </div>


                <div className="flex gap-2 flex-wrap">

                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
                        {pet.healthStatus}
                    </span>

                    <span className="text-xs bg-[#FFF6E5] dark:bg-[#3A2E28] text-[#b36639] dark:text-[#FFAA80] px-2 py-0.5 rounded-full">
                        {pet.vaccinationStatus}
                    </span>

                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto pt-2">
                    <Link
                        href={`/all-pets/${pet._id}`}
                        className="flex-1 text-center text-sm font-semibold py-2 px-3 rounded-xl border border-[#EAAC8E] text-[#b36639] dark:text-[#FFAA80] hover:bg-[#EAAC8E]/20 dark:hover:bg-[#3A2E28] transition-colors"
                    >
                        View Details
                    </Link>

                    <button
                        onClick={handleAdoptNow}
                        className="flex-1 flex items-center justify-center gap-1 text-sm font-semibold py-2 px-3 rounded-xl bg-[#EAAC8E] dark:bg-[#7A3E28] text-[#4b2e2e] dark:text-[#FFE8D6] hover:bg-[#ffa67e] dark:hover:bg-[#9B5035] transition-colors"
                    >
                        <Heart className="w-3.5 h-3.5" /> Adopt Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PetCard;