import React from 'react';
import Link from 'next/link';
import { FaBlog, FaBriefcase, FaCode, FaFileAlt } from 'react-icons/fa';

export default function Links() {
  return (
    <ul className='flex items-center space-x-4'>
      <li>
        <Link
          href='/blog'
          className='text-gray-800 hover:text-blue-500 transition-colors'>
          <FaBlog className='inline-block mr-1' />
          Blog
        </Link>
      </li>
      <li>
        <Link
          href='/experience'
          className='text-gray-800 hover:text-blue-500 transition-colors'>
          <FaBriefcase className='inline-block mr-1' />
          Experience
        </Link>
      </li>
      <li>
        <Link
          href='/projects'
          className='text-gray-800 hover:text-blue-500 transition-colors'>
          <FaCode className='inline-block mr-1' />
          Projects
        </Link>
      </li>
      <li className='hidden md:block'>
        <Link
          href='/resume.pdf'
          className='inline-flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors'>
          <FaFileAlt className='mr-2' />
          Resume
        </Link>
      </li>
    </ul>
  );
}
