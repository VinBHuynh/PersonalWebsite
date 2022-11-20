import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileImg from "../../public/profile_me.jpg";
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
      <main className="flex flex-col min-h-screen overflow-x-hidden overflow-y-scroll 
        snap-y snap-proximity antialiased bg-black/70 text-gray-400 bg-[rgb(36,36,36)]">
        {/* <Navbar /> */}
        <section id="brief" className="snap-start">
          <Brief /> 
        </section>
        <section id="about" className="snap-start">
          {/* <About /> */}
        </section>
        <section id="experience" className="snap-start">
          {/* <Experience /> */}
        </section>
        <section id="projects" className="snap-start">
          {/* <Projects /> */}
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
text-gray-500 transition-all hover:border-amber-400/50 hover:text-gray-700 w-[150px] hover:animate-pulse">
{/* 
// "p-2 text-lg text-gray-500/50 rounded-3xl border border-amber-400/50 
// hover:text-gray-500 hover:border-amber-400 transition-colors hover:animate-pulse"> */}
  {children}
</Link>

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

export default Home;