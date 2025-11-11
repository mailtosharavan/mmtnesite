"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function OurClients() {
  const [clients, setClients] = useState<string[]>([]);
  const { ref, MotionDiv, animation } = useFadeInOnScroll();

  useEffect(() => {
    async function fetchClients() {
      const res = await fetch("/api/clients");
      const data = await res.json();
      setClients(data);
    }
    fetchClients();
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-10 text-slate-800">
          Our Prestigious Clients
        </h2>

        <MotionDiv
          ref={ref}
          {...animation}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center"
        >
          {clients.map((src, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={src}
                alt={`Client ${i + 1}`}
                width={150}
                height={80}
                className="mx-auto object-contain"
              />
            </div>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
