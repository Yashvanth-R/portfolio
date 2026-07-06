"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, MapPin, Mail, Phone, Sparkles } from "lucide-react";
import { FaAws, FaCss3, FaDocker, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { PiFileSqlLight } from "react-icons/pi";
import { SiExpress, SiNestjs, SiNextdotjs, SiRabbitmq, SiShadcnui, SiTailwindcss, SiTypescript, SiPrometheus, SiGrafana, SiSupabase, SiFirebase } from "react-icons/si";

const profile = [
  { icon: <Phone className="h-4 w-4" />, label: "Phone", value: "(+91) 9591622064" },
  { icon: <Mail className="h-4 w-4" />, label: "Email", value: "yashvanthr064@gmail.com" },
  { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Bangalore, India" },
  { icon: <Sparkles className="h-4 w-4" />, label: "Experience", value: "1.8+ Years" },
];

const experience = [
  { company: "Cybrisk Tech Pvt Ltd", role: "Full Stack Developer", duration: "2024 - Present" },
  { company: "IIIT-Allahabad", role: "Project Intern", duration: "2022 - 2023" },
];

const education = [
  { institution: "Global Academy of Technology", degree: "B.E in AI & Data Science", duration: "2020 - 2024" },
  { institution: "M.E.S PU College", degree: "Pre-University Course", duration: "2018 - 2020" },
  { institution: "Max Muller High School", degree: "Secondary School", duration: "2017 - 2018" },
];

const skills = [
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3 },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Shadcn UI", Icon: SiShadcnui },
  { name: "JavaScript", Icon: FaJs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: FaPython },
  { name: "SQL", Icon: PiFileSqlLight },
  { name: "MongoDB", Icon: DiMongodb },
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express", Icon: SiExpress },
  { name: "RabbitMQ", Icon: SiRabbitmq },
  { name: "GitHub", Icon: FaGithub },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Docker", Icon: FaDocker },
  { name: "AWS", Icon: FaAws },
  { name: "Prometheus", Icon: SiPrometheus },
  { name: "Grafana", Icons: SiGrafana }
];

const TimelineCard = ({ item, type }) => (
  <div className="theme-panel rounded-lg p-5">
    <div className="mb-4 flex items-center justify-between gap-4">
      <span className="rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">{item.duration}</span>
      <span className="text-[#f8f2e8]/40">{type}</span>
    </div>
    <h3 className="text-xl font-semibold leading-snug text-[#fff8ec]">{item.role || item.degree}</h3>
    <p className="mt-3 text-[#f8f2e8]/58">{item.company || item.institution}</p>
  </div>
);

const Experience = () => {
  return (
    <main className="page-shell">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container relative z-10 mx-auto py-10 xl:py-16"
      >
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
          <aside className="theme-panel h-max rounded-lg p-6 xl:sticky xl:top-8">
            <span className="theme-chip rounded-full px-4 py-2 text-sm">About me</span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#fff8ec] xl:text-5xl">
              Developer with a product-first full-stack toolkit.
            </h1>
            <p className="mt-5 leading-8 text-[#f8f2e8]/64">
              I build dynamic web applications from interface to backend, with a focus on
              clean user experiences, practical architecture, and maintainable delivery.
            </p>
            <div className="mt-7 grid gap-3">
              {profile.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent">{item.icon}</div>
                  <div>
                    <p className="text-sm text-[#f8f2e8]/45">{item.label}</p>
                    <p className="font-medium text-[#fff8ec]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <section>
              <div className="mb-5 flex items-center gap-3">
                <BriefcaseBusiness className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-semibold text-[#fff8ec]">Experience</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {experience.map((item) => <TimelineCard key={item.company} item={item} type="Work" />)}
              </div>
            </section>

            <section>
              <div className="mb-5 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-semibold text-[#fff8ec]">Education</h2>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {education.map((item) => <TimelineCard key={item.institution} item={item} type="Study" />)}
              </div>
            </section>

            <section className="theme-panel rounded-lg p-6">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-sm font-semibold text-accent">Toolkit</span>
                  <h2 className="text-3xl font-semibold text-[#fff8ec]">Skills I work with</h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[#f8f2e8]/55">
                  A practical stack for frontend craft, backend services, databases, messaging, and deployment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {skills.map(({ name, Icon }) => (
                  <div key={name} className="group rounded-lg border border-white/10 bg-white/[0.045] p-4 text-center transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-accent/10">
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-white/[0.06] text-2xl text-[#fff8ec] transition-colors group-hover:text-accent">
                      <Icon />
                    </div>
                    <p className="text-sm text-[#f8f2e8]/70">{name}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Experience;
