// "use client";

// import { cn } from "@/lib/utils";
// import * as React from "react";

// interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
//   /**
//    * Width of the border in pixels
//    * @default 1
//    */
//   borderWidth?: number;
//   /**
//    * Duration of the animation in seconds
//    * @default 14
//    */
//   duration?: number;
//   /**
//    * Color of the border, can be a single color or an array of colors
//    * @default "#000000"
//    */
//   shineColor?: string | string[];
// }

// /**
//  * Shine Border
//  *
//  * An animated background border effect component with configurable properties.
//  */
// export function ShineBorder({
//   borderWidth = 1,
//   duration = 14,
//   shineColor = "#000000",
//   className,
//   style,
//   ...props
// }: ShineBorderProps) {
//   return (
//     <div
//       style={
//         {
//           "--border-width": `${borderWidth}px`,
//           "--duration": `${duration}s`,
//           "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
//           "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(shineColor) ? shineColor.join(",") : shineColor},transparent,transparent)`,
//           backgroundImage: "var(--background-radial-gradient)",
//           backgroundSize: "300% 300%",
//           mask: "var(--mask-linear-gradient)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//           ...style,
//         } as React.CSSProperties
//       }
//       className={cn(
//         "pointer-events-none absolute inset-0 size-full rounded-[inherit] p-[--border-width] will-change-[background-position] motion-safe:animate-shine",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]"
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before */}
            <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {children}

        {/* Highlight */}
        <div
          className={cn(
            "insert-0 absolute h-full w-full",

            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",

            // transition
            "transform-gpu transition-all duration-300 ease-in-out",

            // on hover
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",

            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;