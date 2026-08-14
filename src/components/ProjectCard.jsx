import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-[var(--panel)] border border-[var(--border)]">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Category tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full text-[9px] font-semibold tracking-[0.1em] uppercase backdrop-blur-md"
              style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Hover overlay — smaller on mobile */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
            >
              Live Demo
              <ArrowUpRight size={12} className="sm:w-[13px] sm:h-[13px]" />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
          >
            View Code
            <ArrowUpRight size={12} className="sm:w-[13px] sm:h-[13px]" />
          </a>
        </div>
      </div>

      {/* Text content — tags moved above description, description full width */}
      <div className="mt-5">
        <h3
          className="font-serif text-2xl sm:text-3xl tracking-tight"
          style={{ color: "var(--ink)" }}
        >
          {project.title}
        </h3>

        {/* Tags — now above description */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-[11px] font-medium border"
              style={{ borderColor: "var(--border)", color: "var(--ink-soft)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description — full width (removed max-w-lg) */}
        <p className="mt-3 text-[14px] leading-[1.7]" style={{ color: "var(--muted)" }}>
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}