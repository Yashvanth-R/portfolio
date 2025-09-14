"use client";

import { info } from "autoprefixer";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaGithub, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress} from "react-icons/si";
import { PiFileSqlLight } from "react-icons/pi";
import { DiMongodb } from "react-icons/di";

const about = {
  title: "About Me",
  description: "I am a passionate frontend developer with a focus on creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I enjoy working with modern technologies to build efficient and user-friendly interfaces.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yashvanth R"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9591622064"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "Email",
      fieldValue: "yashvanthr064@gmail.com"
    },
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description: "I have 1+ years of experience in frontend development, working with various technologies and frameworks to deliver high-quality web applications.",
  items: [
    {
      company: "Cybrisk Tech Pvt Ltd",
      designation: "Frontend Developer",
      date: "2024 - Present",
    },
    {
      company: "IIIT-Allahabad",
      designation: "Project Intern",
      date: "2022-2023",
    },
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  items: [
    {
      institution: "Global Academy of Technology",
      degree: "B.E in Artificial Intelligence and Data Science",
      date: "2020 - 2024",
    },
    {
      institution: "M.E.S PU COLLEGE",
      degree: "Pre-University Course",
      date: "2018 - 2020",
    },
    {
      institution: "Max Muller High School",
      degree: "Secondary School",
      date: "2017 - 2018",
    },
  ]
}

const skills = {
  title: "Skills",
  description: "Here are some of the technologies and tools I have worked with:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <PiFileSqlLight />,
      name: "SQL",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <FaGithub />,
      name: "Git & GitHub",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="about" className="w-full">
                about
              </TabsContent>
              <TabsContent value="experience" className="w-full">
                experience
              </TabsContent>
              <TabsContent value="education" className="w-full">
                education
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                skills
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume;