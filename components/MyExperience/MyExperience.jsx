import React from "react";
import Experience from "../../public/img/experience.svg";
import nsilogo from "../../public/img/nsi-logo.png";
import Image from "next/image";

export default function MyExperience() {
	return (
		<section
			id="experience"
			className="max-w-6xl mt-8 mb-8 px-8 mx-auto md:flex md:mt-32">
			<div className="flex flex-col-reverse md:flex-col md:w-1/2 ">
				<h2 className="text-xl font-bold mb-12">
					The tech I use every day on the job:
				</h2>
				<div className="mb-8 flex justify-center md:justify-start md:mb-0">
					<Image
						src={Experience}
						width={452}
						height={425}
						alt="guy sitting on computer"
					/>
				</div>
			</div>
			<article className="md:w-1/2 md:ml-12">
				<div className="max-w-xs mb-8">
					<Image src={nsilogo} width={371} height={79} alt="nsi logo" />
				</div>
				<h3 className="text-lg font-semibold mb-4">What we do:</h3>
				<p className="mb-8">
					Naval Systems supports the Department of Defense. I work on
					secret-level clearance projects that help with our ongoing
					national-security well-being. My work is currently active with support
					NavAir, US Air Force, Missile Defense Agency, DASA DE&C, and more.
				</p>
				<h3 className="text-lg font-semibold mb-4">What we do:</h3>
				<p>
					I&apos;m the front-end engineer and design expert for the team.
					I&apos;m tasked with beautifying our existing projects, making them
					have a more modern look and feel while also adding and improving
					existing functionality on the backend. Depending on the project, below
					are the tech I use every day.{" "}
				</p>
			</article>
		</section>
	);
}
