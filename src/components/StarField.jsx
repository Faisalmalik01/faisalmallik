import { motion } from "framer-motion";
import { useMemo } from "react";

export default function StarField({ count = 120 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.85 ? "#7D7AFF" : Math.random() > 0.92 ? "#FFD700" : "#ffffff",
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: star.color,
          }}
          animate={{ opacity: [star.opacity, star.opacity * 0.15, star.opacity] }}
          transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}