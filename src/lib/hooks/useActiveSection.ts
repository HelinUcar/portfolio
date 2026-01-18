import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "top");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    // Header + top offset yaklaşık değeri (gerekirse 120/140 deneyebilirsin)
    const HEADER_OFFSET = 140;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        // Üstten header kadar "kırp", alttan da %60 kırp (tek section seçimi daha stabil)
        rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
    
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids.join("|")]);

  return active;
}
