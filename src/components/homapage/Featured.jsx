import React from 'react';
import PetCard from '../shared/PetCard';
import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedPetCard from '../animation/AnimatedPetCard';


const Featured = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const featuredPets = await res.json();

    return (
        <div className='relative bg-[#F0CAA5]/70'>

            {/* Background Overlay */}
            <div className="absolute inset-0 dark:bg-[#1E1A17]/28" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className='flex justify-between items-center flex-wrap'>
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] leading-tight mb-3">
                            Featured Friends
                        </h2>
                        <p className=" text-[#6d5d5d] dark:text-[#C4A99A] mb-6">These adorable souls are looking for their forever home.</p>
                    </div>

                    <div>
                        <Link href={`/all-pets`}>
                            <Button variant='outline' className="border border-[#EAAC8E]  py-3 px-5 h-auto font-medium text-[#4b2e2e] dark:text-[#FFE8D6] flex gap-2 justify-center items-center rounded-xl">All Pets<ArrowRight /></Button>
                        </Link>
                    </div>
                </div>

                <AnimatedPetCard className='grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 mt-6'>
                    {
                        featuredPets.map((pet) => (
                            <PetCard key={pet._id} pet={pet} />
                        ))
                    }
                </AnimatedPetCard>
            </div>


        </div>
    );
};

export default Featured;