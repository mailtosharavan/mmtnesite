"use client";

import { useEffect } from "react";
import { useFloatingActionsContext, FloatingConfig } from "../context/FloatingActionsContext";

export function useFloatingActions(config: FloatingConfig) {
    const { setConfig } = useFloatingActionsContext();

    useEffect(() => {
        // Set the config when the component mounts
        setConfig(config);

        // Reset to null (default) when the component unmounts
        return () => {
            setConfig(null);
        };
    }, [config, setConfig]); // Dependencies ensure updates if config changes dynamically
}
