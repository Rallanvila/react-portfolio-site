import styles from "./AboutMe.module.scss";
import profilePic from "../../public/img/ProfilePic.png";
import Image from "next/image";
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
					👋🏼 My name is Allan, I am an aspiring blogger, mentor, and dev coach
					on the Accountability Buddies Twitter community. I&apos;m currently a
					full-stack web developer for Naval Systems Inc. We focus on high-end
					secret level clearance projects for the Department of Defense, Navy,
					Air Force, Missile Defense Agency, and DASA DE&C. I have a passion for
					constructing things for the web to simplify and better humanity.
					<br />
					<br />
					When I&apos;m not geeking out in front of my screen, I&apos;m a little
					bit of an adrenaline junky, enjoy my soon-to-be fiancée, two children,
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
