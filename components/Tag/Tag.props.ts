import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: "s" | "m";
  color: "gray" | "ghost" | "green" | "red" | "primary";
  href?: string;
  children: ReactNode;
}
