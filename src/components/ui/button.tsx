import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva("rounded-md border uppercase", {
  variants: {
    size: {
      default: "px-5 py-3 text-sm font-bold",
      sm: "px-4 py-3 text-xs font-semibold",
      lg: "md:px-6 md:py-4 md:text-lg md:font-bold px-4 py-3 text-xs font-semibold",
      icon: "size-10 rounded-full after:rounded-full",
    },
    color: {
      default: "bg-primary border-primary text-black",
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});

const Button = ({ children, size, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({
          size,
          className,
        }),
      )}
      {...props}
    >
      <span className="relative block overflow-hidden">
        <span className="block duration-300 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute bottom-0 block translate-y-full duration-300 group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </button>
  );
};

export default Button;
