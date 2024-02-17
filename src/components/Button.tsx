import { joinClasses } from "../helpers";
import { ButtonColorType, ButtonType } from "../types";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  type: ButtonType;
  colorType?: ButtonColorType;
  color?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  backgroundColor?: string;
  handleClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  disabled,
  type,
  colorType,
  handleClick,
  width = "w-auto",
  height = "h-12",
  loading,
  ...props
}) => {
  const getButtonColorType = (type: string): string => {
    const colorMap: Record<string, string> = {
      primary: "bg-blue-base",
      secondary: "bg-blue-10",
      warning: "bg-yellow-200",
      danger: "bg-red-400",
    };
    return colorMap[type] || "bg-blue-100";
  };
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={joinClasses(
        `${width} ${height}`,
        disabled && "bg-blue-20",
        getButtonColorType(colorType || "primary"),
        className,
        "font-medium text-[16px] leading-[24px] md:leading-[25.6px]"
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
