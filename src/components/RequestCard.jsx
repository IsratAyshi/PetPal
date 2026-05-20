"use client";

import { useState, useEffect } from "react";
import { Modal, Button } from "@heroui/react";
import { Heart, Calendar, Mail, User, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react";

const statusColors = {
    pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    approved: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    rejected: "bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400",
};

const RequestCard = ({ request, handleApprove, handleReject }) => {

    const handleApproveButton = async () => {
        await handleApprove(request._id, request.petId);

    };

    const handleRejectButton = async () => {
        await handleReject(request._id);

    };

    return (
        <div className="bg-[#FFF6E5] dark:bg-[#1C1410] border border-[#EAAC8E]/30 dark:border-[#3A2E28] rounded-xl p-4 flex flex-col gap-3">

            <div className="flex items-start justify-between gap-2">
                {/* Requester Info */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#4b2e2e] dark:text-[#FFE8D6]">
                        <User className="w-4 h-4 text-[#b36639] dark:text-[#FFAA80]" />
                        {request.requesterName || "Unknown"}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#C4A99A]">
                        <Mail className="w-3.5 h-3.5 text-[#b36639] dark:text-[#FFAA80]" />
                        {request.requesterEmail || "—"}
                    </div>
                </div>

                {/* Status Badge */}
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold capitalize ${statusColors[request.status] || statusColors.pending}`}>
                    {request.status || "pending"}
                </span>
            </div>

            {/* Pickup Date */}

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#C4A99A]">
                <Calendar className="w-3.5 h-3.5 text-[#b36639] dark:text-[#FFAA80]" />
                Preferred Pickup:{" "}
                <span className="font-medium text-[#4b2e2e] dark:text-[#FFE8D6]">
                    {new Date(request.pickupDate).toLocaleDateString(
                        'en-US',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                    )}
                </span>
            </div>

            {/* Message */}
            <p className="text-xs text-slate-600 dark:text-[#C4A99A] bg-white dark:bg-[#2A1F1A] rounded-lg p-3 border border-[#EAAC8E]/20 dark:border-[#3A2E28] leading-relaxed">
                {request.message}
            </p>

            {/* Submitted At */}
            {request.createdAt && (
                <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-600">
                    <Clock className="w-3 h-3" />
                    Submitted: {new Date(request.createdAt).toLocaleDateString()}
                </div>
            )}

            {/* Approve / Reject */}
            {
                request.status === "pending" && (
                    <div className="flex gap-2 mt-1">
                        <button
                            onClick={handleApproveButton}
                            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors disabled:opacity-50"
                        >
                            Approve
                        </button>
                        <button
                            onClick={handleRejectButton}
                            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-red-100 dark:bg-red-900/20 text-red-500 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors disabled:opacity-50"
                        >
                            Reject
                        </button>
                    </div>
                )

            }

        </div>
    );
};

export default RequestCard;