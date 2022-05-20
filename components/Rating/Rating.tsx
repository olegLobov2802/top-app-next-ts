import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import Star from "./start.svg";
import { useEffect, useState, KeyboardEvent } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [rateArray, setRateArray] = useState<JSX.Element[]>(new Array(5).fill(<Star />));

  useEffect(() => {
    constructRate(rating);
  }, [rating]);

  const constructRate = (currentRating: number) => {
    const updateRate = rateArray.map((r, i) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: currentRating > i,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <Star
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => {
              isEditable && handleSpace(e, i + 1);
            }}
          />
        </span>
      );
    });

    setRateArray(updateRate);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRate(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {rateArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
