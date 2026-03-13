"use client";

import { useFloatingActions } from "../../hooks/useFloatingActions";

const ivrFloatingConfig = {
    variant: "pill" as const,
    actions: [
        {
            href: `https://wa.me/919625306474?text=${encodeURIComponent("Hi, I'd like an instant IVR quote for my business.")}`,
            label: "Instant IVR Quote",
            iconName: "whatsapp" as const,
            color: "bg-gradient-to-r from-green-400 to-green-600"
        },
        {
            href: "tel:+919625306474",
            label: "Call Now",
            iconName: "phone" as const,
            color: "bg-blue-600"
        }
    ]
};

export default function IVRFloatingConfig() {
    useFloatingActions(ivrFloatingConfig);

    return null;
}
