import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "About",
    description: "About me",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
