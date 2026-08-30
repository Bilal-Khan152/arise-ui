import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type TemplateBadge = "Free" | "Paid";

const TEMPLATES = [
  {
    title: "Portfolio website react js and Css",
    badge: "Free" as const,
    description:
      "A modern, responsive portfolio template for developers built with React and CSS.",
    image: "https://i.ibb.co/7JxZrz49/Screenshot-2025-09-22-154318.png",
    downloadUrl: "https://github.com/Amitgajare2/portfolio",
    previewUrl: "https://amitg.netlify.app/",
  },
  {
    title: "BrandMyPhone.tech Boilerplate",
    badge: "Free" as const,
    description:
      "Open-source boilerplate behind BrandMyPhone.tech - sell sponsor sticker spots on the back of your phone.",
    image: "https://i.ibb.co/Rp0txbhG/image.png",
    downloadUrl: "https://github.com/luisdiaz327/brandmyphone-oss",
    previewUrl: "https://brandmyphone.tech/",
  },
];

const BADGE_STYLES: Record<TemplateBadge, string> = {
  Free: "bg-sky-500/15 text-sky-400",
  Paid: "bg-indigo-500/15 text-indigo-300",
};

export default function TemplatesSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      id="templates"
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20",
        className,
      )}
    >
      <div className="mb-10 md:mb-14">
        <h2 className="font-runde text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl dark:text-white">
          Templates
        </h2>
        <p className="mt-3 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base md:text-lg">
          Ready-to-use, full-page templates built with AriseUI. Download and
          start building from a solid foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
        {TEMPLATES.map((template) => (
          <article key={template.title} className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl border border-border bg-muted dark:border-white/10 dark:bg-neutral-900">
              <img
                src={template.image}
                alt={template.title}
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-foreground dark:text-white">
                  {template.title}
                </h3>
                <span
                  className={cn(
                    "shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium",
                    BADGE_STYLES[template.badge],
                  )}
                >
                  {template.badge}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {template.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href={template.downloadUrl}
                  className="inline-flex h-9 items-center gap-1 rounded-full bg-neutral-800 px-4 text-sm font-medium text-white transition-colors duration-150 ease-out hover:bg-neutral-700 dark:bg-white/10 dark:hover:bg-white/15"
                >
                  Download
                  <ChevronRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={template.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors duration-150 ease-out hover:text-foreground dark:text-white/70 dark:hover:text-white"
                >
                  Live Preview
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
