"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const prev = theme;
    setTheme("light");
    return () => {
      if (prev) setTheme(prev);
    };
  }, []);

  return (
    <div
      style={{
        colorScheme: "light",
        background: "#ffffff",
        color: "#0a0a0a",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
