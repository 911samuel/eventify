<<<<<<< HEAD
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Eventify",
  description: "Eventify is a platform for event management.",
=======
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "eventify",
  description: "eventify is a platform for event management.",
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode
=======
  children: React.ReactNode;
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
}
