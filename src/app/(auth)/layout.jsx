import React from 'react';
import { MainNavbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";



const AuthLayout = ({ children }) => {
    return (
        <>
            <MainNavbar />
            {children}
            <Footer />
        </>
    );
};

export default AuthLayout;