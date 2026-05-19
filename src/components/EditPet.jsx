"use client";
import { authClient } from '@/lib/auth-client';
import { PencilToLine, TrashBin } from '@gravity-ui/icons';
import { FieldError, Input, Label, TextField, TextArea, Button, Card, Modal, Surface, Select, ListBox, Form } from '@heroui/react';
import { PenLine, PlusCircle } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const EditPetModal = ({ pet }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const router = useRouter();

    const { _id, petName, species, breed, age, gender, description, image, location, adoptionFee, healthStatus, vaccinationStatus } = pet;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData.entries());


        // conSsole.log(updatedData);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });

        const data = await res.json();

        if (data.modifiedCount > 0) {
            router.refresh();
            toast.success("Pet details updated successfully!");
        }
    }

    return (
        <Modal>
            <Button
                variant='outline'
                className="flex-1 flex items-center justify-center gap-1 text-sm font-semibold py-2 px-3 rounded-xl border border-green-500 text-green-500  dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
            >
                <PenLine className="w-3.5 h-3.5" /> Edit Details
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl rounded-2xl max-h-[80vh] flex flex-col">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <PencilToLine className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className='font-gilda-display font-semibold text-xl'>Edit Listed Pet Details</Modal.Heading>

                        </Modal.Header>

                        <div className="overflow-y-auto pb-8">
                            <Form onSubmit={onSubmit} className="p-8 space-y-8">

                                <div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        {/* Pet Name */}
                                        <TextField defaultValue={petName}
                                            name="petName" isRequired>
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Pet Name</Label>
                                            <Input placeholder="e.g. Buddy" className="rounded-xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Species */}
                                        <Select
                                            defaultValue={species}
                                            name="species" isRequired placeholder="Select species">
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Species</Label>
                                            <Select.Trigger className="rounded-xl">
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    {["Dog", "Cat", "Bird", "Rabbit", "Fish", "Hamster", "Other"].map((s) => (
                                                        <ListBox.Item key={s} id={s} textValue={s}>
                                                            {s}
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        {/* Breed */}
                                        <TextField
                                            defaultValue={breed} name="breed">
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Breed</Label>
                                            <Input placeholder="e.g. Golden Retriever" className="rounded-xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Age */}
                                        <TextField
                                            defaultValue={age} name="age" isRequired>
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Age</Label>
                                            <Input placeholder="e.g. 2 years" className="rounded-xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Gender */}
                                        <Select
                                            defaultValue={gender} name="gender" isRequired placeholder="Select gender">
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Gender</Label>
                                            <Select.Trigger className="rounded-xl">
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    {["Male", "Female"].map((g) => (
                                                        <ListBox.Item key={g} id={g} textValue={g}>
                                                            {g}
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        {/* Location */}
                                        <TextField defaultValue={location}
                                            name="location" isRequired>
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Location</Label>
                                            <Input placeholder="e.g. Dhaka, Bangladesh" className="rounded-xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Image URL */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                defaultValue={image}
                                                name="image">
                                                <Label className="text-slate-700 dark:text-[#F5E6DC]">Image URL</Label>
                                                <Input type="url" placeholder="https://example.com/pet.jpg" className="rounded-xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                    </div>
                                </div>


                                {/* Pet Health */}
                                <div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        {/* Health Status */}
                                        <Select
                                            defaultValue={healthStatus} name="healthStatus" isRequired placeholder="Select health status">
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Health Status</Label>
                                            <Select.Trigger className="rounded-xl">
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    {["Healthy", "Minor Issues", "Under Treatment", "Recovered"].map((h) => (
                                                        <ListBox.Item key={h} id={h} textValue={h}>
                                                            {h}
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        {/* Vaccination Status */}
                                        <Select
                                            defaultValue={vaccinationStatus} name="vaccinationStatus" isRequired placeholder="Select vaccination status">
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Vaccination Status</Label>
                                            <Select.Trigger className="rounded-xl">
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    {["Fully Vaccinated", "Partially Vaccinated", "Not Vaccinated", "Unknown"].map((v) => (
                                                        <ListBox.Item key={v} id={v} textValue={v}>
                                                            {v}
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        {/* Adoption Fee */}
                                        <TextField defaultValue={adoptionFee} name="adoptionFee"
                                            isRequired>
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Adoption Fee (USD)</Label>
                                            <Input type="number" placeholder="0" className="rounded-xl" />
                                            <FieldError />
                                        </TextField>

                                    </div>
                                </div>


                                {/* Description */}
                                <div>

                                    <TextField defaultValue={description}
                                        name="description" isRequired>
                                        <Label className="text-slate-700 dark:text-[#F5E6DC]">About this pet</Label>
                                        <TextArea
                                            placeholder="Describe the pet's personality, habits, and anything adopters should know..."
                                            className="rounded-xl min-h-32"
                                        />
                                        <FieldError />
                                    </TextField>
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    className="w-full rounded-xl bg-[#60B46A] hover:bg-[#46944F] text-white font-bold py-3 flex items-center justify-center gap-2 transition-colors"
                                >
                                    Update Pet Details
                                </Button>

                            </Form>
                        </div>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>

    );
};

export default EditPetModal;