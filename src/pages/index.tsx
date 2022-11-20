import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileImg from "../../public/profile_me.jpg";
import ZurichImg from "../../public/zurich_me.jpg";
import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Bao Huynh</title>
        <meta name="description" content="A personal website of Bao Huynh" />
        <link rel="icon" href="/profile_me.jpg" />
      </Head>
      <main className="flex flex-col h-screen overflow-x-hidden overflow-y-scroll
        snap-y snap-mandatory antialiased text-gray-400 bg-[rgb(36,36,36)]  
        scrollbar-thin scrollbar-track-[rgb(36,36,36)] scrollbar-thumb-amber-400/50">
        {/* <Navbar /> */}
        <section id="brief" className="snap-start">
          <Brief /> 
        </section>
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="experience" className="snap-start">
          <Experience />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
      </main>
    </>
  );
};

const Article: React.FC<{ children?: ReactNode }> = ({ children }) => <article
  className="relative w-screen flex flex-col justify-center items-center overflow-hidden text-center min-h-screen gap-2">
  {children}
</article>

const InpageSection: React.FC<{href: string, children?: ReactNode}>= ({
  href,
  children
}) => <Link href={href} className="rounded-full border border-[#242424] px-6 py-2 text-md uppercase tracking-widest 
text-gray-400/80 transition-all hover:border-amber-400/50 hover:text-gray-700 w-[150px] hover:animate-pulse">
  {children}
</Link>

const SectionHeader: React.FC<{ text?: string, children?: ReactNode }> = ({ text, children }) => <div>
  <h1 className="text-2xl text-gray-400 tracking-widest z-10 uppercase">
    {text}
    {children}
  </h1>
  <div className="mt-8" />
</div>

const Brief = () => <Article>
  <div className="flex flex-col items-center justify-center">
    {/* Avatar */}
    <div className="rounded-full w-64 h-64 overflow-hidden flex justify-center">
        <div className="flex justify-center items-center">
          <Image
            src={ProfileImg}
            alt="avatar" />
        </div>
    </div>
  </div>

  {/* Brief */}
  <div className="text-yellow-500 text-4xl semi-bold z-10">
    Bao Huynh
  </div>
  <div className="text-2xl tracking-widest z-10 uppercase">
    Software Engineer
  </div>
  <div className="flex flex-row gap-4 justify-evenly">
    <InpageSection href="#about">About</InpageSection>
    <InpageSection href="#experience">Experience</InpageSection>
    <InpageSection href="#projects">Projects</InpageSection>
  </div>
</Article> 

const About = () => <Article>
  <SectionHeader> About </SectionHeader>
  <div className="flex flex-row items-center justify-center w-11/12 max-w-screen-lg gap-8">
    {/* Zurich */}
    <div className="rounded-md w-fit h-fit overflow-hidden flex justify-center">
          <Image className="w-96 object-contain"
            src={ZurichImg}
            alt="zurich" />
    </div>
 
    <div className="text-left w-fit">
      <div className="text-3xl tracking-widest font-semibold text-amber-400/80"> Greetings~ </div>
      <div className="max-w-xl text-lg">
        I am a software engineer from Vietnam. <br></br> 
        I graduated with a Master degree in Computer Science at Worcester Polytechnic Institute. <br></br>
        My experience orient toward sofware development with a focus on database integration and data analytics <br></br>
        I love to challenge my skills across multiple fields and thrive to achieve effective products.
      </div>
    </div>


  </div>
  
</Article>

const Experience = () => <Article>
  <SectionHeader> Experience </SectionHeader>
</Article>

const Projects = () => <Article>
  <SectionHeader> Projects </SectionHeader>
</Article>

export default Home;