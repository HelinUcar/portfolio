export function MobileDrawer({
  open,
  onClose,
  titleLeft,
  items,
}: {
  open: boolean;
  onClose: () => void;
  titleLeft: React.ReactNode;
  items: { label: string; href: string; isComingSoon?: boolean }[];
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] md:hidden">
      <button
        className="absolute inset-0 bg-black/30"
        aria-label="Close menu"
        onClick={onClose}
      />

      <div className="absolute inset-0 bg-white dark:bg-black">
        <div className="flex justify-between items-center px-4 h-16 border-b">
          <div className="flex items-center gap-2">
            {titleLeft}
          </div>

          <button
            className="border size-8 rounded-xl grid place-items-center"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-6 flex flex-col gap-4">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="flex items-center gap-2 font-medium text-xl"
              onClick={onClose}
            >
              {it.label}
              {it.isComingSoon && (
                <span className="text-sm bg-blue-300/10 text-blue-500 px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
            </a>
          ))}

          <div className="h-px bg-black/10 dark:bg-white/10 my-2" />

         
        </div>
      </div>
    </div>
  );
}
