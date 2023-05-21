import React from 'react';
import Experience from '../../public/img/experience.svg';
import nsilogo from '../../public/img/nsi-logo.png';
import avbLogo from '../../public/img/avb-logo.png';
import Image from 'next/image';

const nsiExperience = {
	image: nsilogo,
	alt: 'nsi logo',
	whatWeDo:
		'Naval Systems supports the Department of Defense. I work on secret-level clearance projects that help with our ongoing national-security well-being. My work is currently active with support NavAir, US Air Force, Missile Defense Agency, DASA DE&C, and more.',
	whatIDo:
		"I'm the Front-End Engineer and design expert for the team. I build, maintain and improve various dashboards on several projects that track and update NavAir and the Air Force with crucial data regarding their defensive operations.",
	whatIdo2:
		'I also help design and develop client rebranding efforts. Attendmeetings with stakeholders to understand the mission, vision, and keyperformance indicators the client is trying to improve to create aproduct that will lead to higher conversion levels enabling the salesteams.',
};
const avbExperience = {
	image: avbLogo,
	alt: 'nsi logo',
	whatWeDo:
		'Naval Systems supports the Department of Defense. I work on secret-level clearance projects that help with our ongoing national-security well-being. My work is currently active with support NavAir, US Air Force, Missile Defense Agency, DASA DE&C, and more.',
	whatIDo:
		"I'm the Front-End Engineer and design expert for the team. I build, maintain and improve various dashboards on several projects that track and update NavAir and the Air Force with crucial data regarding their defensive operations.",
	whatIdo2:
		'I also help design and develop client rebranding efforts. Attendmeetings with stakeholders to understand the mission, vision, and keyperformance indicators the client is trying to improve to create aproduct that will lead to higher conversion levels enabling the salesteams.',
};

export default function MyExperience() {
	return (
		<section
			id='experience'
			className='max-w-6xl mt-8 mb-8 px-8 mx-auto md:flex md:mt-32'>
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
			<article className='md:w-1/2 md:ml-12' data-aos='fade-left'>
				<div className='max-w-xs mb-8'>
					<Image src={nsilogo} width={371} height={79} alt='nsi logo' />
				</div>
				<h3 className='text-lg font-semibold mb-2'>What we do:</h3>
				<p className='mb-8'>
					Naval Systems supports the Department of Defense. I work on secret-level
					clearance projects that help with our ongoing national-security well-being.
					My work is currently active with support NavAir, US Air Force, Missile
					Defense Agency, DASA DE&C, and more.
				</p>
				<h3 className='text-lg font-semibold mb-2'>What I do:</h3>
				<p className='mb-5'>
					I&apos;m the Front-End Engineer and design expert for the team. I build,
					maintain and improve various dashboards on several projects that track and
					update NavAir and the Air Force with crucial data regarding their defensive
					operations.
				</p>
				<p>
					I also help design and develop client rebranding efforts. Attend meetings
					with stakeholders to understand the mission, vision, and key performance
					indicators the client is trying to improve to create a product that will
					lead to higher conversion levels enabling the sales teams.
				</p>
			</article>
		</section>
	);
}
