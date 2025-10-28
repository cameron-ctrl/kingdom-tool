// src/app/layout.tsx
import "./globals.css";
import { Poppins, Lato, Playfair_Display } from "next/font/google";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} ${lato.variable} ${playfair.variable} bg-offWhite text-ink`}>
        <main className="mx-auto max-w-[680px] px-4 py-6 sm:max-w-[760px] sm:px-6 sm:py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
