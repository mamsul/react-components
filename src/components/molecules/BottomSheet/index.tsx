import { HTMLAttributes, useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheet({
  isOpen,
  onClose,
  className,
  children,
}: BottomSheetProps) {
  useEffect(() => {
    // Lock the body scroll when BottomSheet is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className={clsx(
          "fixed inset-x-0 bottom-0 z-[999] bg-white rounded-t-lg shadow-lg p-5",
          isOpen ? "animate-slideUp" : "animate-slideDown",
          className
        )}
      >
        {children}
      </div>

      <Backdrop onClick={onClose} />
    </>,
    document.body
  );
}

interface BackdropProps {
  onClick: () => void;
  className?: string;
}

export function Backdrop({ onClick, className }: BackdropProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "fixed inset-0 bg-black/25 z-[998] transition-opacity",
        className
      )}
    ></div>
  );
}
