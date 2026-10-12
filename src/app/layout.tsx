import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PG Specialized Logistics LLC | Freight Coordination & Webroot Software",
    template: "%s | PG Specialized Logistics LLC",
  },
  description:
    "PG Specialized Logistics LLC — Professional logistics and transportation coordination based in Laredo, TX, paired with genuine Webroot cybersecurity software subscriptions.",
  keywords: [
    "logistics",
    "freight transportation",
    "Laredo TX logistics",
    "Webroot antivirus",
    "Webroot software licenses",
    "cybersecurity",
    "transportation solutions",
  ],
  authors: [{ name: "PG Specialized Logistics LLC" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
