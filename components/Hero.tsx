"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Terminal from "./Terminal";

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24">
      <div className="absolute left-1/3 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 pt-24 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.12,
            delayChildren: 0.15,
          }}
        >
          <motion.div
            variants={item}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1 text-sm text-green-400"
          >
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for opportunities
          </motion.div>

          <motion.p
            variants={item}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-3 text-lg text-zinc-400"
          >
            Hi, I&apos;m Luis Avila.
          </motion.p>

          <motion.h1
            variants={item}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[3.2rem] font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[4.2rem] xl:text-7xl"
          >
            FULL-STACK
            <br />
            <span className="text-zinc-500">DEVELOPER.</span>
          </motion.h1>

          <motion.p
            variants={item}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-xl text-base leading-7 text-zinc-400 md:text-lg"
          >
            I build modern and scalable web applications focused on clean
            interfaces, performance and user experience.
          </motion.p>

          <motion.div
            variants={item}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500"
          >
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Node.js</span>
          </motion.div>

          <motion.div
            variants={item}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/5"
            >
              Explore my work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/10 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div
            variants={item}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex flex-wrap items-center gap-5 text-sm text-zinc-500"
          >
            <a
              href="https://github.com/luisavila23"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <FaGithub size={17} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/luis-avila-201b99272/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <FaLinkedin size={17} />
              LinkedIn
            </a>

            <a
              href="/cv-luis-avila.pdf"
              download
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Download size={17} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* TERMINAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden lg:flex lg:-translate-y-3 lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
