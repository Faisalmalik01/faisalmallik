import { motion } from "framer-motion";
import { filters } from "../data/portfolio";

export default function FilterTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {filters.map((filter) => {
        const isActive = active === filter.key;
        return (
          <button
            key={filter.key}
            onClick={() => onChange(filter.key)}
            className={`
              relative px-5 py-1.5 rounded-full text-[10px] font-medium tracking-[0.08em] 
              transition-colors duration-300 border
              ${isActive 
                ? "text-[var(--canvas)] border-[var(--purple)]" 
                : "text-[var(--muted)] border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)]"
              }
            `}
            style={{
              background: isActive ? "var(--purple)" : "transparent",
            }}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--purple)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}