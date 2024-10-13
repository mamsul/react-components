// interface IToastType {
//   error: "bg-red-50 text-red-800";
//   success: "bg-green-50 text-green-800";
//   warning: "bg-yellow-50 text-yellow-800";
//   info: "bg-blue-50 text-blue-800";
// }

type TToastVariant = "error" | "success" | "warning" | "info";

interface IToast {
  id: string;
  toastType: TToastVariant;
  message: string;
  onClose: () => void;
}

interface IToastProvider {
  children: React.ReactNode;
}
