"use client";

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
      duration: "2024 - Present",
    },
    {
      company: "IIIT-Allahabad",
      designation: "Project Intern",
      duration: "2022-2023",
    },
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description: "I have completed my B.E in AI & Data Science from Global Academy of Technology, Bangalore. Here are some of my educational qualifications:",
  items: [
    {
      institution: "Global Academy of Technology",
      degree: "B.E in AI & Data Science",
      duration: "2020 - 2024",
    },
    {
      institution: "M.E.S PU COLLEGE",
      degree: "Pre-University Course",
      duration: "2018 - 2020",
    },
    {
      institution: "Max Muller High School",
      degree: "Secondary School",
      duration: "2017 - 2018",
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
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p>
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.designation}</h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                  <p className="text-white/60">{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p>
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                  <p className="text-white/60">{item.institution}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume;