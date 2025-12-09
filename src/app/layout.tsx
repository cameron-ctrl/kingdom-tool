// src/app/layout.tsx
import "./globals.css";
import { Poppins, Lato, Playfair_Display } from "next/font/google";
import PageFade from "@/components/PageFade";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-h",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-b",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-s",
});

export const metadata = {
  title: "The Story of Jesus and His Kingdom",
  description: "How to Participate in God’s Story of Renewal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA / Icons */}
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icon-512.png"
        />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body
        className={`${poppins.variable} ${lato.variable} ${playfair.variable} bg-white text-kingdomBlue`}
      >
        <main className="mx-auto max-w-[760px] px-4 py-8">
          <PageFade>{children}</PageFade>
        </main>
      </body>
    </html>
  );
}