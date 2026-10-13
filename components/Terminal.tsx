"use client";

import { useEffect, useState } from "react";

const commands = [
  {
    command: "whoami",
    output: ["Luis Avila", "Full-Stack Developer"],
  },
  {
    command: "skills --list",
    output: ["React · TypeScript · Node.js · Next.js"],
  },
  {
    command: "status",
    output: ["Available for opportunities ✓"],
    success: true,
  },
];

export default function Terminal() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [finishedCommands, setFinishedCommands] = useState<number[]>([]);

  useEffect(() => {
    if (commandIndex >= commands.length) return;

    const currentCommand = commands[commandIndex].command;

    if (typedText.length < currentCommand.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentCommand.slice(0, typedText.length + 1));
      }, 70);

      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setFinishedCommands((prev) => [...prev, commandIndex]);
      setTypedText("");
      setCommandIndex((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(pause);
  }, [typedText, commandIndex]);

  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-500/10 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e]/90 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />

          <span className="ml-3 text-xs text-zinc-500">
            luis@portfolio:~
          </span>
        </div>

        <div className="min-h-[330px] p-6 font-mono text-sm leading-7">
          {commands.map((item, index) => {
            const isFinished = finishedCommands.includes(index);
            const isCurrent = index === commandIndex;

            if (!isFinished && !isCurrent) return null;

            return (
              <div key={index} className="mb-4">
                <div>
                  <span className="text-green-400">➜</span>{" "}
                  <span className="text-blue-400">~</span>{" "}
                  <span className="text-zinc-200">
                    {isFinished ? item.command : typedText}
                  </span>

                  {isCurrent && (
                    <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-zinc-400 align-middle" />
                  )}
                </div>

                {isFinished &&
                  item.output.map((line, outputIndex) => (
                    <div
                      key={outputIndex}
                      className={`pl-5 ${
                        item.success ? "text-green-400" : "text-zinc-400"
                      }`}
                    >
                      {line}
                    </div>
                  ))}
              </div>
            );
          })}

          {commandIndex >= commands.length && (
            <div>
              <span className="text-green-400">➜</span>{" "}
              <span className="text-blue-400">~</span>{" "}
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-zinc-400 align-middle" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}