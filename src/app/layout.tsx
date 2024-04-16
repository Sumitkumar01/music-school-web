import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // icons: {
  //   icon: "/favicon-32x32.png",},
  title: "Crescendo Academy - Unlock Your Musical Potential",
  description: "Discover the joy of music at Crescendo Academy, where passion meets proficiency. Join us to explore your musical journey and unlock your true potential.",
  keywords: "music, school, academy, education, passion, proficiency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}

        <Footer />

      </body>
    </html>
  );
}
