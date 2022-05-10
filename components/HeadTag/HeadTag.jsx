import Head from "next/head";
import React from "react";

const HeadTag = () => {
	return (
		<Head>
			<title>Allan Vila | Full Stack Developer</title>
			<meta
				name="description"
				content="I'm a full-stack web developer for Naval Systems Inc. We focus on high-end clearance projects for the Department of Defense and various military branches. I'm the front-end engineer and design expert for the team. I'm tasked with beautifying our existing projects, making them have a more modern look and feel while also adding and improving existing functionality on the backend."
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta property="og:title" content="Allan Vila | Full-Stack Developer" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.rallanvila.com" />
			<meta property="og:image" content="/img/MyCard.png" />
			<meta name="twitter:site" content="@RAllanVila" />
			<link rel="apple-touch-icon" sizes="120x120" href="/img/MyLogoIcon.svg" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/img/MyLogoIcon.svg"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/img/MyLogoIcon.svg"
			/>
		</Head>
	);
};

export default HeadTag;
