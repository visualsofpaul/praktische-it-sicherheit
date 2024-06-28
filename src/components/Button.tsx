"use client";

import { cva } from "class-variance-authority";
import { cn } from "@utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
};

export default function Button({
  className,
  variant,
  size,
  rounded,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant }),
        cn(buttonSizes({ size }), cn(buttonRounded({ rounded }), className))
      )}
      onClick={(event) => {
        ripple(event);
        onClick?.(event);
      }}
    />
  );
}

const buttonVariants = cva(
  "relative box-border overflow-hidden focus-visible:ring-4 focus-visible:outline-none transition duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:ring-0 flex items-center justify-center gap-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-800 text-secondary-50 hover:bg-primary-700 focus-visible:bg-primary-700 ring-primary-500 disabled:hover:bg-primary-800",
        secondary:
          "bg-secondary-200 text-secondary-950 hover:bg-secondary-300 focus-visible:bg-secondary-300 ring-secondary-500 disabled:hover:bg-secondary-200",
        outline:
          "border border-secondary-200 text-secondary-950 hover:bg-secondary-300 focus-visible:bg-secondary-300 hover:border-secondary-300 ring-secondary-500 disabled:hover:bg-transparent disabled:hover:border-secondary-200",
        ghost:
          "text-secondary-950 hover:bg-secondary-300 focus-visible:bg-secondary-300 ring-secondary-500 disabled:hover:bg-transparent",
        destructive:
          "bg-destructive-600 text-secondary-50 hover:bg-destructive-700 focus-visible:bg-destructive-700 ring-destructive-500 disabled:hover:bg-destructive-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const buttonSizes = cva("w-fit text-base", {
  variants: {
    size: {
      sm: "px-4 h-8 text-sm",
      md: "px-5 h-10 text-base",
      lg: "px-6 h-12 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const buttonRounded = cva("", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "md",
  },
});

const ripple = (event: React.MouseEvent<HTMLButtonElement>) => {
  // Get the cursor position
  const rect = event.currentTarget.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  // If x and y are negative, set them so the ripple effect is centered
  if (x < 0) x = rect.width / 2;
  if (y < 0) y = rect.height / 2;

  // Create a span element for the ripple effect
  const ripples = document.createElement("span");
  ripples.style.left = `${x}px`;
  ripples.style.top = `${y}px`;
  ripples.className =
    "absolute bg-white -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple pointer-events-none";

  // Append the ripple element to the button
  event.currentTarget.appendChild(ripples);

  // Remove the ripple element
  setTimeout(() => ripples.remove(), 1000);
};
