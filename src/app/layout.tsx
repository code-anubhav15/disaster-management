import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

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
          <Link
            href="/"
            className="h-12 w-12 flex items-center justify-center border-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-gray-600"
            title="Home"
          >
            <i className="fas fa-home" />
          </Link>
          <Link
            href="/map-view"
            className="h-12 w-12 flex items-center justify-center border-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-gray-600"
            title="Map"
          >
            <i className="fas fa-map" />
          </Link>
          <Link
            href="/latest-tweets"
            className="h-12 w-12 flex items-center justify-center border-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-gray-600"
            title="Latest Tweets"
          >
            <i className="fas fa-users" />
          </Link>
          <Link
            href="/relief-camps"
            className="h-12 w-12 flex items-center justify-center border-2 rounded-full  backdrop-blur-md cursor-pointer hover:bg-gray-600"
            title="Relief Camps"
          >
            <i className="fas fa-tents" />
          </Link>
        </div>

        {children}
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
