// "use client";

// import { cn } from "@/lib/utils";
// import { motion, MotionStyle, Transition } from "motion/react";

// interface BorderBeamProps {
//   /**
//    * The size of the border beam.
//    */
//   size?: number;
//   /**
//    * The duration of the border beam.
//    */
//   duration?: number;
//   /**
//    * The delay of the border beam.
//    */
//   delay?: number;
//   /**
//    * The color of the border beam from.
//    */
//   colorFrom?: string;
//   /**
//    * The color of the border beam to.
//    */
//   colorTo?: string;
//   /**
//    * The motion transition of the border beam.
//    */
//   transition?: Transition;
//   /**
//    * The class name of the border beam.
//    */
//   className?: string;
//   /**
//    * The style of the border beam.
//    */
//   style?: React.CSSProperties;
//   /**
//    * Whether to reverse the animation direction.
//    */
//   reverse?: boolean;
//   /**
//    * The initial offset position (0-100).
//    */
//   initialOffset?: number;
// }

// export const BorderBeam = ({
//   className,
//   size = 50,
//   delay = 0,
//   duration = 6,
//   colorFrom = "#ffaa40",
//   colorTo = "#9c40ff",
//   transition,
//   style,
//   reverse = false,
//   initialOffset = 0,
// }: BorderBeamProps) => {
//   return (
//     <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
//       <motion.div
//         className={cn(
//           "absolute aspect-square",
//           "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
//           className,
//         )}
//         style={
//           {
//             width: size,
//             offsetPath: `rect(0 auto auto 0 round ${size}px)`,
//             "--color-from": colorFrom,
//             "--color-to": colorTo,
//             ...style,
//           } as MotionStyle
//         }
//         initial={{ offsetDistance: `${initialOffset}%` }}
//         animate={{
//           offsetDistance: reverse
//             ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
//             : [`${initialOffset}%`, `${100 + initialOffset}%`],
//         }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration,
//           delay: -delay,
//           ...transition,
//         }}
//       />
//     </div>
//   );
// };

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // pseudo styles
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
};