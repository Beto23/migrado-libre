import type { Metadata } from "next";

import Link from "next/link";

import AsideCategories from "@/components/AsideCategories/AsideCategories";

import Providers from "../utils/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Migrado Libre",
  description: "La tienda de Don Miguel, libre de amarillos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <Providers>
          <header className="text-xl font-bold leading-[3rem]">
            <Link href="/">Migrado Libre</Link>
          </header>
          <div className="grid grid-cols-[300px_1fr] gap-10">
            <AsideCategories />
            <main className="py-8">{children}</main>
          </div>
          <footer className="text-center leading-[3rem] opacity-70">
            © {new Date().getFullYear()} Don Miguel
          </footer>
        </Providers>
      </body>
    </html>
  );
}
