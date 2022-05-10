import React, { useEffect } from "react";
import AboutMe from "../../components/zOldSite/AboutMe";
import Experience from "../../components/zOldSite/Experience";
import Hero from "../../components/zOldSite/Hero";
import Nav from "../../components/zOldSite/Nav";
import Resume from "../../components/zOldSite/Resume";
import WhatIDo from "../../components/zOldSite/WhatIDo";
import Projects from "../../components/zOldSite/Projects";
import Footer from "../../components/zOldSite/Footer";
import Drift from "react-driftjs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 200,
			once: true,
			anchorPlacement: "center-bottom",
		});
	});
	return (
		<main>
			<Nav />
			<Hero />
			<AboutMe data-aos="fade-up" />
			<WhatIDo data-aos="fade-up" />
			<Experience data-aos="fade-up" />
			<Resume data-aos="fade-up" />
			<Projects data-aos="fade-up" />
			<Drift appId="u8dv2hf58kkk" />
			<Footer />
		</main>
	);
}
