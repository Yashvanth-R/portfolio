import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm<br /><span className="text-accent">Yashvanth R</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a frontend developer with experience in designing and developing scalable web solutions, ensuring secure and efficient data handling through robust backend integrations. I have collaborated with cross-functional teams. On the frontend, I have led architecture design using React.js and Next.js to deliver high-performance applications. With hands-on expertise in performance tuning and production debugging, I ensure seamless functionality and reliability of complex systems.
            </p>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;