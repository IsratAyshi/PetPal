"use client";
import { TextField, Label, Input, FieldError, TextArea, Form, Button } from "@heroui/react";
import { Heart, CalendarDays, User, Mail, TriangleAlert, LoaderPinwheel, BadgeCheck, HeartCrack } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdoptionForm = ({ pet }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [requestStatus, setRequestStatus] = useState(null);


    useEffect(() => {
        const fetchRequestStatus = async () => {

            const { data: tokenData } = await authClient.token();

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-adoption-requests/check?petId=${pet._id}&requesterId=${user?.id}`,
                {
                    headers: {
                        authorization: `Bearer ${tokenData?.token}`,
                    },
                }
            );

            const data = await res.json();
            // console.log(data);

            // Existing request found
            if (data?.status) {
                setRequestStatus(data.status);
            }
            // Pet already adopted
            else if (pet.adoptionStatus !== "available") {
                setRequestStatus("adopted");
            }
            // Owner view
            else if (user?.id === pet.ownerId) {
                setRequestStatus("owner");
            }

        };

        if (user?.id && pet?._id) {
            fetchRequestStatus();
        }
    }, [user, pet]);


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const requestData = {
            petId: pet._id,
            petName: pet.petName,
            ownerId: pet.ownerId,
            ownerEmail: pet.ownerEmail,
            requesterId: user?.id,
            requesterName: user?.name,
            requesterEmail: user?.email,
            pickupDate: new Date(data.pickupDate),
            message: data.message,
            status: "pending",
            requestDate: new Date(),
        };

        // console.log(requestData);
        const { data: tokenData } = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-adoption-requests`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`,

            },
            body: JSON.stringify(requestData)
        });

        const adoptionRequest = await res.json();
        // console.log(adoptionRequest);
        if (adoptionRequest.insertedId) {
            toast.success("Request sent successfully!");
        }
        else {
            toast.error("Failed to send request!");
        }

        if (res.ok) {
            setRequestStatus("pending");
        }
        else if (adoptionRequest.message === "This pet is not available for adoption") {
            setRequestStatus("adopted");
        }
        else if (adoptionRequest.message === "You cannot adopt your own pet") {
            setRequestStatus("owner");
        }
        else if (adoptionRequest.message === "You already requested this pet") {
            setRequestStatus("pending");
        }


    };


    // -----Conditional UI Rendering-----

    if (user?.id === pet.ownerId) {
        return (
            <div className="mb-5 flex flex-col items-center justify-center gap-3 text-center">
                <div className="rounded-full bg-yellow-200/40 p-4">
                    <TriangleAlert className="w-15 h-15 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
                </div>
                <h1 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] ">You are the owner of this pet</h1>
                <p className="text-xs text-[#4b2e2e] dark:text-[#F5E6DC] mt-0.5 leading-relaxed max-w-sm">Pet owners cannot request for adoption of their own pet</p>
            </div>
        );
    }

    if (requestStatus === "pending") {
        return (
            <div className="mb-5 flex flex-col items-center justify-center gap-3 text-center">
                <div className="rounded-full bg-blue-200/40 p-4">
                    <LoaderPinwheel className="w-15 h-15 text-blue-500 dark:text-blue-400" />
                </div>
                <h1 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] ">Request Submitted Already !</h1>
                <p className="text-xs text-[#4b2e2e] dark:text-[#F5E6DC] mt-0.5 leading-relaxed max-w-sm">Your request is pending for approval. You can track your request statuses in your dashboard My Requests page. Please wait for the owner to respond.</p>
            </div>
        );
    }

    if (requestStatus === "approved") {
        return (
            <div className="mb-5 flex flex-col items-center justify-center gap-3 text-center">
                <div className="rounded-full bg-green-200/40 p-4">
                    <BadgeCheck className="w-15 h-15 text-green-500 dark:text-green-600" />
                </div>
                <h1 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] ">Your Request is Approved !</h1>
                <p className="text-xs text-[#4b2e2e] dark:text-[#F5E6DC] mt-0.5 leading-relaxed max-w-sm">Your request is approved. Congrats! Hope you and your new pet have a great time together.</p>
            </div>
        )
    }

    if (requestStatus === "rejected") {
        return (
            <div className="mb-5 flex flex-col items-center justify-center gap-3 text-center">
                <div className="rounded-full bg-red-200/40 p-4">
                    <BadgeCheck className="w-15 h-15 text-red-500 dark:text-red-600" />
                </div>
                <h1 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] ">Your Request has been Rejected</h1>
                <p className="text-xs text-[#4b2e2e] dark:text-[#F5E6DC] mt-0.5 leading-relaxed max-w-sm">Your request has been rejected. Check out other pet companions in our all pet listings</p>
            </div>
        )
    }

    if (requestStatus === "adopted") {
        return (
            <div className="mb-5 flex flex-col items-center justify-center gap-3 text-center">
                <div className="rounded-full bg-red-200/40 p-4">
                    <HeartCrack className="w-15 h-15 text-red-500 dark:text-red-600" />
                </div>
                <h1 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] ">This pet is already adopted</h1>
                <p className="text-xs text-[#4b2e2e] dark:text-[#F5E6DC] mt-0.5 leading-relaxed max-w-sm">This pet is has found a new home. Check out other pet companions in our all pet listings</p>
            </div>
        )
    }

    return (
        <div>
            {/* Form Header */}
            <div className="mb-5 flex items-start gap-2">
                <Heart className="w-5 h-5 text-[#ff7f50] dark:text-[#FFAA80] mt-0.5 flex-shrink-0" />
                <div>
                    <h2 className="text-xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-widest">
                        Request to Adopt {pet.petName}
                    </h2>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        Fill out this form and the owner will review your request.
                    </p>
                </div>
            </div>

            <Form onSubmit={onSubmit} className="flex flex-col gap-4">

                {/* Pet Name */}
                <TextField name="petName">
                    <Label className="text-slate-700 dark:text-[#F5E6DC] text-sm">Pet Name</Label>
                    <Input
                        readOnly
                        value={pet.petName || ""}
                        className="rounded-xl text-slate-400 cursor-not-allowed"
                    />
                </TextField>

                {/* Your Name */}
                <TextField name="userName">
                    <Label className="text-slate-700 dark:text-[#F5E6DC] text-sm">Your Name</Label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10" />
                        <Input
                            readOnly
                            value={user?.name || ""}
                            className="rounded-xl pl-10  text-slate-400 cursor-not-allowed w-full"
                        />
                    </div>
                </TextField>

                {/* Your Email */}
                <TextField name="userEmail">
                    <Label className="text-slate-700 dark:text-[#F5E6DC] text-sm">Your Email</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10" />
                        <Input
                            readOnly
                            value={user?.email || ""}
                            className="rounded-xl pl-10   text-slate-400 cursor-not-allowed w-full"
                        />
                    </div>
                </TextField>

                {/* Pickup Date */}
                <TextField name="pickupDate" isRequired>
                    <Label className="text-slate-700 dark:text-[#F5E6DC] text-sm">Preferred Pickup Date</Label>
                    <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10" />
                        <Input
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            className="rounded-xl pl-10 w-full"
                        />
                    </div>
                    <FieldError />
                </TextField>

                {/* Message */}
                <TextField name="message" isRequired>
                    <Label className="text-slate-700 dark:text-[#F5E6DC] text-sm">Message</Label>
                    <TextArea
                        placeholder={`Tell the owner why you'd be a great match for ${pet.petName}...`}
                        className="rounded-xl min-h-28 resize-none"
                    />
                    <FieldError />
                </TextField>

                <Button
                    type="submit"
                    className="w-full rounded-xl bg-[#EAAC8E] dark:bg-[#7A3E28] hover:bg-[#ffa67e] dark:hover:bg-[#9B5035] text-[#4b2e2e] dark:text-[#FFE8D6] font-bold py-3 flex items-center justify-center gap-2 transition-colors mt-2"
                >
                    <Heart className="w-4 h-4" />
                    Send Adoption Request
                </Button>

            </Form>

        </div>
    );
};

export default AdoptionForm;