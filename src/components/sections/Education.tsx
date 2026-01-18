import { useMemo } from "react";
import { EducationTimeline } from "../containers/education/education-timeline";

import { useLanguage } from "../../lib/i18n/LanguageContext";

import { RESUME } from "../../data";

export function Education() {
  const { lang } = useLanguage();
  const r = RESUME[lang];

  const data = useMemo(() => {
    return r.education.map((edu) => ({
      // ✅ soldaki büyük başlık okul adı
      title: edu.school,
      content: (
        <div className="space-y-3">
          <div>
            <p className="text-lg font-semibold text-black dark:text-white">
              {edu.degree}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {edu.start} - {edu.end} • {edu.location}
            </p>
          </div>

          {!!edu.highlights?.length && (
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
              {edu.highlights.map((h: string, i: number) => (
                <li key={`${edu.school}-${edu.start}-${i}`}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      ),
    }));
  }, [r.education]);

  return (
    <section id="education" className="section-container pt-12 md:pt-24 scroll-mt-24 sm:scroll-mt-28">
      <EducationTimeline data={data} />
    </section>
  );
}
