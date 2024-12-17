import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
    variable: "--font-roboto",
    weight: ['400', '700'],
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Noushad",
    description: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} font-sans`}
            >
                {children}
            </body>
        </html>
    );
}
