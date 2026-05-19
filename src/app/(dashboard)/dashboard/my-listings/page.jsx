import ListingCard from '@/components/ListingCard';
import DashboardSidebar from '@/components/shared/DashboardSidebar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyListingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    // console.log(session);
    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-pets/${user?.id}`);
    const myListings = await res.json();

    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />

            <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-wider">
                            My Pet Listings
                        </h2>
                        <p className="text-slate-500 dark:text-[#C4A99A] mt-1 text-sm">
                            Manage your pet listings and adoption requests here.
                        </p>
                    </div>


                    {myListings.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <span className="text-6xl mb-4">🐾</span>
                            <h3 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6]">No pets listed for adoption yet. Add one now!</h3>

                        </div>
                    ) : (
                        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {myListings.map((pet) => (
                                <ListingCard key={pet._id} pet={pet} />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default MyListingsPage;