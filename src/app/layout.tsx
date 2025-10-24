// src/app/layout.tsx
import "./globals.css";
import { Poppins, Lato, Playfair_Display } from "next/font/google";
import PageFade from "@/components/PageFade";

const poppins = Poppins({ subsets: ["latin"], weight: ["600","700"], variable: "--font-h" });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"], variable: "--font-b" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-s" });

export const metadata = {
  title: "The Gospel of the Kingdom",
  description: "A simple way to share and experience God’s story of renewal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} ${playfair.variable} bg-offWhite text-kingdomBlue`}>
        <main className="mx-auto max-w-[760px] px-4 py-8">
          <PageFade>{children}</PageFade>
        </main>
      </body>
    </html>
  );
}