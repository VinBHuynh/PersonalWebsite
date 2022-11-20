import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { FaGithub, FaLinkedin, FaArrowAltCircleUp } from 'react-icons/fa';
import { SiJava, SiJavascript, SiFirebase, SiGmail } from "react-icons/si";
import ProfileImg from "../../public/profile_me.jpg";
import ZurichImg from "../../public/zurich_me.jpg";
import WPI from "../../public/WPI.png";
import C4C from "../../public/C4C_N.jpg";
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
        <Navbar />
        <div id="brief" className="snap-start">
          <Brief /> 
        </div>
        <div id="about" className="snap-start">
          <About />
        </div>
        <div id="experience" className="snap-start">
          <Experience />
        </div>
        <div id="projects" className="snap-start">
          <Projects />
        </div>   
        <footer className="sticky bottom-5 z-[1000] w-full">
        <div className="flex items-center justify-center py-8">
          <Link aria-label="Top" href="#brief">
            <FaArrowAltCircleUp aria-label="Top" className="h-10 w-10 cursor-pointer fill-gray-400 
            transition-colors duration-200 hover:fill-gray-300" />
          </Link>
        </div>
      </footer>
      </main>
    </>
  );
};

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
  <div className="flex flex-row justify-evenly">
    <InpageSection href="#about">About</InpageSection>
    <InpageSection href="#experience">Experience</InpageSection>
    <InpageSection href="#projects">Projects</InpageSection>
  </div>
</Article> 

const About = () => <Article header="About">
  {/* <SectionHeader> About </SectionHeader> */}
  <div className="flex flex-row items-center justify-center w-11/12 max-w-screen-lg gap-8">
    {/* Zurich */}
    <div className="rounded-md w-fit h-full overflow-hidden flex justify-center">
          <Image className="w-96 object-contain"
            src={ZurichImg}
            alt="zurich" />
    </div>
 
    <div className="text-left w-fit">
      <div className="text-2xl tracking-widest font-semibold text-amber-400/80">Greetings~</div>
      <div className="max-w-xl text-md">
        I&apos;m Bao Huynh, a software engineer from Vietnam. <br></br> 
        My experience orient toward sofware development with a focus on database integration and data analytics <br></br>
        I love to challenge my skills across multiple fields and thrive to achieve effective products.
      </div>
      <div className="flex flex-row m-4 justify-start">
        <LinkSection href="/Resume_bdh_2022.pdf">Resume</LinkSection>
      </div>
    </div>
  </div>
</Article>

const Experience = () => <Article header="Experience">
  {/* <SectionHeader> Experience </SectionHeader> */}
  <OpacityCard>
    <div className="absolute right-7 top-4 rounded-lg bg-accent-500 p-4 bg-sky-700 text-white">Education</div>
    <Image className="w-96 object-cover object-center xl:h-[100px] xl:w-[300px]"
      src={WPI}
      alt="edu logo"/>
    <div className="px-0 md:px-10">
        <Link target="_blank" rel="noopener noreferrer" href={"https://www.wpi.edu"} 
        className="text-2xl font-medium text-yellow-500 hover:text-amber-400/50">Worcester Polytechnic Institute</Link>
        <div className="text-xl">Master of Science in Computer Science</div>
        <div className="py-4 uppercase text-gray-300">Class of 2023</div>
    </div>
  </OpacityCard>
</Article>

const Projects = () => {
  const stackIcons = [SiJava, SiJavascript, SiFirebase];

  return <Article header="Projects">
    {/* <SectionHeader> Projects </SectionHeader> */}
    <OpacityCard>
      <div className="absolute right-7 top-4 rounded-lg bg-accent-500 p-4 bg-red-600 text-white">Internship</div>
      <Image className="w-96 p-4 object-cover object-center xl:h-[150px] xl:w-[350px]"
        src={C4C}
        alt="edu logo"/>
      <div className="px-0 md:px-10">
          <Link target="_blank" rel="noopener noreferrer" href={"https://changeforchange.io"} 
          className="text-2xl font-medium text-yellow-500 hover:text-amber-400/50">Change for Change</Link>
          <div className="text-xl">Software Engineer</div>
          <div className="my-2 flex space-x-2 justify-center">
          {stackIcons.map((Icon, index) => (
            <Icon key={index} className="h-10 w-10" />
          ))}
        </div>
      </div>
    </OpacityCard>
  </Article>
}

const Navbar = () => <div className="flex justify-center items-start w-full z-50 sticky top-4 left-0 h-8">
  <div className="w-11/12 max-w-screen-lg flex items-center gap-4">
    <Link href="#brief">
      <span className="text-lg transition-colors hover:text-amber-400/50 text-amber-400 animate-pulse">Bao Huynh</span>
    </Link>
    <div className="flex flex-row justify-center items-center">
      <NavbarItem text="Github" link="https://github.com/VinBHuynh">
        <FaGithub aria-label="Github" className="transition-colors hover:fill-gray-700" />
      </NavbarItem>
      <NavbarItem text="LinkedIn" link="https://www.linkedin.com/in/baohuynh12">
        <FaLinkedin aria-label="LinkedIn" className="transition-colors hover:fill-gray-700" />
      </NavbarItem>
      <NavbarItem text="Gmail" link="mailto:bdhuynh@wpi.edu">
        <SiGmail aria-label="Gmail" className="transition-colors hover:fill-gray-700" />
      </NavbarItem>
    </div>
    
  </div>
</div>

const NavbarItem: React.FC<{
  text: string;
  link: string;
  children: React.ReactNode
}> = ({ text, link, children }) => <Link 
  className="group h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl" 
  aria-label={text} target="_blank" rel="noopener noreferrer" href={link}>
  {children}
</Link>

const Article: React.FC<{ header?:string, children?: ReactNode }> = ({ header, children }) => <article
  className="relative w-screen flex flex-col justify-center items-center overflow-hidden text-center min-h-screen gap-2">
  <SectionHeader>{header}</SectionHeader>
  {children}
</article>

const OpacityCard: React.FC<{ children?: ReactNode }> = ({ children }) => <div
  className="relative flex flex-shrink-0 flex-col items-center space-y-7 overflow-hidden rounded-lg 
  bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px] max-w-screen-lg">
  {children}
</div>

const InpageSection: React.FC<{href: string, children?: ReactNode}>= ({
  href,
  children
}) => <Link href={href} className="rounded-full border border-[#242424] px-6 py-2 text-md uppercase tracking-widest
text-gray-400/80 transition-all hover:border-amber-400/50 hover:text-gray-700 w-[150px] hover:animate-pulse">
  {children}
</Link>

const LinkSection: React.FC<{href: string, children?: ReactNode}>= ({
  href,
  children
}) => <Link href={href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#242424] px-6 py-2 text-md tracking-widest
text-amber-400/80 transition-all hover:border-amber-400/50 hover:text-amber-500 max-w-[150px] hover:animate-pulse">
  {children}
</Link>

const SectionHeader: React.FC<{children?: ReactNode}> = ({ children }) => <div>
  <h2 className="text-2xl text-gray-400 tracking-widest z-10 uppercase">
    {children}
  </h2>
  <div className="mt-8" />
</div>

export default Home;