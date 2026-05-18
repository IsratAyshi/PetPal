"use client";
import { Card, Separator } from '@heroui/react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';
import { useState } from 'react';

const SignUpPage = () => {

    const [passwordError, setPasswordError] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        // console.log(user);

        if (user.password !== user.confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        setPasswordError("");

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            image: user.image,
            email: user.email,
            password: user.password,

        })

        // console.log(data, error);
        if (data) {
            toast.success("Signed up successfully!");
            redirect("/login")
        }
        if (error) {
            toast.error(error.message);
        }

    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        })

    }

    return (
        <div className='bg-[#ffdacb] dark:bg-[#1E1A17] md:flex justify-between'>

            <div className="hidden md:flex-1 md:flex flex-col gap-8 items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-semibold font-londrina-solid tracking-widest text-center leading-relaxed text-[#4b2e2e] dark:text-[#FFE8D6]">
                    <span className="text-[#ff7f50] dark:text-[#FFAA80]">Happiness</span>
                    <br /> Starts Here
                </h1>

                <Image
                    src="/assets/ilustration1.png"
                    alt="illustration1"
                    width={1000}
                    height={800}
                    className="max-w-[300px]"
                />

            </div>

            <div className="max-w-7xl py-10 md:p-20 flex flex-col justify-center bg-white dark:bg-[#6d5d5d]/40 my-5 md:rounded-l-4xl flex-1">

                <div className="my-6">
                    <h1 className="text-3xl font-bold text-[#4b2e2e] dark:text-[#FFE8D6] text-center">Sign Up to PetPal</h1>
                    <p className="text-gray-500 text-center mt-1">Become part of a caring pet community</p>
                </div>

                <Card className='shadow-none max-w-md mx-auto mb-4 px-6 py-8 '>
                    <Form onSubmit={onSubmit}
                        className="flex w-96 flex-col gap-4" >

                        <TextField
                            isRequired
                            name="name"
                            type="text"

                        >
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                            <FieldError />
                        </TextField>

                        <TextField
                            // isRequired
                            name="image"
                            type="url"

                        >
                            <Label>Image URL</Label>
                            <Input placeholder="Enter image URL" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="confirmPassword"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label> Confirm Password</Label>
                            <Input placeholder="Enter your password again" />
                            {/* <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description> */}
                            <FieldError />
                        </TextField>
                        {passwordError && (
                            <p className="text-sm text-red-500 -mt-2">{passwordError}</p>
                        )}

                        <Button type="submit" className="bg-[#ff7f50] dark:bg-[#FFAA80] w-full">
                            <Check />
                            Sign Up
                        </Button>

                    </Form>

                    {/* separator */}
                    <div className='flex gap-3 items-center my-2'>
                        <Separator className="flex-1"></Separator>
                        <span className="text-sm text-gray-400">Or sign up with</span>
                        <Separator className="flex-1"></Separator>
                    </div>

                    <div className="w-full">
                        <Button
                            onClick={handleGoogleSignin}
                            type="reset" variant="outline"
                            className="rounded-none w-full">
                            <FcGoogle />
                            Sign in with Google
                        </Button>
                    </div>

                    <div>
                        <p className="text-center mt-1 text-sm text-gray-500">Already have an account? <a href="/login" className="text-[#ff7f50] dark:text-[#FFAA80] hover:underline">Login</a></p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SignUpPage;