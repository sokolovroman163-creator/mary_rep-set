import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/ui/AuroraBackground";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Твой проводник в мир школьной математики",
  description: "Репетитор по математике для подготовки к ЕГЭ, ОГЭ и олимпиадам",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-indigo-500/30`}>
        <CustomCursor />
        <AuroraBackground>
          <div className="relative z-10 w-full">
            {children}
          </div>
        </AuroraBackground>
      </body>
    </html>
  );
}
