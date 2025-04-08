import { type FC } from 'react';
import Image from 'next/image';
import experience, { Job } from '@/data/jobs';

const MyExperience: FC = () => {
  return (
    <section id='experience' className='max-w-6xl mx-auto mb-16 px-8'>
      <h2 className='text-2xl font-bold mb-8 text-gray-800'>My Experience:</h2>
      <div className='space-y-12'>
        {experience.map((job: Job) => {
          const { image, alt, whatWeDo, whatIDo, whatIDo2, jobName, time } =
            job;

          return (
            <article
              key={jobName}
              className='bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
                <div className='relative w-[247px] h-[52px] max-w-full mb-4 md:mb-0'>
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className='object-contain'
                    sizes='(max-width: 640px) 100vw, 247px'
                  />
                </div>
                <span className='text-lg font-semibold text-blue-600'>
                  {time}
                </span>
              </div>

              <div className='grid md:grid-cols-3 gap-8'>
                {/* What we do */}
                <section className='md:col-span-1'>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    What we do:
                  </h3>
                  <p className='text-gray-700'>{whatWeDo}</p>
                </section>

                {/* What I do */}
                <section className='md:col-span-2'>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    What I do:
                  </h3>
                  <p className='text-gray-700 mb-3'>{whatIDo}</p>
                  <p className='text-gray-700'>{whatIDo2}</p>
                </section>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MyExperience;
