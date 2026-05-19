import React from 'react';
import { ListBox, Select } from '@heroui/react';
import PetCard from '@/components/shared/PetCard';
import { Search } from 'lucide-react';

const AllPetsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets`);
    const pets = await res.json();
    // console.log(pets);

    const species = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Hamster", "Other"];

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-2 items-center">

                    {/* Search*/}
                    <div className="md:col-span-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                            <input
                                type="text"
                                placeholder="Search pets by name"
                                className="w-full px-10 py-2 rounded-xl border border-[#EAAC8E]/50 dark:border-[#3A2E28] bg-white dark:bg-[#2A1F1A] text-slate-700 dark:text-[#F5E6DC] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#EAAC8E] dark:focus:ring-[#7A3E28] text-sm"
                            />
                        </div>
                    </div>


                    {/* Species Filter */}
                    <Select placeholder="SPECIES" aria-label="Species">
                        <Select.Trigger className="border border-[#EAAC8E]/50 dark:border-[#3A2E28] rounded-xl bg-white dark:bg-[#2A1F1A] text-slate-700 dark:text-[#F5E6DC]">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                {
                                    species.map((s) =>
                                    (<ListBox.Item
                                        key={s} id={s}
                                        textValue={s}>
                                        {s}
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    ))
                                }
                            </ListBox>
                        </Select.Popover>
                    </Select>

                </div>


                {pets.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="text-6xl mb-4">🐾</span>
                        <h3 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6]">No pets found</h3>

                    </div>
                ) : (
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {pets.map((pet) => (
                            <PetCard key={pet._id} pet={pet} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default AllPetsPage;