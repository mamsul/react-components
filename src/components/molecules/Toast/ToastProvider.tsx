import { useState } from "react";
import ToastContext from "./ToastService";
import Toast from "./Toast";

export default function ToastProvider({ children }: IToastProvider) {
  const [toasts, setToats] = useState<IToast[]>([]);

  const open = (
    toastType: TToastVariant = "info",
    message: string,
    timeOut = 3000
  ) => {
    const id = Math.random().toString(36).substring(2, 15);

    setToats((prevToasts) => [
      ...prevToasts,
      {
        id,
        message,
        toastType,
        onClose: () =>
          setToats(prevToasts.filter(({ id: prevId }) => prevId !== id)),
      },
    ]);

    setTimeout(() => close(id), timeOut);
  };

  const close = (id: string) => {
    setToats((prevToasts) =>
      prevToasts.filter(({ id: prevId }) => prevId !== id)
    );
  };

  return (
    <ToastContext.Provider value={{ open, close, toasts }}>
      {children}
      <div className="space-y-2 absolute bottom-4 right-4">
        {toasts.map(({ id, message, toastType }) => (
          <Toast
            key={id}
            id={id}
            message={message}
            toastType={toastType}
            onClose={() => close(id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
