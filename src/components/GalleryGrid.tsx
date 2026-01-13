"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  galleryCategories,
  galleryItems,
  GalleryCategory,
  GalleryItem,
} from "@/content/gallery";

const categoriesWithAll = ["Todos", ...galleryCategories] as const;

type CategoryFilter = (typeof categoriesWithAll)[number];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Todos");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Todos") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {categoriesWithAll.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-brand-blue text-white"
                  : "border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedItem(item)}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-soft"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                {item.category}
              </p>
              <h3 className="mt-2 text-base font-semibold text-brand-slate">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-6">
          <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {selectedItem.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-brand-slate">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600"
              >
                Fechar
              </button>
            </div>
            <div className="relative mt-6 h-72 w-full overflow-hidden rounded-2xl">
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-slate-600">{selectedItem.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
