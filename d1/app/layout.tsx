import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import "../public/tailwind.css"

const cario = Cairo({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900'],
    variable: '--font-cairo'
})

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
                className={`${cario.className}`}
            >

                {children}
            </body>
        </html>
    );
}
