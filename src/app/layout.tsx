import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Noir Absolu — Haute Cosmétique Paris",
  description:
    "L'art du soin sublimé. Des formules d'exception conçues dans nos laboratoires parisiens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
