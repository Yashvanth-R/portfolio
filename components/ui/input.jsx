import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 rounded-md border border-white/10 bg-white/[0.055] px-4 text-base font-light text-[#fff8ec] outline-none placeholder:text-[#f8f2e8]/42 focus:border-accent",
        className
      )}
      {...props} />
  );
}

export { Input }
