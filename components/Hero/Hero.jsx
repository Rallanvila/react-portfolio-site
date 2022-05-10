import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfilePic2 from "../../public/img/ProfilePic2.png";
import LinkedIn from "../../public/img/LinkedIn.png";
import Twitter from "../../public/img/Twitter.png";
import Github from "../../public/img/Github.png";

export default function Hero() {
	return (
		<header className="container px-8 my-8 mx-auto max-w-6xl flex flex-col-reverse sm:flex-row  sm:justify-between md:justify-evenly md:px-8">
			<div>
				<h1 className="text-5xl font-bold mt-8 mb-4 sm:max-w-md sm:text-4xl md:text-5xl relative">
					Hey there, Allan Vila here at your service!{"  "}
					<span className="wave">👋🏼</span>
				</h1>
				<div className="flex justify-between items-center sm:items-start sm:flex-col sm:justify-start">
					<h2 className="font-semibold text-xl my-4">Front-End Engineer</h2>
					<div className="flex items-center">
						<Link
							href="https://www.linkedin.com/in/allan-vila-91922b129/"
							passHref
							rel=" noreferrer">
							<a className="mx-2" target="_blank">
								<Image src={LinkedIn} alt="linkedin" width={35} height={35} />
							</a>
						</Link>
						<Link
							href="https://twitter.com/RAllanVila"
							passHref
							rel=" noreferrer">
							<a className="mx-2" target="_blank">
								<Image src={Twitter} alt="twitter" width={35} height={35} />
							</a>
						</Link>
						<Link
							href="https://github.com/Rallanvila"
							passHref
							rel=" noreferrer">
							<a className="mx-2" target="_blank">
								<Image
									src={Github}
									alt="https://github.com/Rallanvila"
									width={35}
									height={35}
								/>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="max-w-xs mx-auto sm:mx-0 sm:max-w-xl">
				<Image
					src={ProfilePic2}
					alt="Allan Vila Photo"
					width={478}
					height={541}
				/>
			</div>
		</header>
	);
}
