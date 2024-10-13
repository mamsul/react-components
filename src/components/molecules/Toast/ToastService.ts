import { createContext, useContext } from "react";

interface IToastContext {
  toasts: IToast[];
  open: (toastType: TToastVariant, message: string, timeOut?: number) => void;
  close: (id: string) => void;
}

const ToastContext = createContext<IToastContext>({
  toasts: [],
  open: () => {},
  close: () => {},
});

export const useToast = () => useContext(ToastContext);

export default ToastContext;
