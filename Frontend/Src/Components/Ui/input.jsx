import React from "react";
import { cn } from "../../utils/cn";

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition",
        className
      )}
      {...props}
    />
  );
}
