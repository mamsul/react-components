import { Cross1Icon } from "@radix-ui/react-icons";
import clsx from "clsx";

export default function Toast({ toastType, message, onClose }: IToast) {
  const generateToastTheme = {
    error: "bg-red-50 text-red-800",
    success: "bg-green-50 text-green-800",
    warning: "bg-yellow-50 text-yellow-800",
    info: "bg-blue-50 text-blue-800",
  };

  return (
    <div className={clsx("rounded-md p-4 m-3", generateToastTheme[toastType])}>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={onClose}
              className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>

              <Cross1Icon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
