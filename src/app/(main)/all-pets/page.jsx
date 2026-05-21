import React from 'react';
import PetCard from '@/components/shared/PetCard';
import FilterAndSearch from '@/components/FilterAndSearch';
import AnimatedPetCard from '@/components/animation/AnimatedPetCard';

export const metadata = {
    title: "PetPal | All Pets",
    description: "Find your perfect companion from our curated collection of adorable pets.",
};

const AllPetsPage = async ({ searchParams }) => {
    const params = await searchParams;

    const search = params?.search || "";
    const species = params?.species || "";

    const query = new URLSearchParams();
    if (search) query.append("search", search);
    if (species) query.append("species", species);

    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets`);
    // const pets = await res.json();
    // console.log(pets);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets?${query.toString()}`,
        {
            cache: "no-store"
        });
    const pets = await res.json();
    // console.log(pets);



    return (
        <div className="min-h-screen bg-[#FFF6E5] dark:bg-[#1C1410]">
            <div className="max-w-7xl mx-auto px-8 md:px-4 lg:px-8 py-10">

                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-wider">
                        Find Your <span className="text-[#ff7f50] dark:text-[#FFAA80]">Perfect Pet</span>
                    </h1>
                    <p className="text-slate-500 dark:text-[#C4A99A] mt-2">
                        Find your perfect companion from our adorable pet collection.
                    </p>
                </div>


                {/* Filters */}
                <FilterAndSearch />



                {pets.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="text-6xl mb-4">🐾</span>
                        <h3 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6]">No pets found</h3>

                    </div>
                ) : (
                    <AnimatedPetCard className="grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {pets.map((pet) => (
                            <PetCard key={pet._id} pet={pet} />
                        ))}
                    </AnimatedPetCard>
                )}

            </div>
        </div>
    );
};

export default AllPetsPage;