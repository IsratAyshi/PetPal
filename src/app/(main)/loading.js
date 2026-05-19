import React from 'react';

const Loading = () => {
    return (
        <div
            className="
            min-h-screen
            flex flex-col items-center justify-center
            gap-5
            bg-[#FFF6E5]
            dark:bg-[#1E1A17]
            "
        >
            {/* Spinner */}
            <div
                className="
                w-14 h-14 rounded-full
                border-4 border-[#FFD9C8]
                dark:border-[#4A3E38]
                border-t-[#ff7f50]
                dark:border-t-[#FF9B73]
                animate-spin
                "
            />

            <div className="text-center">
                <h2
                    className="
                    text-2xl font-bold mb-2
                    text-[#4b2e2e]
                    dark:text-[#F5E6DC]
                    "
                >
                    Loading PetPal...
                </h2>

                <p
                    className="
                    text-[#6d5d5d]
                    dark:text-[#C9B8AE]
                    "
                >
                    Fetching adorable companions for you.
                </p>
            </div>
        </div>
    );
};

export default Loading;