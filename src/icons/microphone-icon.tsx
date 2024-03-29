import { IconProps } from "./types";

export const MicrophoneIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z"
        stroke={color ?? "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11"
        stroke={color ?? "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.10986 7.48005C10.8899 6.83005 12.8299 6.83005 14.6099 7.48005"
        stroke={color ?? "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0298 10.48C11.2298 10.15 12.4998 10.15 13.6998 10.48"
        stroke={color ?? "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
