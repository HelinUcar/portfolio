import { memo, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { TextAnimate, type AnimationVariant } from "../magicui/text-animate";
import { RESUME } from "../../data";
import { cn } from "../../lib/utils";
import { Cover } from "../ui/cover";

import { useLanguage } from "../../lib/i18n/LanguageContext";
import { uiText } from "../../lib/i18n/uiText";

const animationTypes: AnimationVariant[] = [
  "fadeIn",
  "blurIn",
  "blurInUp",
  "blurInDown",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "scaleUp",
  "scaleDown",
];

export function Hero() {
  const { lang } = useLanguage();
  const t = uiText[lang];
  const r = RESUME[lang]; // ✅ artık dile göre veri

  // roleTitles dizisini güvenli şekilde al
  const titles = useMemo(() => {
    // senin data yapın: RESUME.en.roleTitles.title gibi görünüyor
    // yoksa fallback verelim
    return r?.roleTitles?.title?.length ? r.roleTitles.title : ["Frontend Developer"];
  }, [r]);

  const [currentText, setCurrentText] = useState(titles[0]);
  const [currentAnimation, setCurrentAnimation] = useState(animationTypes[0]);

  // Dil değişince ilk title’a dön (önemli!)
  useEffect(() => {
    setCurrentText(titles[0]);
  }, [titles]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const i = titles.indexOf(prev);
        return i === titles.length - 1 ? titles[0] : titles[i + 1];
      });
      setCurrentAnimation(animationTypes[Math.floor(Math.random() * animationTypes.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles]);

  return (
    <section id="top" className="w-full pt-16 sm:pt-20 pb-8 scroll-mt-24 sm:scroll-mt-28">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-20 px-2 md:px-6">
        <div className="flex-1 relative w-full lg:w-auto">
          {/* pill */}
          <div className="text-xs bg-zinc-100 dark:bg-gray-800/50 w-max rounded-full border flex items-center gap-2 px-3 py-1.5">
            <div className="size-2 rounded-full bg-indigo-700 font-medium animate-pulse" />
            {t.hero.pill}
          </div>

          {/* hello + title */}
          <div className="flex flex-row flex-wrap gap-4 items-center my-4 lg:my-0 lg:block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight my-4 md:my-8 dark:text-zinc-300 text-zinc-700">
              {t.hero.hello}
              <span className="lg:hidden">,</span>
            </h1>

            <Title name={r.about.name} iamText={t.hero.iam} />
          </div>

          {/* animated role title */}
          <div className="flex items-center justify-center md:justify-start">
            <motion.div
              layout
              className={cn(
                "md:w-fit w-full py-2 px-4 sm:px-8 text-base sm:text-lg md:text-xl font-bold my-5 rounded-lg pt-2 pb-3 text-center text-black dark:text-white",
                "[background:linear-gradient(to_bottom,var(--color-gray-100),var(--color-gray-200))]",
                "shadow-[inset_0_-1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-gray-300),_0_4px_8px_var(--color-gray-300)]",
                "dark:[background:linear-gradient(to_bottom,var(--color-neutral-700),var(--color-neutral-800))]",
                "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]"
              )}
            >
              <TextAnimate
                duration={1}
                animation={currentAnimation}
                by="character"
                startOnView={false}
                className="break-words"
              >
                {currentText}
              </TextAnimate>
            </motion.div>
          </div>

          {/* subtitle */}
          <div className="text-lg text-zinc-600 dark:text-zinc-400 my-6 md:my-10 font-bold">
            {t.hero.subtitleBold}
            <br />{" "}
            <span className="font-normal italic">{t.hero.subtitleItalic}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const Title = memo(function Title({
  name,
  iamText,
}: {
  name: string;
  iamText: string;
}) {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight sm:my-6 dark:text-zinc-300 text-zinc-700">
      {iamText} <Cover>{name}</Cover>
    </h1>
  );
});
