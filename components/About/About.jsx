import React from "react";
import Image from "next/image";
import AboutPic from "../../public/img/about-pic.svg";

export default function About() {
	return (
		<section className="diagonal-box">
			<div className="content px-8 mx-auto flex flex-col-reverse justify-between max-w-6xl md:flex-row">
				<article data-aos="fade-in">
					<h2 className="text-xl mb-2 font-semibold">About Me:</h2>
					<p className="md:max-w-lg sm:max-w-full">
						I&apos;m currently a full-stack web developer for Naval Systems Inc.
						We focus on high-end secret-level clearance projects for the
						Department of Defense, Navy, Air Force, Missile Defense Agency, and
						DASA DE&C.
						<br />
						<br />
						I am a blogger, mentor, and dev coach throughout Twitter and the
						Accountability Buddies Twitter community. I have a passion for
						coding, as our imagination is our only limit.
						<br />
						<br />
						When I&apos;m not geeking out in front of my screen, I&apos;m a bit
						of an adrenaline junky. I love watching movies, enjoy spending time
						with the love of my life Kim, and two children, and finding new
						memorable experiences for the family.
					</p>
				</article>
				<div
					data-aos="fade-in"
					className=" sm:flex sm:items-center sm:mx-auto sm:mb-8 md:mr-0 md:ml-8">
					<Image
						src={AboutPic}
						width={408}
						height={303}
						alt="guy sitting in mountain"
					/>
				</div>
			</div>
		</section>
	);
}
