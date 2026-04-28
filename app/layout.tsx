import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachy's Confectionery | Premium Cakes & Snacks – Port Harcourt",
  description: "Rachy's Confectionery – Port Harcourt's beloved cake shop. Handcrafted cakes, pastries & snacks made with love. Order now, open 24 hours.",
  keywords: "cake shop Port Harcourt, custom cakes Nigeria, Rachy's Confectionery, birthday cakes, wedding cakes, snacks Port Harcourt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
