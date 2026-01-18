import type { ReactNode } from "react";

export function IconButton({
  children,
  onClick,
  ariaLabel,
}: {
  children: ReactNode;
  onClick?: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="h-10 w-10 rounded-xl border bg-white/70 backdrop-blur
                 shadow-sm hover:bg-white transition
                 dark:bg-black/40 dark:hover:bg-black/55"
    >
      <span className="grid place-items-center">{children}</span>
    </button>
  );
}
