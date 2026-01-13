import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      {icon ? <div className="mb-4 text-brand-blue">{icon}</div> : null}
      <h3 className="text-lg font-semibold text-brand-slate">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
