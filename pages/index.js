import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Resume from "../components/Resume";
import WhatIDo from "../components/WhatIDo";
import Projects from "../components/Projects";

export default function Home() {
	return (
		<>
			<Nav />
			<Hero />
			<AboutMe />
			<WhatIDo />
			<Experience />
			<Resume />
			<Projects />
		</>
	);
}
