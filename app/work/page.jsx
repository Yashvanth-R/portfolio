"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend and Backend",
    title: "Notes taking app",
    description: "A beautiful, modern note-taking application built with Next.js and FastAPI. Create, organize, and manage your personal notes with an intuitive interface and powerful search functionality.",
    stack: [{name: "Next.js"}, {name: "TypeScript"}, {name: "Zustand"}, {name: "Tailwind CSS"}, {name: "Axios"}, {name: "FastAPI"}, {name:"MongoDB"}, {name:"JWT Authentication"}, {name:"Pydantic"}, {name:"Uvicorn"}],
    image: "/assets/projects/notes2.png",
    live:"",
    github:"https://github.com/Yashvanth-R/notes-app",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Dynamic Form Builder",
    description: "A dynamic form builder application with advanced features including 7 field types, real-time preview, drag & drop functionality, and comprehensive validation system. Build and manage forms with an intuitive interface, derived fields calculation, and persistent storage.",
    stack: [
      {name: "React"}, 
      {name: "TypeScript"}, 
      {name: "Material-UI"}, 
      {name: "Redux Toolkit"}, 
      {name: "React Router"},
      {name: "react-beautiful-dnd"},
      {name: "Local Storage"}
    ],
    image: "/assets/projects/form builder.png",
    live:"https://form-builder-r8lpnchkp-yashvanth-rs-projects.vercel.app/create",
    github:"https://github.com/Yashvanth-R/form-builder",
  },
  {
    num: "03",
    category: "Full Stack MERN",
    title: "Products Store",
    description: "A full-featured Products Store demo built with the MERN stack. Features include RESTful API integration, product listing and detail views, reusable Chakra UI components, responsive design, and robust error handling. The application is deployment-ready and easily extensible for additional features.",
    stack: [
      {name: "MongoDB"}, 
      {name: "Express.js"}, 
      {name: "React.js"}, 
      {name: "Node.js"}, 
      {name: "Chakra UI"}, 
      {name: "RESTful API"},
      {name: "Responsive Design"}
    ],
    image: "/assets/projects/product store.png",
    live:"",
    github:"https://github.com/Yashvanth-R/Product-Store",
  },
  {
    num: "04",
    category: "Microservices",
    title: "Distributed Microservices System",
    description: "A fully containerized microservices architecture built using Node.js, Express, MongoDB, and RabbitMQ. The system demonstrates event-driven communication between independently deployable services, featuring user management, task management, and asynchronous notification processing. Includes REST APIs, database persistence, message queues, and Docker-based orchestration.",
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "RabbitMQ" },
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "AMQP (amqplib)" },
      { name: "RESTful API" },
      { name: "Event-Driven Architecture" }
    ],
    image: "/assets/projects/microservices.png",
    live:"",
    github:"https://github.com/Yashvanth-R/microservices",
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
      initial={{ opacity:0 }}
      animate={{ 
        opacity:1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, 
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-outline">
              {project.num}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] font-bold leading-none text-white/60 capitalize">
                {project.category} project
              </h2>
              <h3 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h3>
            </div>
            <p className="text-white/60">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((item, index)=> {
                return ( 
                  <li key={index} className="bg-[#2e2e33] px-4 py-2 rounded-full text-sm text-white/70">
                    {item.name}
                  </li>
                )
              })}
            </ul>
            <div className="boredr border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[78px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[78px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
          </div>
          </div>
          <div className="w-full xl:w-[50%] xl:pl-10">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="h-[460px] xl:h-[520px]" 
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return ( 
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-[#181818]">
                    <div className="absolute inset-0 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain"
                        alt={project.title}
                        priority
                        sizes="(max-width: 768px) 200vw, 50vw"
                        />
                    </div>
                  </div>
                </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] w-[44px] h-[44px] flex jsutify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
