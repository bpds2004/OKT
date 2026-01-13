import { FAQItem } from "@/content/faq";

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
        >
          <summary className="cursor-pointer text-base font-semibold text-brand-slate">
            {item.question}
          </summary>
          <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
