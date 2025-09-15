"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Project 1",
    category: "Frontend and Backend",
    title: "Notes taking app",
    description: "A beautiful, modern note-taking application built with Next.js and FastAPI. Create, organize, and manage your personal notes with an intuitive interface and powerful search functionality.",
    stack: [{name: "Next.js"}, {name: "TypeScript"}, {name: "Zustand"}, {name: "Tailwind CSS"}, {name: "Axios"}, {name: "FastAPI"}, {name:"MongoDB"}, {name:"JWT Authentication"}, {name:"Pydantic"}, {name:"Uvicorn"}],
    image: "",
    live:"",
    github:"",
  }
]

const Work = () => {
  return (
    <div>work page</div>
  )
}

export default Work;