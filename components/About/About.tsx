import { type FC } from 'react';
import Image from 'next/image';
import AboutPic from '@/public/img/about-pic.svg';

const About: FC = () => {
  return (
    <section className='diagonal-box bg-gradient-to-br from-blue-50 to-white py-16'>
      <div className='content px-8 mx-auto flex flex-col-reverse justify-between max-w-6xl md:flex-row md:items-center'>
        <article
          data-aos='fade-in'
          className='bg-white rounded-lg shadow-md p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>About Me:</h2>
          <div className='space-y-4 text-gray-700'>
            <p>
              I am a dedicated software engineer with over 10 years of
              experience in business sales, seamlessly transitioning into
              development during the Covid-19 pandemic. My journey into software
              development was fueled by a desire for change and a newfound
              passion for coding.
            </p>
            <p>
              Balancing a demanding 50–60 hour workweek with family
              responsibilities, I dedicated late-night hours to mastering
              coding, eventually becoming a full-time developer in just seven
              months. My transition showcases my adaptability and commitment to
              personal growth.
            </p>
            <p>
              Outside of work, I am an adventure enthusiast who enjoys movies
              and cherishes quality time with my wife Kim and our two children,
              constantly seeking new experiences to create lasting memories.
            </p>
          </div>
        </article>
        <div
          data-aos='fade-in'
          className='sm:flex sm:items-center sm:mx-auto sm:mb-8 md:mr-0 md:ml-8 md:mb-0'>
          <div className='relative w-[408px] h-[303px] max-w-full transition-transform duration-300 hover:scale-105'>
            <Image
              src={AboutPic}
              alt='guy sitting in mountain'
              fill
              priority
              sizes='(max-width: 640px) 100vw, 408px'
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
