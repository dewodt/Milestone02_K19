"use client";

interface ButtonProps {
  children: string | React.ReactNode;
  color: "solid-blue-green" | "transparent-blue-green";
  disabled: boolean;
  onClick: (e: React.MouseEvent) => void;
  fullWidth: boolean;
  type: "submit" | "button" | "reset";
  paddingX: string;
  paddingY: string;
  ariaLabel?: string;
}

const bgColorDefault = {
  "solid-blue-green": "bg-custom-blue-green text-white xl:hover:bg-opacity-90",
  "transparent-blue-green":
    "border-2 border-solid border-custom-blue-green bg-white bg-opacity-0 text-custom-blue-green xl:hover:bg-opacity-20",
} as const;

const Button = ({
  children,
  color,
  disabled,
  onClick,
  fullWidth,
  type,
  paddingX,
  paddingY,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      style={{ padding: `${paddingY} ${paddingX}` }}
      className={`xl:transititon flex h-fit flex-none items-center justify-center rounded-md font-inter text-base font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] xl:duration-300 xl:ease-in-out ${
        fullWidth ? "w-full" : "w-fit"
      } ${
        disabled
          ? "cursor-not-allowed bg-gray-400 text-white"
          : bgColorDefault[color]
      }`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  paddingX: "24px",
  paddingY: "12px",
  type: "button",
  onClick: () => {
    return;
  },
};

export default Button;
