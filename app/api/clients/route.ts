// app/api/clients/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const clientsDir = path.join(process.cwd(), "public/clients");

  const files = fs
    .readdirSync(clientsDir)
    .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f))
    .map((file) => `/clients/${file}`);

  return NextResponse.json(files);
}
