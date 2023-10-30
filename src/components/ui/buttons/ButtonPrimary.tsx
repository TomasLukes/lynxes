import { ReactElement } from "react";

type ButtonPrimaryProps = {
  type: "button" | "submit";
  label: string;
  style: string;
  onClick?: () => void;
};

const ButtonPrimary = ({
  type,
  label,
  style,
  onClick,
}: ButtonPrimaryProps): ReactElement => (
  <button
    type={type}
    className={`subtitle font-base bg-primary-700 px-6 py-3 text-light-100 ${style}
    hover:bg-primary-500`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default ButtonPrimary;
