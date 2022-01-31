import Head from "next/head";
import React from "react";

const HeadTag = () => {
	return (
		<Head>
			<title>Allan Vila | Full Stack Developer</title>
			<meta
				name="description"
				content="I'm a full-stack web developer for Naval Systems Inc. We focus on high-end clearance projects for the Department of Defense and various military branches. I have a passion for constructing things for the web to simplify and better humanity."
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta property="og:title" content="Allan Vila | Full Stack Developer" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.rallanvila.com" />
			<meta property="og:image" content="/img/site_img.png" />
			<meta name="twitter:site" content="@AllanVila318" />
			<link rel="apple-touch-icon" sizes="120x120" href="/img/Logo White.png" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/img/Logo White.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/img/Logo White.png"
			/>
		</Head>
	);
};

export default HeadTag;
