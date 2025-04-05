import React from 'react';
import Image from 'next/image';
import bootstrap from '../../public/img/bootstrap.png';

interface TechnologiesProps {
  array: string[];
  heading: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ array, heading }) => {
  return (
    <div className='mb-8 '>
      <h3 className='font-semibold text-xl mb-4'>{heading}</h3>
      <div className='flex'>
        {array.map((image, i) =>
          image === bootstrap ? (
            <React.Fragment key={i}>
              <div className='sm:hidden mr-4'>
                <Image src={image} width={61} height={50} alt={image} />
              </div>
              <div className='hidden sm:block mr-4'>
                <Image src={image} width={75.5} height={60} alt={image} />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment key={i}>
              <div className=' sm:hidden mr-4'>
                <Image src={image} width={50} height={50} alt={image} />
              </div>
              <div className='hidden sm:block mr-4'>
                <Image src={image} width={60} height={60} alt={image} />
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Technologies;
