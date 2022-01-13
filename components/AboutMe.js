import styles from "./AboutMe.module.scss";
import profilePic from "../public/img/ProfilePic.png";
import Image from "next/Image";
import { BsKeyboard } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { SiMaterialui } from "react-icons/si";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
	return (
		<section id="about" className={styles.about}>
			<div data-aos="fade-in">
				<h2>A LITTLE ABOUT MYSELF</h2>
				<Image
					className={styles.about__profileMic}
					src={profilePic}
					alt="Profile Picture"
				/>
				<p>
					👋🏼 My name is Allan, and I&apos;m a full-stack web developer for the
					Department of Defense. I have a passion for constructing things for
					the web and bettering humanity. I&apos;m currently a full-stack
					developer at Naval Systems Incorporated. We focus on high-end projects
					for the Department of Defense. I come from a major sales/financial
					background that transitioned to web development and have been loving
					the ride ever since.
					{/* <!-- I've been in SMB sales for the past six years. I aspire to break in into an exciting career in technology that will allow me to channel my logic through creating fantastic software and design that helps humanity simplify the way we live. --> */}
					<br />
					<br />
					When I&apos;m not geeking out in front of my screen, I&apos;m a little
					bit of an adrenaline junky, enjoy my soon-to-be fiancé, two children,
					and finding new memorable experiences for us.
				</p>
			</div>

			<div className={styles.threeValues} data-aos="fade-in">
				<h2>ME IN A NUTSHELL..</h2>
				<div className={styles.threeValues__grid}>
					<div className={styles.threeValues__gridVal1}>
						<BsKeyboard size="6rem" />
					</div>
					<div className={styles.threeValues__gridVal2}>
						<MdFamilyRestroom size="6rem" />
					</div>
					<div className={styles.threeValues__gridVal3}>
						<SiMaterialui size="6rem" />
					</div>
					<div className={styles.threeValues__gridDesc1}>
						<p>Developer</p>
					</div>
					<div className={styles.threeValues__gridDesc2}>
						<p>Family</p>
					</div>
					<div className={styles.threeValues__gridDesc3}>
						<p>Pixel Perfect UX</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
