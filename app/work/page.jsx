"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    category: "Frontend and Backend",
    title: "Notes Taking App",
    description: "A modern note-taking application built with Next.js and FastAPI. It supports creating, organizing, and searching personal notes with authentication and a clean workspace.",
    stack: ["Next.js", "TypeScript", "Zustand", "Tailwind", "FastAPI", "MongoDB", "JWT"],
    image: "/assets/projects/notes2.png",
    live: "",
    github: "https://github.com/Yashvanth-R/notes-app",
  },
  {
    category: "Frontend",
    title: "Dynamic Form Builder",
    description: "A form builder with seven field types, real-time preview, drag and drop ordering, validation, derived fields, and persistent storage.",
    stack: ["React", "TypeScript", "Material UI", "Redux Toolkit", "React Router"],
    image: "/assets/projects/form builder.png",
    live: "https://form-builder-r8lpnchkp-yashvanth-rs-projects.vercel.app/create",
    github: "https://github.com/Yashvanth-R/form-builder",
  },
  {
    category: "Full Stack MERN",
    title: "Products Store",
    description: "A MERN product store demo with REST API integration, product listing and details, reusable UI components, responsive layouts, and error handling.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Chakra UI", "REST API"],
    image: "/assets/projects/product store.png",
    live: "",
    github: "https://github.com/Yashvanth-R/Product-Store",
  },
  {
    category: "Microservices",
    title: "Distributed Microservices System",
    description: "A containerized event-driven architecture using Node.js, Express, MongoDB, RabbitMQ, and Docker Compose for independent services.",
    stack: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker", "AMQP"],
    image: "/assets/projects/microservices1.png",
    live: "",
    github: "https://github.com/Yashvanth-R/microservices",
  },
];

const Work = () => {
  return (
    <main className="page-shell">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container relative z-10 mx-auto py-10 xl:py-16"
      >
        <div className="mb-10 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <span className="theme-chip rounded-full px-4 py-2 text-sm">Selected work</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-[#fff8ec] xl:text-6xl">
              Projects built around real product problems.
            </h1>
          </div>
          <p className="max-w-xl leading-8 text-[#f8f2e8]/62">
            A mix of frontend interfaces, full-stack applications, API integrations,
            and distributed backend systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="theme-panel group overflow-hidden rounded-lg"
            >
              <div className="relative min-h-[260px] overflow-hidden bg-[#171720] sm:min-h-[340px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,122,89,0.2),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">{project.category}</span>
                  <span className="text-sm text-[#f8f2e8]/38">0{index + 1}</span>
                </div>
                <h2 className="text-2xl font-semibold text-[#fff8ec]">{project.title}</h2>
                <p className="mt-3 leading-7 text-[#f8f2e8]/58">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="theme-chip rounded-full px-3 py-1 text-sm">{item}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.live && (
                    <Link href={project.live} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-hover">
                      Live project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#fff8ec] transition-colors hover:border-accent hover:text-accent">
                    Repository <Github className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Work;
