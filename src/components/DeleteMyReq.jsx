"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash, XCircle } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const DeleteMyRequestModal = ({ request }) => {

    const { _id } = request;
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-adoption-requests/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.deletedCount > 0) {
            toast.success("Request deleted successfully!");
        }
        redirect("/dashboard/my-requests");
    };

    return (
        <AlertDialog>
            <Button
                variant="danger"
                className=" text-center text-sm font-semibold py-2 px-4.5 rounded-xl "

            >
                <XCircle className="w-4 h-4 mr-1" /> Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] ">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Request permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to delete your request for adoption of this pet from your requests? This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="outline" className="rounded-xl">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                slot="close" variant="danger" className="bg-red-400 dark:bg-red-600  text-[#FFE8D6] hover:bg-red-500 dark:hover:bg-red-700 rounded-xl">
                                Delete My Request
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteMyRequestModal;