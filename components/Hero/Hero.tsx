import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Me from '../../public/img/Me.png';
import LinkedIn from '../../public/img/LinkedIn.png';
import Twitter from '../../public/img/Twitter.png';
import Github from '../../public/img/Github.png';

const Hero: React.FC = () => {
  return (
    <header className='container px-8 my-8 mx-auto max-w-6xl flex flex-col-reverse sm:flex-row sm:justify-between md:justify-evenly md:px-8'>
      <div data-aos='fade-right'>
        <h1 className='text-5xl font-bold mt-8 mb-4 sm:max-w-md sm:text-4xl md:text-5xl relative'>
          Hey there, Allan Vila here at your service!{'  '}
          <span className='wave'>👋🏼</span>
        </h1>
        <div className='flex justify-between items-center sm:items-start sm:flex-col sm:justify-start'>
          <h2 className='font-semibold text-xl my-4'>Software Engineer</h2>
          <div className='flex items-center'>
            <Link
              href='https://www.linkedin.com/in/allan-vila-91922b129/'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-2 hover:opacity-80 transition-opacity'>
              <div
                style={{ width: '35px', height: '35px', position: 'relative' }}>
                <Image
                  src={LinkedIn}
                  alt='LinkedIn'
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes='35px'
                  loading='lazy'
                />
              </div>
            </Link>
            <Link
              href='https://twitter.com/RAllanVila'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-2 hover:opacity-80 transition-opacity'>
              <div
                style={{ width: '35px', height: '35px', position: 'relative' }}>
                <Image
                  src={Twitter}
                  alt='Twitter'
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes='35px'
                  loading='lazy'
                />
              </div>
            </Link>
            <Link
              href='https://github.com/Rallanvila'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-2 hover:opacity-80 transition-opacity'>
              <div
                style={{ width: '35px', height: '35px', position: 'relative' }}>
                <Image
                  src={Github}
                  alt='GitHub'
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes='35px'
                  loading='lazy'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className='max-w-xs mx-auto sm:mx-0 sm:max-w-xl'
        data-aos='fade-left'>
        <div
          style={{
            position: 'relative',
            width: '478px',
            height: '541px',
            maxWidth: '100%',
          }}>
          <Image
            src={Me}
            alt='Allan Vila Photo'
            fill
            style={{ objectFit: 'contain' }}
            priority
            sizes='(max-width: 640px) 100vw, 478px'
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
