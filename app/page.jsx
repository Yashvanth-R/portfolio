 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, DatabaseZap, Download, Layers3, Rocket, ShieldCheck } from "lucide-react";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";

const strengths = [
  { icon: <Layers3 className="h-5 w-5" />, title: "Product UI", text: "Responsive, polished interfaces." },
  { icon: <Rocket className="h-5 w-5" />, title: "Full-stack", text: "APIs, auth, data, deployment." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Reliable", text: "Maintainable production code." },
];

const stack = ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB", "Postgres", "Docker", "AWS"];

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume/Yashvanth_Resume.pdf";
    link.download = "Yashvanth_R_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="page-shell">
      <section className="container relative z-10 mx-auto grid min-h-[calc(100vh-104px)] items-center gap-12 py-10 xl:grid-cols-[0.95fr_1.05fr] xl:py-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center xl:text-left"
        >
          <span className="theme-chip inline-flex rounded-full px-4 py-2 text-sm">
            Full-stack developer based in Bangalore
          </span>
          <h1 className="mt-6 max-w-4xl text-[42px] font-semibold leading-[1.04] text-[#fff8ec] sm:text-[58px] xl:text-[72px]">
            I design and build web products that feel clear, fast, and alive.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f8f2e8]/68 sm:text-lg xl:mx-0">
            I am Yashvanth R, a full-stack developer working across React, Next.js,
            Node, APIs, databases, and cloud-ready deployments.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:justify-start">
            <Button size="lg" className="group w-full gap-3 shadow-xl shadow-accent/20 sm:w-auto" onClick={handleDownloadCV}>
              <span>Download CV</span>
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            <Button asChild variant="outline" size="lg" className="group w-full border-white/15 bg-white/[0.04] text-[#fff8ec] hover:border-accent sm:w-auto">
              <Link href="/work">
                <span>Explore Work</span>
                <ArrowUpRight className="ml-3 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex justify-center xl:justify-start">
            <Social
              containerStyles="flex gap-4"
              iconStyles="w-11 h-11 border border-white/15 bg-white/[0.05] rounded-full flex justify-center items-center text-white/75 text-base hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 xl:justify-start">
            {stack.map((item) => (
              <span key={item} className="theme-chip rounded-full px-3 py-1 text-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="absolute -right-8 top-10 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
          <div className="absolute -bottom-8 left-0 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />

          <div className="hero-showcase relative min-h-[560px]">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.035]"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            />

            <div className="theme-panel absolute left-1/2 top-1/2 h-[430px] w-[330px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[26px] p-4">
              <div className="relative h-full overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,#25212b_0%,#151721_48%,#2d1718_100%)]">
                <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-accent/25 blur-3xl" />
                <div className="absolute inset-x-6 bottom-0 h-28 rounded-t-full bg-[#07070a]" />
                <Image
                  src="/assets/photo.png"
                  alt="Yashvanth R"
                  fill
                  priority
                  sizes="330px"
                  className="object-contain object-bottom p-5"
                />
              </div>
            </div>

            <motion.div
              className="theme-panel absolute right-0 top-10 max-w-[270px] rounded-lg bg-[#fff8ec] p-5 text-primary"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm font-semibold text-accent">Currently crafting</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight">Scalable apps with memorable experiences.</h2>
            </motion.div>

            <motion.div
              className="theme-panel absolute left-0 top-28 w-[230px] rounded-lg p-5"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="mb-4 h-7 w-7 text-accent" />
              <h3 className="text-lg font-semibold text-[#fff8ec]">Clean frontends</h3>
              <p className="mt-2 text-sm leading-6 text-[#f8f2e8]/58">React, Next.js, Tailwind, and smooth UI states.</p>
            </motion.div>

            <motion.div
              className="theme-panel absolute bottom-14 right-4 w-[245px] rounded-lg p-5"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <DatabaseZap className="mb-4 h-7 w-7 text-teal-200" />
              <h3 className="text-lg font-semibold text-[#fff8ec]">Reliable backends</h3>
              <p className="mt-2 text-sm leading-6 text-[#f8f2e8]/58">APIs, auth, services, databases, and deployments.</p>
            </motion.div>

            <div className="absolute bottom-2 left-2 grid w-[300px] grid-cols-3 gap-2">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-3 backdrop-blur">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 text-accent">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold leading-tight text-[#fff8ec]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
