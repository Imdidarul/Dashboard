import React from "react";
import { cn } from "../../utils/cn";

export function Card({ children, className }) {
  return (
    <div className={cn("bg-white shadow rounded-2xl p-4", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return (
    <div className={cn("border-b pb-2 mb-2 font-semibold text-lg", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={cn("text-gray-700", className)}>{children}</div>;
}
