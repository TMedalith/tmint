
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";
import SocialMedia from "@/components/layout/SocialMedia";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-[#030014]  overflow-y-scroll overflow-x-hidden relative min-h-screen`}
      >
        <div className="fixed inset-0 z-0">
          <ShootingStars />
          <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.3}
          maxSize={0.5}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        </div>
        <div className="relative w-full  z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}