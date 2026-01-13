import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <div className="container-padding">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            {title}
          </p>
          {subtitle ? (
            <h2 className="mt-3 text-3xl font-semibold text-brand-slate md:text-4xl">
              {subtitle}
            </h2>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
