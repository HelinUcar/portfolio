import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../../lib/utils";
import { useOutsideClick } from "../../lib/hooks/useOutsideClick";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

export type CardData = {
  src: string;
  title: string;
  category: string;
  content?: React.ReactNode;
  techStack?: string[];
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export function Carousel({ items, initialScroll = 0 }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft = initialScroll;
    checkScrollability();
  }, [initialScroll]);

  const scrollLeft = () =>
    carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () =>
    carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  const handleCardClose = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = window.innerWidth < 768 ? 230 : 384; // md:w-96
    const gap = window.innerWidth < 768 ? 4 : 8;
    const scrollPosition = (cardWidth + gap) * (index + 1);
    el.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div className="flex justify-end gap-2">
          <button
            className="relative z-40 md:size-10 size-8 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            type="button"
            aria-label="Scroll left"
          >
            <IconArrowNarrowLeft className="h-5 w-5 text-gray-600 dark:text-neutral-200" />
          </button>
          <button
            className="relative z-40 md:size-10 size-8 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
            type="button"
            aria-label="Scroll right"
          >
            <IconArrowNarrowRight className="h-5 w-5 text-gray-600 dark:text-neutral-200" />
          </button>
        </div>

        <div
          className="flex w-full overflow-x-scroll overscroll-x-hidden py-14 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="absolute right-0 z-[10] h-full w-[6%] bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div
            className={cn("flex flex-row justify-start gap-4 pl-4", "mx-auto")}
          >
            {items.map((item, index) => (
              <motion.div
                key={"card" + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                className="last:pr-[6%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export function Card({
  card,
  index,
  layout = false,
  techStack,
}: {
  card: CardData;
  index: number;
  layout?: boolean;
  techStack?: string[];
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    document.body.style.overflow = open ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useOutsideClick(containerRef, () => {
    if (open) handleClose();
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[110] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
                type="button"
                aria-label="Close"
              >
                <IconX className="h-5 w-5 text-neutral-100 dark:text-neutral-900" />
              </button>

              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>

              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>

              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        type="button"
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-80 md:h-[33rem] md:w-[26rem] overflow-hidden flex flex-col items-start justify-start relative z-10"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />

        <div className="relative z-40 p-3 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-base md:text-xl font-semibold text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl max-w-xs text-left [text-wrap:balance] mt-2 font-black italic"
          >
            {card.title}
          </motion.p>
        </div>

        {!!techStack?.length && (
          <div className="absolute z-40 bottom-0 left-0 p-3 md:p-8 flex flex-wrap gap-1">
            {techStack.map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white md:text-sm font-semibold text-left px-3 py-1 rounded-2xl bg-black/50 backdrop-blur-sm border text-[10px] shadow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        )}

        <div className="absolute duration-500 z-[11] dark:bg-slate-800 bg-slate-400 dark:opacity-35 opacity-20 dark:hover:opacity-20 hover:opacity-35 inset-0 backdrop-blur-sm" />

        <BlurImage
          src={card.src}
          alt={card.title}
          className="object-cover absolute z-10 inset-0 transition duration-300"
        />
      </motion.button>
    </>
  );
}

export function BlurImage({
  src,
  className,
  alt,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt ?? "image"}
      onLoad={() => setLoading(false)}
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
}
