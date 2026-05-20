"use client";
import { ListBox, Select } from '@heroui/react';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';


const FilterAndSearch = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const allSpecies = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Hamster", "Other", "All"];

    const search = searchParams.get("search") || "";
    const species = searchParams.get("species") || "All";

    const updateFilters = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());

        if (key === "species" && value === "All") {
            params.delete("species");
        }
        else if (value) {
            params.set(key, value);
        }
        else {
            params.delete(key);
        }

        router.push(`/all-pets?${params.toString()}`);
    };



    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-2 items-center">
            {/* Search*/}
            <div className="md:col-span-2">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                        value={search}
                        onChange={(e) =>
                            updateFilters("search", e.target.value)
                        }
                        type="text"
                        placeholder="Search pets by name"
                        className="w-full px-10 py-2 rounded-xl border border-[#EAAC8E]/50 dark:border-[#3A2E28] bg-white dark:bg-[#2A1F1A] text-slate-700 dark:text-[#F5E6DC] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#EAAC8E] dark:focus:ring-[#7A3E28] text-sm"
                    />
                </div>
            </div>


            {/* Species Filter */}
            <Select
                value={species}
                onChange={(value) => updateFilters("species", value)}
                placeholder="SPECIES"
                aria-label="Species">
                <Select.Trigger className="border border-[#EAAC8E]/50 dark:border-[#3A2E28] rounded-xl bg-white dark:bg-[#2A1F1A] text-slate-700 dark:text-[#F5E6DC]">
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        {
                            allSpecies.map((s) =>
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
    );
};

export default FilterAndSearch;