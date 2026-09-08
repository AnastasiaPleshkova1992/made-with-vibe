import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Вайбкодинг и веб-дизайн — портфолио" },
      {
        name: "description",
        content: "Создаю красивые лендинги и веб-продукты с AI, продуманной структурой и современным дизайном.",
      },
      { property: "og:title", content: "Вайбкодинг и веб-дизайн — портфолио" },
      {
        property: "og:description",
        content: "Красивые лендинги и веб-продукты с AI и современным дизайном.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function InterfacePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[670px]" aria-label="Пример интерфейса веб-продукта">
      <div className="preview-backdrop" aria-hidden="true" />
      <div className="preview-window">
        <div className="preview-browserbar">
          <span className="bg-preview-dot-red" />
          <span className="bg-preview-dot-gold" />
          <span className="bg-preview-dot-green" />
        </div>

        <div className="grid min-h-[365px] grid-cols-[112px_minmax(0,1fr)] sm:min-h-[430px] sm:grid-cols-[150px_minmax(0,1fr)]">
          <aside className="border-r border-preview-line bg-preview-sidebar p-4 sm:p-6">
            <div className="mb-8 font-display text-lg font-semibold text-foreground sm:text-2xl">aura</div>
            <nav className="space-y-2" aria-label="Навигация макета">
              {[
                ["⌂", "Главная"],
                ["◇", "Проекты"],
                ["○", "Идеи"],
                ["□", "Библиотека"],
              ].map(([icon, label], index) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 rounded-md px-2 py-2 text-[10px] sm:gap-3 sm:px-3 sm:text-xs ${index === 0 ? "bg-preview-active text-primary" : "text-muted-foreground"}`}
                >
                  <span className="w-3 shrink-0 text-center" aria-hidden="true">{icon}</span>
                  <span className="truncate">{label}</span>
                </div>
              ))}
            </nav>
          </aside>

          <div className="p-5 sm:p-9">
            <div className="mb-7 flex items-center justify-between text-[9px] text-muted-foreground sm:text-[11px]">
              <span>Моё пространство</span>
              <span className="flex items-center gap-2"><i className="h-1.5 w-1.5 rounded-full bg-preview-dot-green" /> онлайн</span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_72px] gap-4 sm:grid-cols-[minmax(0,1fr)_108px] sm:gap-7">
              <div className="min-w-0">
                <span className="mb-3 block h-px w-8 bg-accent" />
                <p className="font-display text-[25px] leading-[0.96] text-foreground sm:text-[38px]">
                  Идеи обретают форму
                </p>
              </div>
              <div className="preview-art relative aspect-[3/4] overflow-hidden rounded-md">
                <span className="preview-leaf preview-leaf-one" />
                <span className="preview-leaf preview-leaf-two" />
                <span className="absolute bottom-3 left-3 right-2 font-display text-[9px] leading-tight text-primary sm:text-xs">
                  Дизайн<br />с характером
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-[minmax(0,1fr)_34px] items-center rounded-md bg-preview-field p-2 pl-3 text-[9px] text-muted-foreground shadow-soft sm:mt-9 sm:grid-cols-[minmax(0,1fr)_42px] sm:p-2.5 sm:pl-4 sm:text-xs">
              <span className="truncate">Опишите вашу новую идею…</span>
              <span className="grid aspect-square place-items-center rounded-full bg-primary text-primary-foreground" aria-hidden="true">→</span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
              {["Исследовать", "Создать", "Улучшить"].map((label, index) => (
                <div key={label} className="rounded-md border border-preview-line bg-card p-2.5 sm:p-4">
                  <span className={`mb-3 block h-4 w-4 rounded-full ${index === 1 ? "bg-preview-peach" : "bg-preview-pink"}`} />
                  <span className="block truncate text-[8px] font-semibold text-foreground sm:text-[11px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      <main className="hero-surface relative isolate min-h-screen overflow-hidden bg-background">
        <div className="hero-line hero-line-top" aria-hidden="true" />
        <div className="hero-line hero-line-bottom" aria-hidden="true" />

        <section className="relative mx-auto grid min-h-screen w-full max-w-[1480px] grid-cols-1 items-center gap-16 px-6 py-14 sm:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12 lg:px-14 lg:py-10 xl:px-20">
          <div className="relative z-10 max-w-[650px] pt-2 lg:pt-0">
            <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold uppercase text-primary sm:text-[11px]">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span>VIBE CODING × WEB DESIGN × AI</span>
            </div>

            <h1 className="max-w-[640px] font-display text-[46px] font-medium leading-[0.94] text-foreground sm:text-[65px] lg:text-[70px] xl:text-[78px]">
              Превращаю идеи в <em className="font-medium text-primary">красивые</em> веб-продукты
            </h1>

            <p className="mt-8 max-w-[570px] text-[15px] leading-7 text-muted-foreground sm:text-base">
              Создаю лендинги и простые веб-продукты, сочетая AI-инструменты, продуманную структуру и современный дизайн.
            </p>

            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-button transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transform-none"
              >
                Смотреть проекты <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary bg-transparent px-7 text-sm font-semibold text-primary transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transform-none"
              >
                Обсудить идею
              </a>
            </div>
          </div>

          <div className="relative z-10 w-full pb-4 lg:pb-0">
            <div className="mb-5 flex items-center justify-end gap-3 text-[9px] font-semibold uppercase text-muted-foreground sm:text-[10px]">
              <span>ИДЕИ</span><span>×</span><span>ДИЗАЙН</span><span>×</span><span>ПРОДУКТ</span>
            </div>
            <InterfacePreview />
          </div>
        </section>
      </main>
      <FeaturedWork />
    </>
  );
}

const projects = [
  {
    title: "Что надеть?",
    description:
      "Цифровой гардероб для создания образов из своих вещей и сохранения удачных сочетаний.",
    tags: ["Web App", "Product Design", "AI"],
    preview: WardrobePreview,
  },
  {
    title: "Focus",
    description:
      "Трекер задач и привычек для планирования дня и концентрации на главном.",
    tags: ["Web App", "UX/UI", "Productivity"],
    preview: FocusPreview,
  },
  {
    title: "Lumi",
    description:
      "Концепт современного лендинга для digital-продукта.",
    tags: ["Landing Page", "Web Design", "Lovable"],
    preview: LumiPreview,
  },
];

function FeaturedWork() {
  return (
    <section id="projects" className="relative bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1480px] px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="mb-4 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-[11px]">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <span>Featured Work</span>
        </div>

        <h2 className="max-w-[900px] font-display text-[40px] font-medium leading-[1.05] text-foreground sm:text-[52px] lg:text-[62px]">
          Избранные проекты
        </h2>

        <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-muted-foreground sm:text-base">
          Учебные и концептуальные проекты, в которых я исследую продуктовый дизайн, AI-инструменты и современную веб-разработку.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  preview: Preview,
}: {
  title: string;
  description: string;
  tags: string[];
  preview: React.ComponentType;
}) {
  return (
    <article className="project-card flex flex-col">
      <div className="relative aspect-[4/3] w-full bg-preview-sidebar/40">
        <div className="absolute inset-0 p-3 sm:p-4">
          <Preview />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[26px] font-medium leading-tight text-foreground sm:text-[28px]">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function WardrobePreview() {
  return (
    <div className="project-preview-frame flex h-full flex-col">
      <div className="project-preview-bar">
        <span className="bg-preview-dot-red project-preview-dot" />
        <span className="bg-preview-dot-gold project-preview-dot" />
        <span className="bg-preview-dot-green project-preview-dot" />
      </div>

      <div className="grid flex-1 grid-cols-[64px_1fr]">
        <aside className="border-r border-preview-line bg-preview-sidebar p-2">
          <div className="mb-3 font-display text-[9px] font-semibold leading-tight text-foreground">
            Что
            <br />
            надеть?
          </div>
          <nav className="space-y-1.5" aria-label="Навигация гардероба">
            {[
              ["◆", "Гардероб"],
              ["◇", "Образы"],
              ["○", "Избранное"],
              ["□", "Статистика"],
            ].map(([icon, label], index) => (
              <div
                key={label}
                className={`flex items-center gap-1 rounded px-1 py-1 text-[7px] ${
                  index === 0
                    ? "bg-preview-active text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="w-2 text-center" aria-hidden="true">
                  {icon}
                </span>
                <span className="truncate">{label}</span>
              </div>
            ))}
          </nav>
        </aside>

        <div className="flex flex-col p-3">
          <div className="mb-1 font-display text-[11px] font-medium text-foreground">
            Доброе утро, Аня{" "}
            <span aria-hidden="true">🌸</span>
          </div>
          <div className="mb-3 text-[8px] text-muted-foreground">
            Сегодня можно надеть что-то особенное
          </div>

          <div className="grid flex-1 grid-cols-[1fr_56px] gap-2">
            <div className="grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-md bg-preview-pink/35"
                />
              ))}
            </div>
            <div className="preview-outfit-card rounded-md p-2">
              <div className="font-display text-[8px] leading-tight text-primary">
                Твой образ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FocusPreview() {
  return (
    <div className="project-preview-frame flex h-full flex-col">
      <div className="project-preview-bar justify-between">
        <div className="flex items-center gap-1.5">
          <span className="grid h-3 w-3 place-items-center rounded-full bg-primary text-[6px] text-primary-foreground">
            ✓
          </span>
          <span className="font-display text-[9px] font-semibold text-foreground">
            Focus
          </span>
        </div>
        <div className="hidden items-center gap-2 text-[7px] text-muted-foreground sm:flex">
          <span>Сегодня</span>
          <span>Статистика</span>
          <span>Привычки</span>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-[1fr_80px] gap-3 p-3">
        <div className="flex flex-col">
          <div className="font-display text-[13px] font-medium text-foreground">
            Сегодня
          </div>
          <div className="mb-3 text-[8px] text-muted-foreground">
            Вт, 12 ноября
          </div>

          <div className="space-y-2">
            {[
              ["Подготовить презентацию", "10:00", true],
              ["Созвон с командой", "11:00", false],
              ["Почитать книгу", "19:00", false],
            ].map(([task, time, done]) => (
              <div
                key={task}
                className="flex items-center gap-2 rounded-md border border-preview-line bg-preview-field p-1.5"
              >
                <span
                  className={`h-2.5 w-2.5 rounded border ${
                    done
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  }`}
                  aria-hidden="true"
                />
                <span className="flex-1 truncate text-[8px] text-foreground">
                  {task}
                </span>
                <span className="text-[7px] text-muted-foreground">{time}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto rounded-md border border-preview-line bg-preview-field p-2">
            <div className="mb-2 flex items-center justify-between text-[8px] text-foreground">
              <span>Привычки</span>
              <span className="text-muted-foreground">4 из 6</span>
            </div>
            <div className="flex h-8 items-end gap-1">
              {[40, 60, 30, 80, 55, 90, 45].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-preview-pink/60"
                  style={{ height: `${h}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="grid aspect-square place-items-center rounded-full border-4 border-preview-line bg-preview-field">
            <div className="text-center">
              <div className="font-display text-[13px] font-medium text-foreground">
                3
                <span className="text-[8px] text-muted-foreground"> из 5</span>
              </div>
              <div className="text-[6px] text-muted-foreground">
                задач выполнено
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-md border border-preview-line bg-preview-field p-2">
            <div className="mb-2 text-[8px] font-medium text-foreground">
              Ноябрь
            </div>
            <div className="grid grid-cols-7 gap-0.5 text-center text-[6px] text-muted-foreground">
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
                <span key={d}>{d}</span>
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`rounded-sm py-0.5 ${
                    i === 1 ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LumiPreview() {
  return (
    <div className="project-preview-frame flex h-full flex-col">
      <div className="project-preview-bar justify-between">
        <span className="font-display text-[9px] font-semibold text-foreground">
          Lumi
        </span>
        <div className="flex items-center gap-2">
          <span className="hidden text-[7px] text-muted-foreground sm:inline">
            Возможности
          </span>
          <span className="rounded-full bg-primary px-2 py-0.5 text-[6px] font-semibold text-primary-foreground">
            Начать
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 items-center overflow-hidden p-4">
        <div className="relative z-10 max-w-[55%]">
          <div className="mb-2 text-[7px] uppercase tracking-widest text-primary">
            AI-помощник для идей
          </div>
          <div className="font-display text-[15px] leading-[1.05] text-foreground">
            Больше пространства для хороших идей
          </div>
          <p className="mt-2 text-[8px] leading-relaxed text-muted-foreground">
            Собирай мысли, структурируй идеи и превращай их в реальные планы.
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-primary px-2 py-1 text-[6px] font-semibold text-primary-foreground">
              Попробовать
            </span>
            <span className="rounded-full border border-primary px-2 py-1 text-[6px] font-semibold text-primary">
              Узнать больше
            </span>
          </div>
        </div>

        <div className="absolute right-[-10%] top-[10%] z-0 h-[80%] w-[55%] rounded-2xl bg-gradient-to-br from-preview-pink to-preview-peach p-2 shadow-soft">
          <div className="h-full w-full rounded-xl bg-card/90 p-2 shadow-sm">
            <div className="space-y-1.5">
              {["Новая идея", "Создать план", "Улучшить текст"].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 rounded-md bg-preview-field p-1.5"
                >
                  <span className="h-2 w-2 rounded-full bg-preview-pink" aria-hidden="true" />
                  <span className="text-[6px] text-foreground">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-md bg-preview-active p-1.5">
              <span className="mb-1 block h-1 w-8 rounded-full bg-primary/40" />
              <span className="block h-1 w-10 rounded-full bg-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
