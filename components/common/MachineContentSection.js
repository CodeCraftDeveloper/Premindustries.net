const copyClassName =
  "text-justify text-[17px] font-medium leading-8 text-brand-slate sm:text-[18px]";

export default function MachineContentSection({
  paragraphs,
  listIntro,
  listItems,
  outro,
}) {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="site-shell-tight">
        <article className="rounded-shell border border-brand-border/70 bg-white px-6 py-7 shadow-panel sm:px-8 sm:py-9 lg:px-10">
          <div className="space-y-6">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={copyClassName}>
                {paragraph}
              </p>
            ))}

            <div className="space-y-4">
              <p className={copyClassName}>{listIntro}</p>

              <ul className="space-y-3">
                {listItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-3 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red"
                      aria-hidden="true"
                    />
                    <span className={copyClassName}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className={copyClassName}>{outro}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
