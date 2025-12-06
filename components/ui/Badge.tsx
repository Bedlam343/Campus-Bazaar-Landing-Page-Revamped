const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
    {children}
  </span>
);

export default Badge;
