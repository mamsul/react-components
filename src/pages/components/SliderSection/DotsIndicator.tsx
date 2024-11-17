import clsx from "clsx";
import { Dispatch, HTMLAttributes, SetStateAction } from "react";

interface IDotsIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  itemLength: number;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function DotsIndicator({
  className,
  itemLength,
  activeIndex,
  setActiveIndex,
  ...props
}: IDotsIndicatorProps) {
  return (
    <div
      className={clsx(
        "mt-4 flex space-x-2 w-full justify-center items-center",
        className
      )}
      {...props}
    >
      {Array(itemLength)
        .fill("")
        .map((_, idx) => (
          <div
            key={"dots-image-framer" + idx}
            onClick={() => setActiveIndex(idx)}
            className={clsx(
              "size-2 transition-colors duration-200 rounded-full cursor-pointer",
              activeIndex === idx ? "bg-blue-500" : "bg-white"
            )}
          />
        ))}
    </div>
  );
}
