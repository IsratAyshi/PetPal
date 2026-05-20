import DeleteMyRequestModal from '@/components/DeleteMyReq';
import DashboardSidebar from '@/components/shared/DashboardSidebar';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { Calendar, Clock, Heart, XCircle } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const statusColors = {
    pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-400 dark:border-yellow-800",
    approved: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-400 dark:border-green-800",
    rejected: "bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 border border-red-400 dark:border-red-800",
};

const MyRequestsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    // console.log(session);
    const requester = session?.user;
    // console.log(requester);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-adoption-requests/my-requests/${requester?.id}`);
    const myRequests = await res.json();
    // console.log(myRequests);

    const requestWithPetInfo = [];
    for (const request of myRequests) {
        const petRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/${request.petId}`);
        const pet = await petRes.json();
        requestWithPetInfo.push({ ...request, pet });
    }
    // console.log(requestWithPetInfo);

    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />

            <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-wider">
                            My Requests
                        </h2>
                        <p className="text-slate-500 dark:text-[#C4A99A] mt-1 text-sm">
                            View all your adoption requests status and manage them here.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        {requestWithPetInfo.length > 0 ? (
                            requestWithPetInfo.map((request) => (
                                <div key={request._id}
                                    className="bg-[#FFF6E5] dark:bg-[#1C1410] border border-[#EAAC8E]/30 dark:border-[#3A2E28] rounded-xl p-4 flex flex-wrap justify-between max-w-6xl">

                                    <div className="flex gap-5 justify-center items-center">
                                        <Image
                                            src={request.pet?.image}
                                            alt={request.petName}
                                            width={200}
                                            height={200}
                                            className="w-20 h-20 md:w-35 md:h-35 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                                        />

                                        <div className="flex flex-col gap-1 ">

                                            <h3 className="text-lg font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-widest">
                                                {request.petName}
                                            </h3>

                                            <p className={`text-xs text-slate-500 dark:text-[#C4A99A]  font-medium`}>
                                                <Heart className="inline mr-1 w-4 h-4 text-[#b36639] dark:text-[#FFAA80]" />
                                                {request.pet.species}
                                            </p>

                                            <p className={`text-[#4b2e2e] dark:text-[#C4A99A] text-sm`}>
                                                <Calendar className="w-4 h-4 inline mr-1 text-[#b36639] dark:text-[#FFAA80]" />
                                                <span className="font-semibold">Request Date:</span> {new Date(request.requestDate).toLocaleDateString(
                                                    'en-US',
                                                    {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    }
                                                )}
                                            </p>

                                            <p className={`text-[#4b2e2e] dark:text-[#C4A99A] text-sm`}>
                                                <Calendar className="w-4 h-4 inline mr-1 text-[#b36639] dark:text-[#FFAA80]" />
                                                <span className="font-semibold">Pickup Date:</span> {new Date(request.pickupDate).toLocaleDateString(
                                                    'en-US',
                                                    {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    }
                                                )}
                                            </p>

                                            <span
                                                className={`mt-2 text-sm flex items-center gap-1 px-3 py-1 w-fit rounded-full  font-semibold capitalize ${statusColors[request.status] || statusColors.pending}`}
                                            >
                                                <Clock className="w-3 h-3 text-[#b36639] dark:text-[#FFAA80]" />
                                                {request.status}
                                            </span>



                                        </div>


                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-row mt-4 md:mt-0 md:flex-col lg:flex-row gap-3 ml-auto justify-center items-center ">

                                        <Link
                                            href={`/all-pets/${request.pet._id}`}

                                        >
                                            <Button
                                                variant='outline'
                                                className=" text-center text-sm font-semibold py-2 px-3 rounded-xl border border-[#EAAC8E] text-[#b36639] dark:text-[#FFAA80] hover:bg-[#EAAC8E]/20 dark:hover:bg-[#3A2E28] transition-colors">
                                                View Details
                                            </Button>
                                        </Link>

                                        {
                                            request.status === "pending" && (
                                                <DeleteMyRequestModal request={request} />
                                            )
                                        }


                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <span className="text-6xl mb-4">🐾</span>
                                <h3 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6]">No Adoption Requests Found. Request for a pet from our curated Pet Listings.</h3>

                            </div>
                        )}
                    </div>
                </div>
            </main>

        </div>
    );
};

export default MyRequestsPage;