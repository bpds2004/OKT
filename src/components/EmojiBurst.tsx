import React from "react";

export default function EmojiBurst({
  emojis = ["✨", "🧬", "🔬", "💙"],
  size = "text-2xl",
}: {
  emojis?: string[];
  size?: string;
}) {
  return (
    <div className="mt-4 flex items-center gap-2" aria-hidden>
      {emojis.map((e, i) => (
        <span
          key={i}
          className={`${size} inline-block`} 
          style={{ animationDelay: `${i * 120}ms`, animationDuration: `900ms`, animationIterationCount: "infinite" }}
        >
          <span className="inline-block animate-bounce">{e}</span>
        </span>
      ))}
    </div>
  );
}
