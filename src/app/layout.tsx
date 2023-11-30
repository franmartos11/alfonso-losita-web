import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/HeaderNav/Nav";
import Footer from "@/Components/footer/Footer";
import FooterV2 from "@/Components/footer/FooterV2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav></Nav>
                {children}
                <FooterV2></FooterV2>
            </body>
        </html>
    );
}
