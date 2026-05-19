"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const DeletePetModal = ({ pet }) => {

    const { _id, petName } = pet;

    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.deletedCount > 0) toast.success("Pet deleted successfully!");
        redirect("/dashboard/my-listings");
    };

    return (
        <AlertDialog>
            <Button
                variant="danger"
                className="flex-1 flex items-center justify-center gap-1 text-sm font-semibold py-2 px-3 rounded-xl bg-red-400 dark:bg-red-600 text-[#4b2e2e] dark:text-[#FFE8D6] hover:bg-red-500 dark:hover:bg-red-700 transition-colors"
            >
                <Trash className="w-3.5 h-3.5" /> Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] ">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Pet permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to delete <strong>{petName}</strong> from your listings? This action cannot be undone and will permanently remove this pet from the system.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="outline" className="rounded-xl">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                slot="close" variant="danger" className="bg-red-400 dark:bg-red-600 text-[#4b2e2e] dark:text-[#FFE8D6] hover:bg-red-500 dark:hover:bg-red-700 rounded-xl">
                                Delete Pet
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>

    );
};

export default DeletePetModal;