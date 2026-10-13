import Reveal from "./Reveal";

const experiences = [
  {
    company: "Darwin Evolution",
    role: "Frontend Developer",
    period: "Aug 2024 – Feb 2026",
    description:
      "Worked on a SaaS platform focused on traceability and regulatory workflows, building scalable frontend solutions in an international agile environment.",
    highlights: [
      "Built reusable interfaces and components with React and TypeScript.",
      "Integrated REST APIs and managed server state with TanStack Query.",
      "Developed advanced tables, filters, pagination and dynamic forms.",
      "Implemented document upload workflows using signed URLs.",
      "Worked with reports, traceability data and bulk processing workflows.",
      "Integrated Google Maps and geospatial data.",
      "Collaborated in Scrum teams using Azure DevOps, code reviews and CI/CD.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Ant Design",
      "TanStack Query",
      "React Hook Form",
      "AWS",
      "Azure DevOps",
    ],
  },
  {
    company: "Kuepa EduTech",
    role: "Full Stack Developer",
    period: "Mar 2024 – Aug 2024",
    description:
      "Contributed to educational platforms including CRM, student portals and administrative tools, working across frontend and backend development.",
    highlights: [
      "Built and maintained interfaces with React, JavaScript and TypeScript.",
      "Developed and integrated backend functionality with Node.js.",
      "Worked on CRM, student portal and administrative dashboard features.",
      "Integrated REST APIs for student, course and user workflows.",
      "Implemented WhatsApp automation using Twilio and Meta APIs.",
      "Worked on notifications, reminders and student communication flows.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "REST APIs",
      "Twilio",
      "Meta API",
    ],
  },
  {
    company: "Overnights",
    role: "Junior Full Stack Developer",
    period: "Jul 2023 – Dec 2023",
    description:
      "Worked on a lodging platform, contributing to both frontend and backend features for guests and hosts.",
    highlights: [
      "Built frontend features using React and Next.js.",
      "Developed backend functionality with Node.js and NestJS.",
      "Worked with MongoDB for application data.",
      "Implemented authentication and user profile features.",
      "Developed dashboards for guests and hosts.",
      "Contributed to lodging and reservation workflows.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "MongoDB",
      "TypeScript",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <Reveal>
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Experience
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
              Professional
              <span className="text-zinc-500"> experience.</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-500">
              A selection of the roles and projects where I&apos;ve contributed
              to building scalable digital products and solving real technical
              challenges.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} delay={index * 0.12}>
                <article key={experience.company} className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border border-blue-500/50 bg-[#09090b] md:block">
                    <div className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400" />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 md:p-8">
                    {/* Top */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-blue-400">
                          {experience.company}
                        </p>
                      </div>

                      <span className="text-sm text-zinc-500">
                        {experience.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-6 space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-zinc-500"
                        >
                          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
