import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import Image from "next/image";

import { VscAzureDevops } from "react-icons/vsc";

import Reveal from "./Reveal";

const technologies = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Angular",
    icon: FaAngular,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "Azure DevOps",
    icon: VscAzureDevops,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* LEFT */}
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                About me
              </p>

              <h2 className="text-4xl font-bold tracking-[-0.03em] text-white md:text-5xl">
                I build digital products
                <span className="text-zinc-500">
                  {" "}
                  focused on real user needs.
                </span>
              </h2>
              <div className="relative mt-8 h-48 w-48 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                <Image
                  src="/profile.jpg"
                  alt="Luis Avila"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              <p className="text-lg leading-8 text-zinc-300">
                I&apos;m a Full-Stack Developer with experience building modern
                web applications using React, TypeScript, Node.js and other
                modern technologies.
              </p>

              <p className="leading-7 text-zinc-500">
                My experience includes building frontend interfaces, integrating
                REST APIs, managing data flows, working with document upload
                processes, dashboards and scalable web solutions.
              </p>

              <p className="leading-7 text-zinc-500">
                I&apos;ve also worked in agile and collaborative environments,
                contributing to products alongside international teams and
                focusing on code quality, maintainability and user experience.
              </p>

              <p className="leading-7 text-zinc-500">
                I&apos;m always interested in learning new technologies,
                improving the way I build software and taking on challenges that
                help me grow as a developer.
              </p>
            </div>
          </div>
        </Reveal>

        {/* STACK */}
        <Reveal delay={0.15}>
          <div className="mt-20 border-t border-white/5 pt-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Tech stack
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Technologies I work with
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {technologies.map((technology, index) => {
                const Icon = technology.icon;

                return (
                  <Reveal key={technology.name} delay={index * 0.05}>
                    <div className="group flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xl text-zinc-400 transition duration-300 group-hover:border-blue-500/30 group-hover:text-blue-400">
                        <Icon />
                      </div>

                      <span className="text-sm font-medium text-zinc-300 transition group-hover:text-white">
                        {technology.name}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
