import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function MyProjectModal({ project, onClose }) {
  const { title, image, description, type, link, github, lessons } = project;

  const renderProjectType = () => {
    switch (type) {
      case 'landing':
        return 'Landing Page';
      case 'javascript':
        return 'JavaScript Project';
      case 'react':
        return 'React Project';
      default:
        return type;
    }
  };

  const renderButtonLabel = () => {
    switch (type) {
      case 'landing':
        return 'View Site';
      case 'javascript':
      case 'react':
        return 'View Project';
      default:
        return 'View';
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black/50' onClick={onClose} />
      <div className='relative w-[80vw] max-w-3xl min-w-[350px] max-h-[95vh] bg-gray-100/85 backdrop-blur-sm rounded-lg overflow-auto'>
        <button
          className='absolute top-4 right-6 text-3xl text-gray-800 hover:text-black transition-colors'
          onClick={onClose}>
          ×
        </button>
        <div className='p-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>{title}</h2>
          <h3 className='text-lg text-gray-800 mb-4'>{renderProjectType()}</h3>
          <div className='relative w-full aspect-video mb-6'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover rounded-lg'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <div className='bg-white/80 p-6 rounded-lg mb-6'>
            <p className='text-gray-800 mb-4'>{description}</p>
            {lessons && (
              <div className='mb-4'>
                <h4 className='text-lg font-semibold text-gray-800 mb-2'>
                  Key Learnings:
                </h4>
                <ul className='list-disc list-inside text-gray-800'>
                  {lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className='flex flex-wrap justify-start gap-4'>
            {github && (
              <a
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors'>
                <FaGithub className='mr-2' />
                View Code
              </a>
            )}
            {link && (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors'>
                <FaExternalLinkAlt className='mr-2' />
                {renderButtonLabel()}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
