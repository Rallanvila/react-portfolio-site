import React from "react";
import Image from "next/image";
import AboutPic from "../../public/img/about-pic.svg";

export default function About() {
  return (
    <section className="diagonal-box">
      <div className="content px-8 mx-auto flex flex-col-reverse justify-between max-w-6xl md:flex-row">
        <article data-aos="fade-in">
          <h2 className="text-xl mb-2 font-semibold">About Me:</h2>
          <p className="md:max-w-lg sm:max-w-full">
            I am a dedicated software engineer with over 10 years of experience
            in business sales, seamlessly transitioning into development during
            the Covid-19 pandemic. My journey into software development was
            fueled by a desire for change and a newfound passion for coding.
            <br />
            <br />
            Balancing a demanding 50–60 hour workweek with family
            responsibilities, I dedicated late-night hours to mastering coding,
            eventually becoming a full-time developer in just seven months. My
            transition showcases my adaptability and commitment to personal
            growth.
            <br />
            <br />
            Outside of work, I am an adventure enthusiast who enjoys movies and
            cherishes quality time with my wife Kim and our two children,
            constantly seeking new experiences to create lasting memories.
          </p>
        </article>
        <div
          data-aos="fade-in"
          className=" sm:flex sm:items-center sm:mx-auto sm:mb-8 md:mr-0 md:ml-8"
        >
          <Image
            src={AboutPic}
            width={408}
            height={303}
            alt="guy sitting in mountain"
          />
        </div>
      </div>
    </section>
  );
}
