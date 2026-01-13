import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="card-animated p-6">
      {icon ? <div className="mb-4 text-blue-200">{icon}</div> : null}
      <h3 className="text-lg font-semibold text-blue-100">{title}</h3>
      <p className="mt-2 text-sm text-blue-200">{description}</p>
    </div>
  );
}
