"use client";
export const dynamic = "force-dynamic";
export const fetchCache = "default-no-store";
export const revalidate = 0;

export default function GlobalError() {
  return (
    <div>
      <h1>Something went wrong</h1>
    </div>
  );
}
