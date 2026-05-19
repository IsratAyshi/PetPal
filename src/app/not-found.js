import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div
            className="
            min-h-screen
            flex flex-col items-center justify-center
            px-6 text-center
            bg-[#FFF6E5]
            dark:bg-[#1E1A17]
            "
        >
            <h1
                className="
                text-7xl sm:text-8xl font-extrabold mb-4
                text-[#ff7f50]
                dark:text-[#FF9B73]
                "
            >
                404
            </h1>

            <h2
                className="
                text-3xl sm:text-4xl font-bold mb-3
                text-[#4b2e2e]
                dark:text-[#F5E6DC]
                "
            >
                Page Not Found
            </h2>

            <p
                className="
                max-w-md mb-8
                text-[#6d5d5d]
                dark:text-[#C9B8AE]
                "
            >
                Looks like this page wandered off from PetPal.
            </p>

            <Link
                href="/"
                className="
                px-6 py-3 rounded-full font-semibold
                bg-[#EAAC8E]
                hover:bg-[#E29578]
                dark:bg-[#FF9B73]
                dark:hover:bg-[#ff8b5c]
                text-[#78350F]
                dark:text-[#1E1A17]
                transition-colors duration-300
                "
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;