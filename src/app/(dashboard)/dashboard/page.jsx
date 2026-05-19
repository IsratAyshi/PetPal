
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = () => {
    redirect("/dashboard/add-pet");
};

export default DashboardPage;