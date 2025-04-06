import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import Me from '@/public/img/Me.png';
import LinkedIn from '@/public/img/LinkedIn.png';
import Twitter from '@/public/img/Twitter.png';
import Github from '@/public/img/Github.png';

const Hero: FC = () => {
  return (
    <header className='container mx-auto max-w-6xl px-8 my-12 flex flex-col-reverse sm:flex-row sm:justify-between md:justify-between md:px-8'>
      <div data-aos='fade-right' className='sm:max-w-md'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6 relative text-gray-800'>
          Hey there, Allan Vila here at your service!{' '}
          <span className='inline-block animate-bounce'>👋🏼</span>
        </h1>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8'>
          <h2 className='text-xl font-semibold mb-4 sm:mb-0 text-blue-600'>
            Software Engineer
          </h2>
          <div className='flex items-center space-x-4'>
            <Link
              href='https://www.linkedin.com/in/allan-vila-91922b129/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform duration-300 hover:scale-110'>
              <div className='relative w-[35px] h-[35px]'>
                <Image
                  src={LinkedIn}
                  alt='LinkedIn'
                  fill
                  className='object-contain'
                  sizes='35px'
                  loading='lazy'
                />
              </div>
            </Link>
            <Link
              href='https://twitter.com/RAllanVila'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform duration-300 hover:scale-110'>
              <div className='relative w-[35px] h-[35px]'>
                <Image
                  src={Twitter}
                  alt='Twitter'
                  fill
                  className='object-contain'
                  sizes='35px'
                  loading='lazy'
                />
              </div>
            </Link>
            <Link
              href='https://github.com/Rallanvila'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform duration-300 hover:scale-110'>
              <div className='relative w-[35px] h-[35px]'>
                <Image
                  src={Github}
                  alt='GitHub'
                  fill
                  className='object-contain'
                  sizes='35px'
                  loading='lazy'
                />
              </div>
            </Link>
          </div>
        </div>
        <p className='text-lg text-gray-700 mb-6'>
          I create dynamic web interfaces using React.js and collaborate with
          designers and backend developers to build high-quality, user-friendly
          applications.
        </p>
      </div>
      <div
        className='max-w-xs mx-auto sm:mx-0 sm:max-w-xl mb-8 sm:mb-0'
        data-aos='fade-left'>
        <div className='relative w-[478px] h-[541px] max-w-full transition-transform duration-500 hover:scale-105'>
          <Image
            src={Me}
            alt='Allan Vila Photo'
            fill
            className='object-contain'
            priority
            sizes='(max-width: 640px) 100vw, 478px'
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
