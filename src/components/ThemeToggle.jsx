import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }


    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300",
                "bg-background/80 backdrop-blur-sm border border-border/50",
                "hover:bg-background/90 hover:scale-105 active:scale-95",
                "shadow-lg hover:shadow-xl",
                "focus:outline-none focus:ring-2 focus:ring-primary/50"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            )}
        </button>
    );
};