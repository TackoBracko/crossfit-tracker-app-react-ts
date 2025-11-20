//import React from 'react'
import classes from "./Button.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  variation: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: string;
};

export default function Button({
  children,
  variation,
  iconLeft,
  iconRight,
  onClick,
  className,
}: ButtonProps) {
  let variationStyleBtn = "";

  if (variation === "primary") {
    variationStyleBtn = classes.primaryBtn;
  } else if (variation === "secondary") {
    variationStyleBtn = classes.secondaryBtn;
  } else if (variation === "tertiary") {
    variationStyleBtn = classes.tertiaryBtn;
  } else if (variation === "quaternary") {
    variationStyleBtn = classes.quaternary;
  }

  return (
    <button
      className={
        variation === "tertiary"
          ? `${classes.tertiaryBtn}`
          : `${classes.baseBtn} ${variationStyleBtn} ${className}`
      }
      onClick={onClick}
    >
      {iconLeft && <span>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
}
