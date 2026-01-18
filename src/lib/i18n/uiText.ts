import type { Lang } from "./LanguageContext";

type UiTextShape = {
    nav: Record<string, string>,
    hero: {
        pill: string;
        hello: string;
        iam: string;
        subtitleBold: string;
        subtitleItalic: string;
    },
    about: {
        expertise: string;
        achievements: {
            cleanCodeTitle: string;
            cleanCodeDesc: string;
            architectureTitle: string;
            architectureDesc: string;
            performanceTitle: string;
            performanceDesc: string;
        };
    },
    education: {
        heading: string,
        subheading: string,
    },
    experience: {
        heading: string,
        subheading: string,
    }

};

export const uiText: Record<Lang, { nav: Record<string, string>; hero: UiTextShape["hero"], about: UiTextShape["about"], experience: UiTextShape["experience"], education: UiTextShape["education"] }> = {
    tr: {
        nav: {
            all: "Ana Sayfa",
            about: "Hakkımda",
            education: "Eğitim",
            experience: "Deneyim",
            projects: "Projeler",
            skills: "Yetenekler",
            language: "Dil",
            certificates: "Sertifikalar",
        },
        hero: {
            pill: "İşe hazırım",
            hello: "Merhaba",
            iam: "Ben",
            subtitleBold: "Full-Stack Developer ⚡ | CRM & Süreç Sistemleri 🧩",
            subtitleItalic:
                "UI’dan API’ye, veritabanına kadar uçtan uca web ürünleri geliştiriyorum 💻✨",
        },
        about: {
            expertise: "Yetenekler",
            achievements: {
                cleanCodeTitle: "Temiz Kod",
                cleanCodeDesc: "Bakımı kolay, zarif çözümler",
                architectureTitle: "Mimari",
                architectureDesc: "Ölçeklenebilir, yeniden kullanılabilir UI sistemleri",
                performanceTitle: "Performans",
                performanceDesc: "Hızlı, verimli optimize edilmiş sayfalar",
            },

        },
        education: {
            heading: "Eğitim Yolculuğum",
            subheading: "Yazılım mühendisliği eğitimim boyunca, temel bilgisayar bilimi prensiplerinden ileri seviye yazılım geliştirme tekniklerine kadar geniş bir yelpazede bilgi edindim. Algoritmalar, veri yapıları, sistem tasarımı ve yazılım mimarisi konularında derinlemesine bilgi sahibi oldum. Bu sağlam temel, gerçek dünya projelerinde etkili çözümler üretmemi sağladı.",
        },
        experience: {
            heading: "Full-Stack Geliştirici Olarak Yolculuğum",
            subheading: "Uçtan uca web ürünleri geliştiriyorum: kullanıcı arayüzünden backend servislerine ve veritabanına kadar. Operasyonel verimliliğe odaklanan CRM ve yönetim modülleri (raporlama, süreç takibi, koordinasyon) geliştirdim; IELTS sınav sistemi (otomatik puanlama/raporlama) ve öğretmen ödeme/ders takibi gibi iş akışlarını da dijitalleştirdim. Temiz mimari, performans ve sürdürülebilir kod benim için önemli.",

        },





    },
    en: {
        nav: {
            all: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            language: "Language",
            certificates: "Certificates",
        },
        hero: {
            pill: "Available for work",
            hello: "Hello",
            iam: "I'm",
            subtitleBold: "Full-Stack Builder ⚡ | CRM & Workflow Systems 🧩",
            subtitleItalic:
                "Shipping end-to-end web products with clean UI, reliable APIs, and measurable business impact 💻✨",
        },
        about: {
            expertise: "Expertise",
            achievements: {
                cleanCodeTitle: "Clean Code",
                cleanCodeDesc: "Maintainable components with elegant solutions",
                architectureTitle: "Architecture",
                architectureDesc: "Scalable, reusable UI systems",
                performanceTitle: "Performance",
                performanceDesc: "Fast, responsive pages optimized for efficiency",
            },
        },
        education: {
            heading: "My Journey in Education",
            subheading: "Throughout my software engineering education, I have acquired a broad range of knowledge, from fundamental computer science principles to advanced software development techniques. I have gained deep insights into algorithms, data structures, system design, and software architecture. This solid foundation has enabled me to craft effective solutions in real-world projects.",
        },
        experience: {
            heading: "My Journey as a Full-Stack Developer",
            subheading: "I build end-to-end web products—from user-facing interfaces to backend services and databases—focused on operational efficiency. I’ve delivered CRM and management modules for reporting, process tracking, and coordination, including an IELTS exam system with automated scoring and workflows for payment/lesson tracking. I care about clean architecture, performance, and shipping reliable features.",

        },
    },
};

export type UiText = typeof uiText;