import Image from "next/image";
import React from "react";
import RAVLogo from "../../public/img/MyLogo.png";
import Links from "./Links";

export default function Navbar() {
	return (
		<nav className="px-4 py-4 max-w-6xl mx-auto flex justify-between items-center ">
			<div className="mr-5 sm:mr-8">
				<Image
					src={RAVLogo}
					width={187}
					height={87}
					alt="RallanVila Logo"
					className="mr-4"
				/>
			</div>
			<Links />
		</nav>
	);
}
