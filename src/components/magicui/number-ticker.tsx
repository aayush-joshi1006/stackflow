// "use client";

// import { useInView, useMotionValue, useSpring } from "motion/react";
// import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

// import { cn } from "@/lib/utils";

// interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
//   value: number;
//   direction?: "up" | "down";
//   delay?: number; // delay in s
//   decimalPlaces?: number;
// }

// export function NumberTicker({
//   value,
//   direction = "up",
//   delay = 0,
//   className,
//   decimalPlaces = 0,
//   ...props
// }: NumberTickerProps) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const motionValue = useMotionValue(direction === "down" ? value : 0);
//   const springValue = useSpring(motionValue, {
//     damping: 60,
//     stiffness: 100,
//   });
//   const isInView = useInView(ref, { once: true, margin: "0px" });

//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         motionValue.set(direction === "down" ? 0 : value);
//       }, delay * 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [motionValue, isInView, delay, value, direction]);

//   useEffect(
//     () =>
//       springValue.on("change", (latest) => {
//         if (ref.current) {
//           ref.current.textContent = Intl.NumberFormat("en-US", {
//             minimumFractionDigits: decimalPlaces,
//             maximumFractionDigits: decimalPlaces,
//           }).format(Number(latest.toFixed(decimalPlaces)));
//         }
//       }),
//     [springValue, decimalPlaces],
//   );

//   return (
//     <span
//       ref={ref}
//       className={cn(
//         "inline-block tabular-nums tracking-wider text-black dark:text-white",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

"use client";

import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Number(latest.toFixed(0))
          );
        }
      }),
    [springValue]
  );

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white",
        className
      )}
      ref={ref}
    />
  );
}
