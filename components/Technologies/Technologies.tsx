import React from 'react';
import Image from 'next/image';
import bootstrap from '../../public/img/bootstrap.png';

interface TechnologiesProps {
  array: string[];
  heading: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ array, heading }) => {
  return (
    <div className='mb-8'>
      <h3 className='font-semibold text-xl mb-4'>{heading}</h3>
      <div className='flex'>
        {array.map((image, i) =>
          image === bootstrap ? (
            <React.Fragment key={i}>
              <div className='sm:hidden mr-4'>
                <div
                  style={{
                    position: 'relative',
                    width: '61px',
                    height: '50px',
                  }}>
                  <Image
                    src={image}
                    alt={`${heading} technology icon`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes='61px'
                  />
                </div>
              </div>
              <div className='hidden sm:block mr-4'>
                <div
                  style={{
                    position: 'relative',
                    width: '75.5px',
                    height: '60px',
                  }}>
                  <Image
                    src={image}
                    alt={`${heading} technology icon`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes='75.5px'
                  />
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment key={i}>
              <div className='sm:hidden mr-4'>
                <div
                  style={{
                    position: 'relative',
                    width: '50px',
                    height: '50px',
                  }}>
                  <Image
                    src={image}
                    alt={`${heading} technology icon`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes='50px'
                  />
                </div>
              </div>
              <div className='hidden sm:block mr-4'>
                <div
                  style={{
                    position: 'relative',
                    width: '60px',
                    height: '60px',
                  }}>
                  <Image
                    src={image}
                    alt={`${heading} technology icon`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes='60px'
                  />
                </div>
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Technologies;
