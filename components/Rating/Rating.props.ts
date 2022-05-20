import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  isEditable?: boolean;
  setRating?: (rating: number) => void;
  rating: number;
}
