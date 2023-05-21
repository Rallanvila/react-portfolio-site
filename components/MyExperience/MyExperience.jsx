import React, { useState } from 'react';
import Experience from '../../public/img/experience.svg';
import Image from 'next/image';
import { avbExperience, nsiExperience } from '../../data/jobs';
import { MyTimeline } from './Timeline';

export default function MyExperience() {
	const [hidden, setHidden] = useState(false);

	const handleHidden = (hidden) => {
		setHidden(!hidden);
	};

	return (
		<>
			<section
				id='experience'
				className='max-w-6xl mt-8 mb-8 px-8 mx-auto md:flex md:mt-32 relative'>
				<div
					className='flex flex-col-reverse md:flex-col md:w-1/2 '
					data-aos='fade-right'>
					<h2 className='text-xl font-bold mb-12'>My Experience:</h2>
					<div className='mb-8 flex justify-center md:justify-start md:mb-0'>
						<Image
							src={Experience}
							width={452}
							height={425}
							alt='guy sitting on computer'
						/>
					</div>
				</div>
				<Job hidden={hidden} jobName={avbExperience} />
				<Job hidden={!hidden} jobName={nsiExperience} />
				<MyTimeline className='absolute top-1/2 right-0 transform -translate-y-1/2' />
			</section>
		</>
	);
}

const Job = (props) => {
	const { hidden, jobName } = props;
	const { image, alt, whatWeDo, whatIDo, whatIDo2, duration } = jobName;

	if (hidden) return null;

	return (
		<article className='md:w-1/2 md:ml-12' data-aos='fade-left'>
			<div className='max-w-xs mb-8'>
				<Image src={image} width={371} height={79} alt={alt} />
			</div>

			<h3 className='text-lg font-semibold mb-2'>What we do:</h3>
			<p className='mb-8'>{whatWeDo}</p>
			<h3 className='text-lg font-semibold mb-2'>What I do:</h3>
			<p className='mb-5'>{whatIDo}</p>
			<p>{whatIDo2}</p>
		</article>
	);
};
