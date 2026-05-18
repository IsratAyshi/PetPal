"use client";

import { memo, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitch = memo(function ThemeSwitch() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <div className="w-11 h-11 rounded-full border border-[#FFD9C8]" />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle Theme"
            className="
                w-11 h-11 rounded-full
                flex items-center justify-center
                bg-white/70 dark:bg-[#2A2420]
                border border-[#FFD9C8] dark:border-[#4A3E38]
                hover:scale-105
                transition-all duration-300
                shadow-sm
            "
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-[#FFB347]" />
            ) : (
                <Moon className="w-5 h-5 text-[#78350F]" />
            )}
        </button>
    );
});