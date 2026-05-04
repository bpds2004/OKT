import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OKT – OncoKit Test",
  description:
    "OncoKit Test: deteção precoce do cancro da mama com um teste genético realizado por oncologistas, com resultados em cerca de 40 minutos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
