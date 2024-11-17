import clsx from "clsx";
import { HTMLAttributes } from "react";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "icon";
}

export default function Button({
  className,
  children,
  variant = "primary",
  ...props
}: IButtonProps) {
  const btnVariants = {
    primary: "bg-blue-500 text-white px-4 py-2",
    secondary: "bg-blue-200 text-black px-4 py-2",
    tertiary: "bg-blue-100 text-black  px-4 py-2",
    outline: "bg-transparent border border-blue-500 text-blue-500 px-4 py-2",
    icon: "bg-transparent p-0",
  };

  return (
    <button className={clsx(btnVariants[variant], className)} {...props}>
      {children}
    </button>
  );
}
