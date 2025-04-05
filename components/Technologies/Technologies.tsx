import React from 'react';
import Image from 'next/image';

interface TechnologiesProps {
  array: string[];
  heading: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ array, heading }) => {
  return (
    <div className='mb-8'>
      <h3 className='font-semibold text-xl mb-4'>{heading}</h3>
      <div className='flex flex-wrap gap-4'>
        {array.map((image, i) => (
          <div
            key={i}
            className='relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] transition-transform duration-300 hover:scale-110'>
            <Image
              src={image}
              alt={`${heading} technology icon`}
              fill
              className='object-contain'
              sizes='(max-width: 640px) 50px, 60px'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
