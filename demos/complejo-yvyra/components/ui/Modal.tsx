import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-dark text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
}
