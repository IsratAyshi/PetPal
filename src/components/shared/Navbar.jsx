"use client";

import { useState, useEffect } from "react";

import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";


export function MainNavbar() {

    // user session access
    const {
        data: session,
        isPending,
    } = authClient.useSession();

    const user = session?.user;
    // console.log(user);


    const handleLogout = async () => {
        await authClient.signOut();
        redirect("/");
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300  ${scrolled ?
            "bg-[#FFF6E5]/50 dark:bg-[#1E1A17]/80 backdrop-blur-md shadow-sm py-2" :
            "bg-[#FFF6E5]/70 dark:bg-[#1E1A17]/90 py-4"
            }`}>
            <div className="max-w-7xl lg:container mx-auto px-2 lg:px-0">

                <div className="flex justify-between h-12 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className=" group-hover:rotate-12 transition-transform">
                                <Image
                                    src="/assets/logoPaw.png"
                                    alt="logo"
                                    width={40}
                                    height={40} />
                            </div>
                            <span className="font-londrina-solid tracking-wider text-3xl text-slate-900 dark:text-[#FFF6E5]">
                                PetPal
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-8 items-center">
                        <Link href="/" className="font-medium text-slate-700 hover:text-[#b36639] dark:text-[#F5E6DC] dark:hover:text-[#FF9B73] transition-colors">Home</Link>

                        <Link href="/all-pets" className="font-medium text-slate-700 hover:text-[#b36639] dark:text-[#F5E6DC] dark:hover:text-[#FF9B73]  transition-colors">All Pets</Link>

                        <Link href="/dashboard/my-requests" className="font-medium text-slate-700 hover:text-[#b36639] dark:text-[#F5E6DC] dark:hover:text-[#FF9B73]  transition-colors">My Requests</Link>

                        <Link href="/dashboard/add-pet" className="font-medium text-slate-700 hover:text-[#b36639] dark:text-[#F5E6DC] dark:hover:text-[#FF9B73]  transition-colors">Add Pets</Link>

                        <Link
                            href="/#faq"
                            scroll={false}
                            onClick={() => {
                                const faq = document.getElementById("faq");
                                if (faq) faq.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="font-medium text-slate-700 hover:text-[#b36639] dark:text-[#F5E6DC] dark:hover:text-[#FF9B73]  transition-colors">FAQ</Link>
                    </div>

                    {/* Buttons and User Profile */}
                    <div className="flex">
                        <div className="flex items-center gap-4">
                            <>
                                {
                                    user ? "" :
                                        <div className="hidden md:flex items-center gap-4">
                                            <Link href="/login" className="font-medium text-slate-700 hover:text-[#b36639] dark:text-[#F5E6DC] dark:hover:text-[#FF9B73]  transition-colors">Login</Link>

                                            <Link href="/signup">
                                                <Button variant="primary" className="bg-[#EAAC8E] text-[#78350F] hover:bg-[#FFAE88] hover:dark:bg-[#FFAE88] font-bold rounded-full px-7 shadow-lg shadow-[#EAAC8E/20">
                                                    Sign Up
                                                </Button>
                                            </Link>
                                        </div>
                                }

                                <ThemeSwitch />

                            </>

                            {/* User Profile Dropdown */}
                            {
                                user ?
                                    <div className="relative group">
                                        <button className="flex items-center gap-3 p-2 rounded-full hover:bg-[#EAAC8E] dark:hover:bg-[#3A2820] transition-colors border border-transparent hover:border-border">
                                            <Avatar>
                                                <Avatar.Image referrerPolicy='no-referrer' alt={user.name}
                                                    src={user.image} />
                                                <Avatar.Fallback>{user.name.charAt(0).toUpperCase()}</Avatar.Fallback>
                                            </Avatar>
                                            <div className="text-left hidden lg:block">
                                                <p className="text-sm font-bold truncate max-w-25 dark:text-slate-100">{user.name}</p>
                                                <p className="text-[10px] text-slate-500 dark:text-slate-400">user</p>
                                            </div>
                                        </button>



                                        <div className="absolute right-0 top-12 w-56 bg-white dark:bg-[#2A1F1A] border border-slate-200 dark:border-[#3A2E28] rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <div className="px-4 py-3 border-b border-slate-100 dark:border-[#3A2E28]">
                                                <p className="font-bold text-sm dark:text-slate-100">Welcome back!</p>
                                                <p className="text-xs truncate text-slate-500 dark:text-slate-300">{user.email}</p>
                                            </div>
                                            <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-[#EAAC8E]/50 dark:hover:bg-[#3A2820] dark:text-slate-200 flex items-center gap-3 transition-colors">
                                                <LayoutDashboard className="w-4 h-4" /> Dashboard
                                            </Link>
                                            <Link href="/settings" className="px-4 py-2 text-sm hover:bg-[#EAAC8E]/50 dark:hover:bg-[#3A2820] dark:text-slate-200 flex items-center gap-3 transition-colors">
                                                <User className="w-4 h-4" /> Settings
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="px-4 py-2 text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-3 transition-colors text-left">
                                                <LogOut className="w-4 h-4" /> Log Out
                                            </button>
                                        </div>

                                    </div>
                                    :
                                    ""
                            }

                        </div>


                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-2">
                            {/* <ThemeSwitch /> */}
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-[#EAAC8E] transition-colors">
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-[#FFF6E5] dark:bg-[#1E1A17] border-b border-slate-200 dark:border-[#3A2E28] animate-in slide-in-from-top duration-300">
                    <Link href="/" className="block px-4 py-3 text-base font-medium text-slate-900 dark:text-slate-100 dark:hover:bg-[#2A1F1A] hover:bg-slate-50 rounded-xl">Home</Link>

                    <Link href="/all-pets" className="block px-4 py-3 text-base font-medium text-slate-900 dark:text-slate-100 dark:hover:bg-[#2A1F1A] hover:bg-slate-50 rounded-xl">All Pets</Link>

                    <Link href="/dashboard/my-requests" className="block px-4 py-3 text-base font-medium text-slate-900 dark:text-slate-100 dark:hover:bg-[#2A1F1A] hover:bg-slate-50 rounded-xl">My Requests</Link>

                    <Link href="/dashboard/add-pet" className="block px-4 py-3 text-base font-medium text-slate-900 dark:text-slate-100 dark:hover:bg-[#2A1F1A] hover:bg-slate-50 rounded-xl">Add Pets</Link>

                    <Link href="/#faq" className="block px-4 py-3 text-base font-medium text-slate-900 dark:text-slate-100 dark:hover:bg-[#2A1F1A] hover:bg-slate-50 rounded-xl">FAQ</Link>

                    <div className="pt-4 border-t border-border dark:border-[#3A2E28] mt-4">

                        {
                            user ?
                                <div className="flex flex-col gap-2">
                                    <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider dark:text-slate-300">{user.name}</p>
                                    <button
                                        onClick={handleLogout} className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl">Log Out</button>
                                </div>
                                :
                                <div className="grid grid-cols-2 gap-4">
                                    <Link href="/login">
                                        <Button href="/login" variant="bordered" className="rounded-xl">Login</Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button href="/signup" className="rounded-xl bg-[#EAAC8E]">Sign Up</Button>
                                    </Link>
                                </div>
                        }



                    </div>
                </div>
            )}
        </nav>
    );
}