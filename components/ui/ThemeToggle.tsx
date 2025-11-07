"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 dark:focus:ring-offset-deep-black"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-deep-black flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <Moon className="w-3 h-3 text-mint" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}
