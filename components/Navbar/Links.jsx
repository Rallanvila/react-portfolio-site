import React, { useState } from "react";
import { IoMdPaper } from "react-icons/io";
import { BiBuildings } from "react-icons/bi";
import { VscMultipleWindows } from "react-icons/vsc";
import Hamburger from "hamburger-react";
import Link from "next/link";
import styles from "./Links.module.scss";

export default function Links() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<ul className="flex justify-between items-center">
				<li className="ml-3 sm:mx-3 flex items-center">
					<Link className="pr-2" href="https://blog.rallanvila.com">
						<a target="_blank" rel="noreferrer">
							Blog
						</a>
					</Link>
					<Link href="https://blog.rallanvila.com">
						<a target="_blank" rel="noreferrer">
							<div className="hidden md:block">
								<IoMdPaper className="ml-2" />
							</div>
						</a>
					</Link>
				</li>
				<li className="ml-3 sm:mx-3 flex items-center ">
					<Link href="#experience">Experience</Link>
					<Link href="#experience" passHref>
						<div className="hidden md:block">
							<BiBuildings className="ml-2" />
						</div>
					</Link>
				</li>
				<li className="ml-3 sm:mx-3 flex items-center">
					<Link href="#my-projects">Projects</Link>
					<Link href="#my-projects" passHref>
						<div className="hidden md:block">
							<VscMultipleWindows className="ml-2" />
						</div>
					</Link>
				</li>
				<li className={styles.button}>
					<Link href="/Resume.pdf">
						<a target="_blank" rel="noreferrer">
							Resume
						</a>
					</Link>
				</li>
				<li className="ml-3 sm:mx-3 md:hidden">
					<Link href="/Resume.pdf">
						<a target="_blank" rel="noreferrer">
							Resume
						</a>
					</Link>
				</li>
			</ul>
		</>
	);
}
