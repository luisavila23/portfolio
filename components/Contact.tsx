import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/2 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-5xl">
                  Let&apos;s build something
                  <span className="text-zinc-500"> great together.</span>
                </h2>

                <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
                  I&apos;m open to frontend and full-stack opportunities,
                  collaborative projects and new technical challenges.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <a
                  href="mailto:TU_CORREO"
                  className="text-lg font-medium text-white transition hover:text-blue-400"
                >
                  leavilam23@gmail.com
                </a>

                <div className="flex gap-5 text-sm text-zinc-500">
                  <a
                    href="https://www.linkedin.com/in/luis-avila-201b99272/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href="https://github.com/luisavila23"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
