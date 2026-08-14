import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        position: "fixed",
        bottom: "clamp(1rem, 2.5vw, 1.5rem)",
        right: "clamp(1rem, 2.5vw, 1.5rem)",
        zIndex: 50,
        width: "clamp(1.875rem, 3vw, 2.25rem)",
        aspectRatio: "9 / 20",
        borderRadius: "999px",
        background: "#ffffff",
        boxShadow: isDark
          ? "0 0 10px 2px rgba(125,122,255,0.4), 0 4px 12px rgba(0,0,0,0.12)"
          : "0 0 10px 2px rgba(80,140,255,0.4), 0 4px 12px rgba(0,0,0,0.12)",
        transition: "box-shadow 0.5s ease",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "10%",
          transform: "translateX(-50%)",
          fontFamily: "monospace",
          fontSize: "clamp(8px, 1.2vw, 10px)",
          fontWeight: 600,
          lineHeight: 1,
          color: "#333",
          opacity: isDark ? 1 : 0.35,
          transition: "opacity 0.3s ease",
        }}
      >
        I
      </span>

      <span
        style={{
          position: "absolute",
          left: "50%",
          bottom: "10%",
          transform: "translateX(-50%)",
          fontFamily: "monospace",
          fontSize: "clamp(8px, 1.2vw, 10px)",
          fontWeight: 600,
          lineHeight: 1,
          color: "#333",
          opacity: !isDark ? 1 : 0.35,
          transition: "opacity 0.3s ease",
        }}
      >
        O
      </span>

      <motion.div
        animate={{
          top: isDark ? "8%" : "58%",
          x: "-50%",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        style={{
          position: "absolute",
          left: "50%",
          width: "78%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: "#f5f5f5",
          boxShadow:
            "0 2px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.8)",
        }}
      />
    </button>
  );
}