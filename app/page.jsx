"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
// import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume/Yashvanth__CV 1.pdf'; 
    link.download = 'Yashvanth_R_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm<br /><span className="text-accent">Yashvanth R</span>
            </h1>
            <div className="max-w-[700px] mb-9 text-white/80 space-y-6">
              <p className="text-lg leading-relaxed">
                I am a Frontend & Full Stack Developer focused on building scalable, secure, and high-performance web applications. I design modern user experiences and implement robust frontends using React, Next.js and Tailwind CSS while integrating backend services with Node/Express and APIs for reliable production deployments.
              </p>

              <p className="text-lg leading-relaxed">
                I enjoy working across the stack — from frontend architecture and performance optimization to backend integrations, databases (MongoDB, Postgres), and cloud deployments using Docker and AWS. I build solutions that are maintainable, testable, and performant in real-world conditions.
              </p>

              <div>
                <h4 className="text-sm text-accent mb-3 uppercase tracking-wide">Key highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">●</span>
                    <span>Designed & deployed full‑stack applications with optimized frontend performance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">●</span>
                    <span>Built robust UIs with React, Next.js and Tailwind for responsive experiences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">●</span>
                    <span>Experienced in RESTful API integration, authentication, and microservices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">●</span>
                    <span>Strong foundation in databases, Git workflows, and containerization (Docker).</span>
                  </li>
                </ul>
              </div>

              {/* <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#111214] text-sm rounded-full border border-white/6">React</span>
                <span className="px-3 py-1 bg-[#111214] text-sm rounded-full border border-white/6">Next.js</span>
                <span className="px-3 py-1 bg-[#111214] text-sm rounded-full border border-white/6">Tailwind CSS</span>
                <span className="px-3 py-1 bg-[#111214] text-sm rounded-full border border-white/6">Node.js</span>
                <span className="px-3 py-1 bg-[#111214] text-sm rounded-full border border-white/6">Express</span>
                <span className="px-3 py-1 bg-[#111214] text-sm rounded-full border border-white/6">MongoDB</span>
                <span className="px-3 py-1 bg-[#111214] text-sm rounded-full border border-white/6">Docker</span>
                <span className="px-3 py-1 bg-[#111214] text-sm rounded-full border border-white/6">AWS</span>
              </div> */}
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default Home;