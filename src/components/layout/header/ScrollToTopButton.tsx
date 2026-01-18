import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="size-10 bg-zinc-900/80 backdrop-blur-md rounded-xl p-2
                 hover:scale-110 duration-300 fixed bottom-4 right-8 md:right-20 z-[9999]
                 grid place-items-center"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      type="button"
    >
      <span className="text-white">↑</span>
    </button>
  );
}
