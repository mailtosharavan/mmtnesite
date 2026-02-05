"use client";

import React, { createContext, useContext, useState, PropsWithChildren } from "react";

export type FloatingAction = {
    icon?: React.ReactNode; // Optional if we want to use defaults or text only, but usually needed
    href: string;
    label: string;
    color?: string; // e.g. "bg-green-500"
    iconName?: "whatsapp" | "phone" | "message"; // Helper to pick icon if not provided directly
};

export type FloatingConfig = {
    variant: "default" | "pill";
    actions: FloatingAction[];
};

interface FloatingActionsContextType {
    config: FloatingConfig | null;
    setConfig: (config: FloatingConfig | null) => void;
}

const FloatingActionsContext = createContext<FloatingActionsContextType | undefined>(undefined);

export function FloatingActionsProvider({ children }: PropsWithChildren) {
    const [config, setConfig] = useState<FloatingConfig | null>(null);

    return (
        <FloatingActionsContext.Provider value={{ config, setConfig }}>
            {children}
        </FloatingActionsContext.Provider>
    );
}

export function useFloatingActionsContext() {
    const context = useContext(FloatingActionsContext);
    if (context === undefined) {
        throw new Error("useFloatingActionsContext must be used within a FloatingActionsProvider");
    }
    return context;
}
