import React, { useState } from 'react';
import Experience from '../../public/img/experience.svg';
import Image from 'next/image';
import { avbExperience, nsiExperience } from '../../data/jobs';
import avbCon from '../../public/img/avb-con.png';
import nsiCon from '../../public/img/nsi-con.png';

export default function MyExperience() {
	const [avb, setAvb] = useState(true);
	const [nsi, setNsi] = useState(false);

	const company = {
		nsi,
		avb,
	};

	const handleShow = (e) => {
		if (e.target.innerText === '2022 - Present') {
			setAvb(true);
			setNsi(false);
		} else if (e.target.innerText === '2021 - 2022') {
			setNsi(true);
			setAvb(false);
		}
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
					<Image
						src={nsiCon}
						width={150}
						height={100}
						alt='guy sitting on computer'
					/>
					<Image
						src={avbCon}
						width={250}
						height={120}
						alt='guy sitting on computer'
					/>
				</div>
				<Job company={company} />
			</section>
		</>
	);
}

const Job = (props) => {
	const { company } = props;
	const { avb, nsi } = company;

	if (avb) {
		const { image, alt, whatWeDo, whatIDo, whatIDo2 } = avbExperience;
		console.log(whatWeDo.split(' ').length);
		return (
			<article className='md:w-1/2 md:ml-12 mr-4' data-aos='fade-left'>
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
	}
	if (nsi) {
		const { image, alt, whatWeDo, whatIDo, whatIDo2 } = nsiExperience;
		return (
			<article className='md:w-1/2 md:ml-12 mr-4' data-aos='fade-left'>
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
	} else {
		return null;
	}
};
