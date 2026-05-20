import React from 'react';
import { MainNavbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
    title: "PetPal | Dashboard",

};

const DashboardLayout = ({ children }) => {
    return (
        <div >
            <MainNavbar />
            {children}
        </div>
    );
};

export default DashboardLayout;