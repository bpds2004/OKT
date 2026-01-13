import { Contest } from "@/content/contests";

interface ContestCardProps {
  contest: Contest;
}

export default function ContestCard({ contest }: ContestCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-brand-slate">{contest.name}</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {contest.status}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-500">{contest.date}</p>
      <p className="mt-3 text-sm text-slate-600">{contest.description}</p>
    </div>
  );
}
