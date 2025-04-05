import React from 'react';
import Image from 'next/image';
import experience, { Job } from '../../data/jobs';

const MyExperience: React.FC = () => {
  return (
    <section
      id='experience'
      data-aos='fade-in'
      className='max-w-6xl mx-auto mb-12 px-8'>
      <h2 className='text-xl leading-7 font-bold mb-8'>My Experience:</h2>
      {experience.map((job: Job) => {
        const { image, alt, whatWeDo, whatIDo, whatIDo2, jobName, time } = job;

        return (
          <article key={jobName} className='my-4 first-of-type:sm:mb-12'>
            <div
              style={{
                position: 'relative',
                width: '247px',
                height: '52px',
                maxWidth: '100%',
              }}>
              <Image
                src={image}
                alt={alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes='(max-width: 640px) 100vw, 247px'
              />
            </div>
            <h2 className='mb-2'>{time}</h2>
            <div className='max-w-6xl flex flex-col md:flex-row'>
              {/* What we do */}
              <section className='mr-8 basis-1/3'>
                <h2 className='text-lg leading-7 font-semibold mb-2'>
                  What we do:
                </h2>
                <p className='mb-8'>{whatWeDo}</p>
              </section>
              {/* What I do */}
              <section className='mr-8 basis-2/3'>
                <h2 className='text-lg leading-7 font-semibold mb-2'>
                  What I do:
                </h2>
                <p className='mb-5'>{whatIDo}</p>
                <p>{whatIDo2}</p>
              </section>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default MyExperience;
