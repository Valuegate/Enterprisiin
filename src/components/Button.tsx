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
      primary: "bg-light-blue",
      secondary: "bg-light-blue-1",
      warning: "bg-yellow-200",
      danger: "bg-red-400",
    };
    return colorMap[type] || "bg-purple-500";
  };
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={joinClasses(
        `${width} ${height}`,
        disabled && "bg-gray-400",
        getButtonColorType(colorType || "primary"),
        className
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
