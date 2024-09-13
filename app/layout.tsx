import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ajmal Hasan",
  description: "Ajmal Hasan's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          {/* Background image */}
          <div className="fixed top-0 -z-10 h-full w-full">
            <div
              className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/bg_app.jpg')" }}  // Updated path
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
