"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ClipboardList, PlusCircle, LayoutList, LayoutDashboard, ArrowLeft } from "lucide-react";
import { Button } from "@heroui/react";

const navItems = [
    {
        label: "My Requests",
        href: "/dashboard/my-requests",
        icon: ClipboardList,
    },
    {
        label: "Add Pet",
        href: "/dashboard/add-pet",
        icon: PlusCircle,
    },
    {
        label: "My Listings",
        href: "/dashboard/my-listings",
        icon: LayoutList,
    },
];

const DashboardSidebar = () => {

    const pathname = usePathname();

    const handleLogout = async () => {
        await authClient.signOut();
    }

    return (
        <aside className="w-20 md:w-64 min-h-screen bg-[#FFF6E5] dark:bg-[#1C1410] border-r border-[#EAAC8E]/40 dark:border-[#3A2E28] flex flex-col">


            <div className="px-6 py-5 border-b border-[#EAAC8E]/40 dark:border-[#3A2E28]">
                <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5 text-[#b36639] dark:text-[#FFAA80]" />
                    <span className=" hidden md:flex
                    font-londrina-solid tracking-wider text-xl text-[#4b2e2e] dark:text-[#FFE8D6]">
                        Dashboard
                    </span>
                </div>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col gap-1 p-4 flex-1">
                {navItems.map((item, index) => {

                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`
                                flex items-center gap-3 px-4 py-3 rounded-xl
                                font-medium text-sm transition-all duration-200
                                ${isActive
                                    ? "bg-[#EAAC8E] dark:bg-[#7A3E28] text-[#4b2e2e] dark:text-[#FFE8D6] shadow-sm"
                                    : "text-slate-600 dark:text-[#C4A99A] hover:bg-[#EAAC8E]/30 dark:hover:bg-[#2A1F1A] hover:text-[#b36639] dark:hover:text-[#FFAA80]"
                                }
                            `}
                        >
                            <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-[#b36639] dark:text-[#FFAA80]" : ""}`} />
                            <span className="hidden md:flex">{item.label}</span>

                            {/* Active indicator dot */}
                            {isActive && (
                                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#b36639] dark:bg-[#FFAA80]" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="px-4 pt-3 pb-6 border-t border-[#EAAC8E]/40 dark:border-[#3A2E28]">
                <Button
                    variant="link"
                    onClick={handleLogout}
                    className="hover:bg-red-600/30 w-full rounded-2xl"
                ><ArrowLeft />Logout</Button>
            </div>

        </aside>
    );
};

export default DashboardSidebar;