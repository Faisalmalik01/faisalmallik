import { motion } from "framer-motion";
import { personal } from "../data/portfolio";
import { scrollToSection } from "../utils/scroll";

export default function Navbar({ view, setView, activeNav, setActiveNav }) {
  const goToWork = () => {
    if (view !== "work") {
      setView("work");
    }

    setActiveNav("work");

    setTimeout(() => {
      scrollToSection("work");
    }, 20);
  };

  const goToSkills = () => {
    // Skills is a section inside Work, NOT a separate view.
    if (view !== "work") {
      setView("work");
    }

    setActiveNav("skills");

    setTimeout(() => {
      scrollToSection("skills");
    }, 50);
  };

  const goToAbout = () => {
    setView("about");
    setActiveNav("about");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const goToLogo = () => {
    setView("work");
    setActiveNav(null);

    setTimeout(() => {
      scrollToSection("hero");
    }, 20);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "color-mix(in srgb, var(--canvas) 85%, transparent)",
        backdropFilter: "blur(20px)",
        borderColor: "var(--border)",
      }}
    >
      <div className="w-full px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={goToLogo}
          className="flex items-center gap-2.5 shrink-0"
        >
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background: "var(--purple)" }}
          >
            {personal.logo}
          </span>

          <span
            className="hidden sm:inline uppercase tracking-widest text-[11px] font-medium"
            style={{ color: "var(--ink-soft)" }}
          >
            {personal.name}
          </span>
        </button>

        {/* Nav links */}
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {[
            {
              key: "work",
              label: "WORK",
              action: goToWork,
            },
            {
              key: "skills",
              label: "SKILLS",
              action: goToSkills,
            },
            {
              key: "about",
              label: "ABOUT",
              action: goToAbout,
            },
          ].map((link) => (
            <button
              key={link.key}
              onClick={link.action}
              className="px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] font-medium tracking-[0.06em] sm:tracking-[0.08em] transition-colors duration-200 rounded-full"
              style={{
                color:
                  activeNav === link.key
                    ? "var(--ink)"
                    : "var(--muted)",

                background:
                  activeNav === link.key
                    ? "var(--panel)"
                    : "transparent",
              }}
            >
              {link.label}
            </button>
          ))}

          {/* Resume — desktop only */}
          <a
            href={personal.resume}
            download
            className="hidden md:inline-flex ml-2 sm:ml-3 px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-[0.05em] text-white transition-transform duration-200 hover:scale-105"
            style={{ background: "var(--purple)" }}
          >
            VIEW RESUME
          </a>
        </nav>
      </div>
    </motion.header>
  );
}