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
    title: "Dispositivo OKT",
    category: "Dispositivo",
    src: "/images/device-01.svg",
    description: "Protótipo conceptual do dispositivo OKT.",
  },
  {
    id: "device-2",
    title: "Leitor compacto",
    category: "Dispositivo",
    src: "/images/device-02.svg",
    description: "Versão portátil para uso doméstico.",
  },
  {
    id: "kit-1",
    title: "Componentes do kit",
    category: "Kit",
    src: "/images/kit-01.svg",
    description: "Materiais essenciais para recolha simples.",
  },
  {
    id: "kit-2",
    title: "Embalagem do kit",
    category: "Kit",
    src: "/images/kit-02.svg",
    description: "Caixa organizada e fácil de armazenar.",
  },
  {
    id: "app-1",
    title: "Dashboard da app",
    category: "App",
    src: "/images/app-01.svg",
    description: "Relatório claro com recomendações iniciais.",
  },
  {
    id: "app-2",
    title: "Partilha segura",
    category: "App",
    src: "/images/app-02.svg",
    description: "Exportação rápida para profissionais de saúde.",
  },
  {
    id: "event-1",
    title: "Pitch de startup",
    category: "Eventos",
    src: "/images/event-01.svg",
    description: "Apresentação do OKT em concursos de inovação.",
  },
  {
    id: "event-2",
    title: "Equipa em demonstração",
    category: "Eventos",
    src: "/images/event-02.svg",
    description: "Demonstração do protótipo em eventos.",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Dispositivo",
  "Kit",
  "App",
  "Eventos",
];
