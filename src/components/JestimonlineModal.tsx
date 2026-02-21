"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type JestimonlineModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function JestimonlineModal({ isOpen, onClose }: JestimonlineModalProps) {
  useEffect(() => {
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

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Estimation immobilière"
    >
      <div className="flex shrink-0 items-center justify-end p-4">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          aria-label="Fermer"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="min-h-0 flex-1 px-4 pb-4">
        <iframe
          src="/jestimo-widget.html"
          title="Estimation immobilière Jestimo"
          className="h-full min-h-[calc(100dvh-5rem)] w-full max-w-2xl mx-auto border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  );
}
