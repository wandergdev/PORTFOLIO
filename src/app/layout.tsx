import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/portfolio";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.bio[0],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-200">
        {children}
        <Footer />
      </body>
    </html>
  );
}
