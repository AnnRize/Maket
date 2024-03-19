import { HTMLAttributes, ReactNode } from "react";
import style from "./TextWithLine.module.scss";

interface TextWithLineProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  left?: boolean;
  right?: boolean;
}

export const TextWithLine = ({
  left = false,
  right = false,
  children,
  ...props
}: TextWithLineProps) => {
  return (
    <p {...props}>
      <span className={left ? style.leftLine : ""} />
      <span className={`${style.text} `}>{children}</span>
      <span className={right ? style.rightLine : ""} />
    </p>
  );
};
