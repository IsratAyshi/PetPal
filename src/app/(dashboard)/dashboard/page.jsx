
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = () => {
    redirect("/dashboard/my-listings");
};

export default DashboardPage;