"use client";
import React, { useCallback, useEffect, useState } from 'react';
import RequestCard from './RequestCard';
import { Button, Modal } from '@heroui/react';
import { Heart, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

const PetRequestsModal = ({ pet }) => {

    const [adoptRequests, setAdoptRequests] = useState([]);

    useEffect(() => {
        const fetchAdoptionRequests = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-adoption-requests/this-pet-requests/${pet._id}`);
            const data = await res.json();
            setAdoptRequests(data);
        };

        fetchAdoptionRequests();
    }, [pet._id]);


    const handleApprove = async (requestId, petId) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-adoption-requests/${requestId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "approved" }),
        });
        const updatedRequest = await res.json();
        console.log(updatedRequest);

        if (updatedRequest.modifiedCount > 0) {
            const res2 = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/${petId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ adoptionStatus: "adopted" }),
            });
            const updatedPet = await res2.json();
            console.log(updatedPet);

            const res3 = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-adoption-requests/reject-others/${requestId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ petId }),
            });
            const updatedOtherRequests = await res3.json();
            console.log(updatedOtherRequests);

            toast.success("Request approved successfully! Pet marked as adopted.");
        }
    }

    const handleReject = async (requestId) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-adoption-requests/${requestId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "rejected" }),
        });
        const updatedRequest = await res.json();
        toast.error("Request rejected successfully!");
    }



    return (
        <Modal>
            {/* Trigger Button */}
            <Button
                className="flex-1 flex items-center justify-center gap-1 text-sm font-semibold py-2 px-3 rounded-xl bg-[#EAAC8E] dark:bg-[#7A3E28] text-[#4b2e2e] dark:text-[#FFE8D6] hover:bg-[#ffa67e] dark:hover:bg-[#9B5035] transition-colors"
            >
                <Heart className="w-3.5 h-3.5" /> Requests
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl rounded-2xl max-h-[80vh] flex flex-col">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-[#EAAC8E]/20 text-[#b36639] dark:text-[#FFAA80]">
                                <Heart className="size-5" />
                            </Modal.Icon>
                            <div>
                                <Modal.Heading className="font-londrina-solid tracking-wider text-xl text-[#4b2e2e] dark:text-[#FFE8D6]">
                                    Adoption Requests
                                </Modal.Heading>
                                <p className="text-xs text-slate-400 dark:text-slate-300 mt-0.5">
                                    {pet.petName} has {adoptRequests.length} request
                                </p>
                            </div>
                        </Modal.Header>


                        <div className="overflow-y-auto px-6 py-6 flex flex-col gap-3">
                            {/* No requests */}
                            {adoptRequests.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                                    <p className="text font-semibold text-[#4b2e2e] dark:text-[#FFE8D6]">
                                        No requests yet
                                    </p>
                                    <p className="text-xs text-slate-400 dark:text-slate-500">
                                        Adoption requests for {pet.petName} will appear here...
                                    </p>
                                </div>
                            )}

                            {adoptRequests.map((request) => (
                                <RequestCard
                                    key={request._id}
                                    request={request}
                                    pet={pet}
                                    handleApprove={handleApprove}
                                    handleReject={handleReject}
                                />
                            ))}

                        </div>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default PetRequestsModal;