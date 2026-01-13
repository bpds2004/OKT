"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/produto", label: "Produto" },
  { href: "/concursos", label: "Concursos" },
  { href: "/galeria", label: "Galeria" },
  { href: "/sobre", label: "Sobre" },
];

export default function Navbar() {
  const [showText, setShowText] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-padding flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {!showText ? (
            <img
              src="/images/okt_logo.png"
              alt="OKT"
              className="h-8 w-auto"
              onError={(e) => {
                // show text fallback if image missing or fails
                (e.currentTarget as HTMLImageElement).style.display = "none";
                setShowText(true);
              }}
            />
          ) : (
            <span className="text-lg font-semibold text-brand-slate">OKT – OncoKit Test</span>
          )}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden text-sm font-medium text-slate-500">Menu</div>
      </div>
    </header>
  );
}
