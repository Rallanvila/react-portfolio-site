import Image from "next/Image";
import { AiFillHtml5 } from "react-icons/ai";
import styles from "./Experience.module.scss";
import nextjsLogo from "../public/img/Nextjs-logo.svg";
import {
	FaCss3Alt,
	FaFigma,
	FaGithub,
	FaGulp,
	FaNodeJs,
	FaReact,
	FaSass,
	FaWordpress,
	FaHtml5,
} from "react-icons/fa";
import {
	SiJavascript,
	SiMaterialui,
	SiPostman,
	SiStyledcomponents,
} from "react-icons/si";

export default function Experience() {
	return (
		<section id="experience" className={styles.experience}>
			<div className={styles.experience__summary}>
				<div className={styles.experience__summaryWorked}>
					<h3 className={styles.experience__summaryWorked}>
						WHERE I'VE WORKED
					</h3>
					{/* <Image
						src="https://mybayside.church/wp-content/themes/bayside/images/logo-412x103.png"
						alt="bayside community church"
						width="300"
						height="76"
					/> */}
				</div>
				<h3 className={styles.experience__summaryExperience}>MY EXPERIENCE</h3>
				<p>
					I'm a web developer for{" "}
					<a href="https://mybayside.church">MyBayside.church</a>. I've been
					supporting the web development since. I love the fast-paced industry
					and new technologies developed to improve our quality of life. I love
					finding a deep understanding of core languages to grow my portfolio,
					investing in my family's future.
				</p>
			</div>
			<div className={styles.experience__skills}>
				<div className={styles.experience__skillsGridContainer}>
					<Image
						// className={styles.fab}
						src={nextjsLogo}
						alt="next.js logo"
						width="200"
						height="100"
					/>
					<FaReact className={styles.react} />
					<SiJavascript className={styles.js} />
					<FaNodeJs className={styles.node} />
					<FaHtml5 className={styles.html5} />
					<FaCss3Alt className={styles.css3} />
					<FaSass className={styles.sass} style={{ fontSize: "110px" }} />
					<SiStyledcomponents
						className={styles.styled}
						style={{ fontSize: "110px" }}
					/>
					<FaWordpress className={styles.wordpress} />
					<FaGithub className={styles.github} />
					<FaGulp className={styles.gulp} />
					<FaFigma className={styles.figma} />
					<SiPostman className={styles.postman} style={{ fontSize: "110px" }} />
					<SiMaterialui
						className={styles.material}
						style={{ fontSize: "110px" }}
					/>
				</div>
			</div>
		</section>
	);
}
