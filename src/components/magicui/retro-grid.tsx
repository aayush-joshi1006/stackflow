// import { cn } from "@/lib/utils";

// interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
//   /**
//    * Additional CSS classes to apply to the grid container
//    */
//   className?: string;
//   /**
//    * Rotation angle of the grid in degrees
//    * @default 65
//    */
//   angle?: number;
//   /**
//    * Grid cell size in pixels
//    * @default 60
//    */
//   cellSize?: number;
//   /**
//    * Grid opacity value between 0 and 1
//    * @default 0.5
//    */
//   opacity?: number;
//   /**
//    * Grid line color in light mode
//    * @default "gray"
//    */
//   lightLineColor?: string;
//   /**
//    * Grid line color in dark mode
//    * @default "gray"
//    */
//   darkLineColor?: string;
// }

// export function RetroGrid({
//   className,
//   angle = 65,
//   cellSize = 60,
//   opacity = 0.5,
//   lightLineColor = "gray",
//   darkLineColor = "gray",
//   ...props
// }: RetroGridProps) {
//   const gridStyles = {
//     "--grid-angle": `${angle}deg`,
//     "--cell-size": `${cellSize}px`,
//     "--opacity": opacity,
//     "--light-line": lightLineColor,
//     "--dark-line": darkLineColor,
//   } as React.CSSProperties;

//   return (
//     <div
//       className={cn(
//         "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
//         `opacity-[var(--opacity)]`,
//         className,
//       )}
//       style={gridStyles}
//       {...props}
//     >
//       <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
//         <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
//     </div>
//   );
// }

import { cn } from "@/lib/utils";

export default function RetroGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]",
        className
      )}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(35deg)]">
        <div
          className={cn(
            "animate-grid",

            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

            // Light Styles
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",

            // Dark styles
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
}