import Image from 'next/image';
import React from 'react';
import RAVLogo from '../../public/img/MyLogo.png';
import Links from './Links';

const Navbar: React.FC = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-4 max-w-6xl mx-auto flex justify-between items-center'>
      <div className='mr-5 sm:mr-8 transition-transform duration-300 hover:scale-105'>
        <div className='relative w-[187px] h-[87px] max-w-full'>
          <Image
            src={RAVLogo}
            alt='RallanVila Logo'
            fill
            className='object-contain'
            priority
            sizes='(max-width: 640px) 100vw, 187px'
          />
        </div>
      </div>
      <Links />
    </nav>
  );
};

export default Navbar;
