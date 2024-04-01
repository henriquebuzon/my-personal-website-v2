import Astronaut from "@/public/Astronaut";
import EmphasisPersonalProjects from "@/public/EmphasisPersonalProjects";
import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center space-y-44 pb-36 lg:pb-56 px-3 lg:px-10"
      id="about"
    >
      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row-reverse justify-between items-start space-y-8 lg:space-y-0 gap-2 md:gap-20 lg:gap-44">
        <Astronaut className="w-full lg:w-1/4 px-5 max-w-xs" />
        <div className="w-full lg:w-3/4">
          <h2 className="font-extrabold text-3xl lg:text-5xl relative mb-5 lg:mb-10 w-fit">
            <EmphasisPersonalProjects className="absolute -top-5 -right-28 w-12 rotate-180 fill-green-500 hidden lg:block" />
            <span className="text-pink">About</span> me
          </h2>
          <div className="flex flex-col space-y-4 text-[#3c1a3e] font-medium">
            <p>
              Highly experienced software engineer with a strong emphasis on
              front-end development using React, Typescript and Next.JS.
            </p>

            <p>
              My journey started back in 2015, as a freelancer. Attention to
              detail and sharp communication skills enabled me to build
              long-term relationships with clients from diverse backgrounds and
              cultures.
            </p>

            <p>
              Fast forward to 2020, I made the shift to Hi-Tec Inovações, where
              I&apos;ve had my first experience working on a team as a full-time
              employee and discovered my passion for working collaboratively.
            </p>

            <p>
              After that, I've had the opportunity to work several different
              teams and continued to improve my skills on a day-to-day basis.
            </p>

            <p>
              When I&apos;m not immersed in lines of code, I enjoy exploring the
              mysteries of the cosmos through astronomy documentaries and books.
            </p>

            <p>I&apos;m driven by curiosity.</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
