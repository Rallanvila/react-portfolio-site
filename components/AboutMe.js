import styles from "./AboutMe.module.scss";
import profilePic from "../public/img/ProfilePic.png";
import Image from "next/Image";
import { BsKeyboard } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { SiMaterialui } from "react-icons/si";

const AboutMe = () => {
	return (
		<section id="about" className={styles.about}>
			<div className={styles.aboutMyself}>
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

			<div className={styles.threeValues}>
				<h2>ME IN A NUTSHELL..</h2>
				<div className={styles.threeValues__grid}>
					<div className={styles.threeValues__gridVal1}>
						{/* <Image src="../public/img/Keyboard.png" alt="keyboard and mouse" /> */}
						<BsKeyboard size="6rem" />
						{/* <Image src="../public/img/Keyboard.png" alt="keyboard and mouse" /> */}
					</div>
					<div className={styles.threeValues__gridVal2}>
						{/* <Image src="../public/img/Family.png" alt="family stick figures" /> */}
						<MdFamilyRestroom size="6rem" />
					</div>
					<div className={styles.threeValues__gridVal3}>
						{/* <Image
							id="ruler"
							src="../public/img/Ruler.png"
							alt="Pen and ruler"
						/> */}
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
