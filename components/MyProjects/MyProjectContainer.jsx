import React, { useState } from 'react';
import Image from 'next/image';
import MyProjectModal from './MyProjectModal';

export default function MyProjectContainer({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className='w-full h-[250px] relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.025]'
        onClick={() => setShowModal(true)}>
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transform translate-y-0 group-hover:translate-y-[-140px] transition-all duration-300 z-10'>
          <h5 className='text-xl text-white font-bold mb-2'>{project.title}</h5>
          <span className='text-white text-sm'>{project.type}</span>
        </div>
      </div>
      {showModal && (
        <MyProjectModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
