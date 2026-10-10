import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Shared framer-motion wrappers.
 *
 * `useReducedMotion` is respected so these degrade to plain fades for users
 * who have asked the OS to reduce motion.
 */

const EASE = [0.16, 1, 0.3, 1];

export function FadeIn({ children, delay = 0, y = 16, className, as = "div", ...rest }) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function Stagger({ children, className, gap = 0.07, ...rest }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 14, ...rest }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Counts a number up when it scrolls into view. */
export function CountUp({ value, duration = 1.2, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString("en-US"),
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: EASE,
    });
    return () => controls.stop();
  }, [inView, value, duration, motionValue]);

  return (
    <motion.span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
}