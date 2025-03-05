// "use client";

// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";

// interface MeteorsProps {
//   number?: number;
//   minDelay?: number;
//   maxDelay?: number;
//   minDuration?: number;
//   maxDuration?: number;
//   angle?: number;
//   className?: string;
// }

// export const Meteors = ({
//   number = 20,
//   minDelay = 0.2,
//   maxDelay = 1.2,
//   minDuration = 2,
//   maxDuration = 10,
//   angle = 215,
//   className,
// }: MeteorsProps) => {
//   const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
//     [],
//   );

//   useEffect(() => {
//     const styles = [...new Array(number)].map(() => ({
//       "--angle": angle + "deg",
//       top: -5,
//       left: `calc(-50% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
//       animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
//       animationDuration:
//         Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
//         "s",
//     }));
//     setMeteorStyles(styles);
//   }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

//   return (
//     <>
//       {[...meteorStyles].map((style, idx) => (
//         // Meteor Head
//         <span
//           key={idx}
//           style={{ ...style }}
//           className={cn(
//             "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
//             className,
//           )}
//         >
//           {/* Meteor Tail */}
//           <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
//         </span>
//       ))}
//     </>
//   );
// };

"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={clsx(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;