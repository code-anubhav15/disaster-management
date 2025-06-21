import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeLink from "@/components/HomeLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disaster Management App",
  description: "Stay prepared and informed in times of crisis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Right-side Vertical Icons */}
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col space-y-6 text-white text-xl">
          <HomeLink />
          <div
            className="h-12 w-12 flex items-center justify-center border-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-gray-600"
            title="Map"
          >
            <i className="fas fa-map" />
          </div>
          <div
            className="h-12 w-12 flex items-center justify-center border-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-gray-600"
            title="Tweets"
          >
            <i className="fas fa-users" />
          </div>
          <div
            className="h-12 w-12 flex items-center justify-center border-2 rounded-full  backdrop-blur-md cursor-pointer hover:bg-gray-600"
            title="Use My Location"
          >
            <i className="fas fa-location-dot" />
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
