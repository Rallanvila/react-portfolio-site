import Image from 'next/image';
import { type FC } from 'react';
import RAVLogo from '@/public/img/MyLogo.png';
import Links from '@/components/Navbar/Links';

const Navbar: FC = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md px-6 py-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='mr-8 transition-transform duration-300 hover:scale-105'>
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
      </div>
    </nav>
  );
};

export default Navbar;
