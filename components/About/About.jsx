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
						I am a successful 10+ years business sales professional turned
						developer after covid. Once covid hit, I spent more time at home
						with my family and noticed that we needed a change. This is when I
						found my passion for software development.
						<br />
						<br />
						While managing a 50-60hr workweek, school pick-ups, drop-offs,
						dinner, and homework from 9:30 pm to 2:30 am, I&apos;d code to then
						wake up at 7 am to rinse and repeat daily. I was hired as a
						full-time developer in 7 months.
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
