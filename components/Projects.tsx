import Image from "next/image";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Traceability Platform",
    description:
      "Frontend platform for traceability workflows, document management, reporting and geospatial data visualization.",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Ant Design",
      "Google Maps",
    ],
    image: "/projects/traceability.png",
    github: "",
    demo: "",
    featured: true,
    projectType: "Professional Project",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Responsive dashboard focused on data visualization, filtering, reusable UI components and interactive reporting.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Charts"],
    image: "/projects/dashboard.png",
    github: "",
    demo: "",
    featured: true,
    projectType: "Private Project",
  },
  {
    title: "Pokémon Search App",
    description:
      "Angular application that consumes the PokéAPI and allows users to search Pokémon by name or ID and display their main information.",
    technologies: ["Angular", "TypeScript", "RxJS", "REST API"],
    image: "/projects/pokemon.jpg",
    github: "#",
    demo: "#",
    featured: false,
    projectType: "",
  },
  {
    title: "Todo App",
    description:
      "Task management application built with Angular using signals, computed state and REST API integration.",
    technologies: ["Angular", "TypeScript", "Signals", "HttpClient"],
    image: "/projects/todo.png",
    github: "#",
    demo: "#",
    featured: false,
    projectType: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            Selected
            <span className="text-zinc-500"> work.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-500">
            A selection of projects where I&apos;ve worked with modern frontend
            and backend technologies to solve real problems and build scalable
            digital experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.12}>
              <article
                key={project.title}
                className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/2 transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 md:p-7">
                  {project.featured && (
                    <span className="mb-3 inline-block rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-400">
                      Featured project
                    </span>
                  )}

                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-500">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-white/20 hover:text-zinc-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex min-h-[24px] flex-wrap items-center gap-5">
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-white transition hover:text-blue-400"
                      >
                        Live demo ↗
                      </a>
                    )}

                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-zinc-400 transition hover:text-white"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {!project.demo &&
                      !project.github &&
                      project.projectType && (
                        <span className="text-sm text-zinc-500">
                          {project.projectType}
                        </span>
                      )}

                    {project.demo === "#" && project.github === "#" && (
                      <span className="text-sm text-zinc-600">
                        Repository coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
