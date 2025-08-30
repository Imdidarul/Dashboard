// import React from "react";
// import { cn } from "../../utils/cn"; // utility for merging classes

// export default function Button({
//   children,
//   className,
//   variant = "default",
//   size = "md",
//   ...props
// }) {
//   const base =
//     "inline-flex items-center justify-center rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
//     outline:
//       "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
//     ghost:
//       "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
//   };

//   const sizes = {
//     sm: "px-3 py-1 text-sm",
//     md: "px-4 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//   };

//   return (
//     <button
//       className={cn(base, variants[variant], sizes[size], className)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }


import React from "react";

export default function Button({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
