
import Image from 'next/image';
import Link from 'next/link';
import { Heart, CalendarDays, } from 'lucide-react';
import EditPetModal from './EditPet';
import DeletePetModal from './DeletePet';
import PetRequestsModal from './PetRequestsModal';

const speciesEmoji = {
    Dog: "🐶",
    Cat: "🐱",
    Bird: "🐦",
    Rabbit: "🐰",
    Fish: "🐟",
    Hamster: "🐹",
    Other: "🐾"
};

const ListingCard = ({ pet }) => {
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

                <h3 className="text-lg font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-widest">
                    {pet.petName}
                </h3>


                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-[#C4A99A]">
                    <span>{pet?.breed || "Unknown Breed"}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        Age: {pet.age}
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

                    <PetRequestsModal pet={pet} />
                </div>

                <div className="flex gap-2 mt-auto pt-2">

                    <EditPetModal pet={pet} />

                    <DeletePetModal pet={pet} />
                </div>
            </div>
        </div>
    );
};

export default ListingCard;