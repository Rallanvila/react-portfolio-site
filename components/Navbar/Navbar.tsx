import Image from 'next/image';
import React from 'react';
import RAVLogo from '../../public/img/MyLogo.png';
import Links from './Links';

const Navbar: React.FC = () => {
  return (
    <nav className='px-4 py-4 max-w-6xl mx-auto flex justify-between items-center '>
      <div className='mr-5 sm:mr-8'>
        <div style={{ position: 'relative', width: '187px', height: '87px' }}>
          <Image
            src={RAVLogo}
            alt='RallanVila Logo'
            fill
            style={{ objectFit: 'contain' }}
            priority={true}
            sizes='187px'
          />
        </div>
      </div>
      <Links />
    </nav>
  );
};

export default Navbar;
