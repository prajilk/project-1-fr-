import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type GlowingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "text-black after:pointer-event-none group relative flex items-center justify-center duration-300 transition-all after:duration-500 after:transition-shadow rounded-md font-bold uppercase after:absolute after:size-full after:rounded-md after:opacity-50 active:scale-95",
  {
    variants: {
      size: {
        default: "px-5 py-3 text-sm",
        sm: "px-4 py-3 text-base",
        lg: "px-4 py-3 text-base md:px-6 md:py-4 md:text-lg",
        icon: "size-10 rounded-full after:rounded-full",
      },
      color: {
        default:
          "bg-primary after:shadow-[0_20px_114.1px_0_rgba(225,242,150,.8)] hover:bg-secondary hover:after:shadow-[0_5px_21.6px_0_rgba(225,242,150,.8)]",
      },
    },
    defaultVariants: {
      size: "default",
      color: "default",
    },
  },
);

const GlowingButton = ({
  children,
  size,
  className,
  ...props
}: GlowingButtonProps) => {
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

export default GlowingButton;
