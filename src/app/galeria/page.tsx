import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";

export default function GaleriaPage() {
  return (
    <div>
      <section className="gradient-hero py-16">
        <div className="container-padding">
          <h1 className="text-4xl font-semibold text-brand-slate md:text-5xl">Galeria</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Explore imagens do dispositivo, kits, app e materiais educativos focados no cancro da mama.
          </p>
        </div>
      </section>

      <Section title="Imagens" subtitle="Mockups e protótipos">
        <GalleryGrid />
      </Section>
    </div>
  );
}
