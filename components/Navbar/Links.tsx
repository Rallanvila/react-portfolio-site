import React, { useState } from 'react';
import { IoMdPaper } from 'react-icons/io';
import { BiBuildings } from 'react-icons/bi';
import { VscMultipleWindows } from 'react-icons/vsc';
import Link from 'next/link';
import styles from './Links.module.scss';

const Links: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <ul className='flex justify-between items-center'>
        <li className='ml-3 sm:mx-3 flex items-center'>
          <Link
            href='https://blog.rallanvila.com'
            target='_blank'
            rel='noreferrer'
            className='pr-2'>
            Blog
          </Link>
          <Link
            href='https://blog.rallanvila.com'
            target='_blank'
            rel='noreferrer'>
            <div className='hidden md:block'>
              <IoMdPaper className='ml-2' />
            </div>
          </Link>
        </li>
        <li className='ml-3 sm:mx-3 flex items-center '>
          <Link href='#experience'>Experience</Link>
          <Link href='#experience'>
            <div className='hidden md:block'>
              <BiBuildings className='ml-2' />
            </div>
          </Link>
        </li>
        <li className='ml-3 sm:mx-3 flex items-center'>
          <Link href='#my-projects'>Projects</Link>
          <Link href='#my-projects'>
            <div className='hidden md:block'>
              <VscMultipleWindows className='ml-2' />
            </div>
          </Link>
        </li>
        <li className={styles.button}>
          <Link href='/Resume.pdf' target='_blank' rel='noreferrer'>
            Resume
          </Link>
        </li>
        <li className='ml-3 sm:mx-3 md:hidden'>
          <Link href='/Resume.pdf' target='_blank' rel='noreferrer'>
            Resume
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Links;
