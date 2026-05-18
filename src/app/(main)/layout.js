

import React from 'react';
import { MainNavbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";



const MainLayout = ({ children }) => {
    return (
        <>
            <MainNavbar/>
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;