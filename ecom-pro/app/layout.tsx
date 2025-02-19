import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../public/tailwind.css"

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
