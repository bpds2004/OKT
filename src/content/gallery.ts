export type GalleryCategory = "Dispositivo" | "Kit" | "App" | "Eventos";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "device-1",
    title: "Dispositivo ",
    category: "Dispositivo",
    src: "/images/device-01.svg",
    description: "Protótipo conceptual do dispositivo OKT.",
  },
  
  {
    id: "kit-1",
    title: "Kit de recolha de swab oral",
    category: "Kit",
    src: "/images/kit-01.svg",
    description: "Realização de teste genético hereditário.",
  },
  {
    id: "kit-2",
    title: "Kit de recolha de amostra de sangue",
    category: "Kit",
    src: "/images/kit-02.svg",
    description: "Realização de teste genético de cancro ativo.",
  },
  {
    //adicionais botao para descarregar app e carrosel de imagens da app
    id: "app-1",
    title: "Screens da aplicação móvel",
    category: "App",
    src: "/images/app-01.svg",
    description: "Imagens da interface da aplicação móvel OKT.",
  },
  
  
];

export const galleryCategories: GalleryCategory[] = [
  "Dispositivo",
  "Kit",
  "App",
  
];
