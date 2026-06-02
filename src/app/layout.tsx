import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PHIN — Vietnamese Signature Blend Coffee",
  description:
    "PHIN roasts Trường Sơn, a signature blend of highland Đà Lạt Arabica and bold Đắk Lắk Robusta. Built for the phin, unstoppable as an espresso. Roasted to order, shipped across the US.",
  openGraph: {
    title: "PHIN — Vietnamese Signature Blend Coffee",
    description:
      "The taste of two Vietnams in one cup. Highland Arabica meets bold Robusta, roasted fresh and shipped across the US.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
