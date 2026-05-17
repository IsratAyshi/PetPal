"use client";

import { useState, useEffect } from "react";

import { BookOpen, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

export function MainNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#FFF6E5]/50 backdrop-blur-md shadow-sm py-2" : "bg-[#FFF6E5]/70 py-4"
            }`}>
            <div className="max-w-7xl lg:container mx-auto px-2 lg:px-0">

                <div className="flex justify-between h-12 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className=" group-hover:rotate-12 transition-transform">
                                <Image
                                    src="/assets/logoPaw.png"
                                    alt="logo"
                                    width={40}
                                    height={40} />
                            </div>
                            <span className="font-londrina-solid tracking-wider text-3xl text-slate-900">
                                PetPal
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex gap-8 items-center">
                        <Link href="/" className="font-medium text-slate-700 hover:text-[#b36639] transition-colors">Home</Link>
                        <Link href="/all-pets" className="font-medium text-slate-700 hover:text-[#b36639]  transition-colors">All Pets</Link>
                        <Link href="/my-requests" className="font-medium text-slate-700 hover:text-[#b36639]  transition-colors">My Requests</Link>
                        <Link href="/add-pets" className="font-medium text-slate-700 hover:text-[#b36639]  transition-colors">Add Pets</Link>
                        <Link href="#faq" className="font-medium text-slate-700 hover:text-[#b36639] transition-colors">FAQ</Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">

                        <>
                            <Link href="/login" className="font-medium text-slate-700 hover:text-[#b36639] transition-colors">Login</Link>
                            <Link href="/register">

                                <Button variant="primary" className="bg-[#EAAC8E] text-[#78350F] font-bold rounded-full px-7 shadow-lg shadow-[#EAAC8E/20">
                                    Adopt Now
                                </Button>
                            </Link>
                        </>

                        <div className="relative group">
                            <button className="flex items-center gap-3 p-2 rounded-full hover:bg-[#EAAC8E] transition-colors border border-transparent hover:border-border">
                                <Image
                                    width={40}
                                    height={40}
                                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                                />
                                <div className="text-left hidden lg:block">
                                    <p className="text-sm font-bold truncate max-w-25">User1</p>
                                    <p className="text-[10px] text-slate-500">user</p>
                                </div>
                            </button>

                            <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="px-4 py-3 border-b border-slate-100">
                                    <p className="font-bold text-sm">Welcome back!</p>
                                    <p className="text-xs truncate text-slate-500">user1@gmail.com</p>
                                </div>
                                <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-[#EAAC8E]/50 flex items-center gap-3 transition-colors">
                                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                                </Link>
                                <Link href="/settings" className="px-4 py-2 text-sm hover:bg-[#EAAC8E]/50 flex items-center gap-3 transition-colors">
                                    <User className="w-4 h-4" /> Settings
                                </Link>
                                <button className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left">
                                    <LogOut className="w-4 h-4" /> Log Out
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-[#EAAC8E] transition-colors">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
                    <Link href="/" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Home</Link>

                    <Link href="/all-pets" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">All Pets</Link>

                    <Link href="/my-requests" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">My Requests</Link>

                    <Link href="/add-pets" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Add Pets</Link>

                    <Link href="#faq" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">FAQ</Link>

                    <div className="pt-4 border-t border-border mt-4">

                        <div className="grid grid-cols-2 gap-4">
                            <Link href="/login">
                                <Button href="/login" variant="bordered" className="rounded-xl">Login</Button>
                            </Link>
                            <Link href="/register">
                                <Button href="/register" className="rounded-xl bg-[#EAAC8E]">Adopt Now</Button>
                            </Link>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Account</p>
                            <button className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl">Log Out</button>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
}