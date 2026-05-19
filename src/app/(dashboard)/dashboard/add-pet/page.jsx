"use client";

import DashboardSidebar from '@/components/shared/DashboardSidebar';
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { TextField, Label, Input, FieldError, TextArea, Form, Select, ListBox } from '@heroui/react';
import { Button } from '@heroui/react';
import { PlusCircle } from 'lucide-react';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const AddPetPage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const pet = Object.fromEntries(formData.entries());

        const petData = {
            ...pet,
            ownerId: user?.id,
            adoptionStatus: "available",
            createdAt: new Date(),
        };
        console.log(petData);

        // api call to add pet
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(petData),
        })
        const data = await res.json();
        // console.log("after POST call: ", data);
        if (data.insertedId) {
            toast.success("Pet listed successfully!");
        }
        redirect("/all-pets");
    }

    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />

            <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="max-w-4xl mx-auto">

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] font-londrina-solid tracking-wider">
                            Add New Pet
                        </h2>
                        <p className="text-slate-500 dark:text-[#C4A99A] mt-1 text-sm">
                            Fill in the details below to list a pet for adoption.
                        </p>
                    </div>

                    {/* Form*/}
                    <div className="bg-white dark:bg-[#2A1F1A] border border-[#EAAC8E]/40 dark:border-[#3A2E28] rounded-2xl shadow-sm">
                        <Form onSubmit={onSubmit} className="p-8 space-y-8">

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#b36639] dark:text-[#FFAA80] mb-4">
                                    Basic Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Pet Name */}
                                    <TextField name="petName" isRequired>
                                        <Label className="text-slate-700 dark:text-[#F5E6DC]">Pet Name</Label>
                                        <Input placeholder="e.g. Buddy" className="rounded-xl" />
                                        <FieldError />
                                    </TextField>

                                    {/* Species */}
                                    <Select name="species" isRequired placeholder="Select species">
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
                                    <TextField name="breed">
                                        <Label className="text-slate-700 dark:text-[#F5E6DC]">Breed</Label>
                                        <Input placeholder="e.g. Golden Retriever" className="rounded-xl" />
                                        <FieldError />
                                    </TextField>

                                    {/* Age */}
                                    <TextField name="age" isRequired>
                                        <Label className="text-slate-700 dark:text-[#F5E6DC]">Age</Label>
                                        <Input placeholder="e.g. 2 years" className="rounded-xl" />
                                        <FieldError />
                                    </TextField>

                                    {/* Gender */}
                                    <Select name="gender" isRequired placeholder="Select gender">
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
                                    <TextField name="location" isRequired>
                                        <Label className="text-slate-700 dark:text-[#F5E6DC]">Location</Label>
                                        <Input placeholder="e.g. Dhaka, Bangladesh" className="rounded-xl" />
                                        <FieldError />
                                    </TextField>

                                    {/* Image URL */}
                                    <div className="md:col-span-2">
                                        <TextField name="image">
                                            <Label className="text-slate-700 dark:text-[#F5E6DC]">Image URL</Label>
                                            <Input type="url" placeholder="https://example.com/pet.jpg" className="rounded-xl" />
                                            <FieldError />
                                        </TextField>
                                    </div>

                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-[#EAAC8E]/30 dark:border-[#3A2E28]" />

                            {/* Pet Health */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#b36639] dark:text-[#FFAA80] mb-4">
                                    Health & Adoption
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Health Status */}
                                    <Select name="healthStatus" isRequired placeholder="Select health status">
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
                                    <Select name="vaccinationStatus" isRequired placeholder="Select vaccination status">
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
                                    <TextField name="adoptionFee"
                                        isRequired>
                                        <Label className="text-slate-700 dark:text-[#F5E6DC]">Adoption Fee (USD)</Label>
                                        <Input type="number" placeholder="0" className="rounded-xl" />
                                        <FieldError />
                                    </TextField>

                                </div>
                            </div>

                            <div className="border-t border-[#EAAC8E]/30 dark:border-[#3A2E28]" />

                            {/* Owner Info */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#b36639] dark:text-[#FFAA80] mb-4">
                                    Owner Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <TextField name="ownerName">
                                        <Label className="text-slate-700 dark:text-[#F5E6DC]">Owner Name</Label>
                                        <Input
                                            readOnly
                                            value={user?.name || ""}
                                            className="rounded-xl bg-slate-50 dark:bg-[#1C1410] text-slate-400 cursor-not-allowed"
                                        />
                                    </TextField>

                                    <TextField name="ownerEmail">
                                        <Label className="text-slate-700 dark:text-[#F5E6DC]">Owner Email</Label>
                                        <Input
                                            readOnly
                                            value={user?.email || ""}
                                            className="rounded-xl bg-slate-50 dark:bg-[#1C1410] text-slate-400 cursor-not-allowed"
                                        />
                                    </TextField>

                                </div>
                            </div>

                            <div className="border-t border-[#EAAC8E]/30 dark:border-[#3A2E28]" />

                            {/* Description */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#b36639] dark:text-[#FFAA80] mb-4">
                                    Description
                                </h3>
                                <TextField name="description" isRequired>
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
                                className="w-full rounded-xl bg-[#EAAC8E] hover:bg-[#ffa67e] text-[#4b2e2e] font-bold py-3 flex items-center justify-center gap-2 transition-colors"
                            >
                                <PlusCircle className="w-4 h-4" />
                                Add Pet for Adoption
                            </Button>

                        </Form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddPetPage;