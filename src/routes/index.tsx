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
    <main className="hero-surface relative isolate min-h-screen overflow-hidden bg-background">
      <div className="hero-line hero-line-top" aria-hidden="true" />
      <div className="hero-line hero-line-bottom" aria-hidden="true" />

      <section className="relative mx-auto grid min-h-screen w-full max-w-[1480px] grid-cols-1 items-center gap-16 px-6 py-14 sm:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12 lg:px-14 lg:py-20 xl:px-20">
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
  );
}
