import { useMemo } from "react";
import { ExperienceTimeline } from "../containers/experience/experience-timeline";
import { useLanguage } from "../../lib/i18n/LanguageContext";

import { RESUME } from "../../data";

export function Experience() {
  const { lang } = useLanguage();
  
  const r = RESUME[lang];

  const data = useMemo(() => {
    return r.experience.map((exp) => ({
      // soldaki büyük başlık: istersen tarih, istersen company
      title: `${exp.start} - ${exp.end}`,
      content: (
        <div className="space-y-3">
          <div>
            <p className="text-lg font-semibold text-black dark:text-white">
              {exp.role} • {exp.company}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {exp.location}
            </p>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            {exp.bullets.map((b: string, i: number) => (
              <li key={`${exp.company}-${i}`}>{b}</li>
            ))}
          </ul>
        </div>
      ),
    }));
  }, [r.experience]);

  return (
    <section id="experience" className="section-container pt-12 md:pt-24 scroll-mt-24 sm:scroll-mt-28">
      <ExperienceTimeline data={data} />

    </section>
  );
}
