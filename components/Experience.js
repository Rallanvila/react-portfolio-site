import Image from "next/image";
import styles from "./Experience.module.scss";
import nextjsLogo from "../public/img/Nextjs-logo.svg";
import bayside from "../public/img/bayside.png";
import nsiLogo from "../public/img/NSI_logo.png";
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
			<h2 className={styles.experience__summaryWorked} data-aos="fade-in">
				MY EXPERIENCE
			</h2>
			<div className={styles.experience__summary}>
				<div className={styles.experience__summaryWorked}></div>

				<div className={styles.experience__company} data-aos="fade-in">
					<Image src={nsiLogo} height="62px" width="250px" />
					{/* <h3>Naval Systems Inc</h3> */}
					<p>
						Naval Systems supports the Department of Defense. Here I work on
						secret level clearance projects that help with the well being of our
						on going national security. My work is currently active with support
						NavAir, US Air Force , Missile Defense Agency, DASA DE&C and more.
					</p>
				</div>
				<div
					className={styles.experience__company}
					data-aos="fade-in"
					data-aos-delay="300"
				>
					<Image
						src={bayside}
						alt="bayside community church"
						width="250"
						height="62"
					/>
					<p>
						I&apos;m a web developer for{" "}
						<a href="https://mybayside.church">MyBayside.church</a>. Bayside is
						a community church located in Bradenton, FL with a major creative &
						production team. We offer live services with realtime chat. As
						different events and programs come up, I&apos;ve assisted in
						maintaining the site.
						{/* I've been
						supporting the web development since. I love the fast-paced industry
						and new technologies developed to improve our quality of life. I
						love finding a deep understanding of core languages to grow my
    portfolio, investing in my family's future. */}
					</p>
				</div>
			</div>
			<h2 data-aos="fade-in">TECHNOLOGIES I WORK WITH: </h2>
			<div
				className={styles.experience__skills}
				data-aos="fade-in"
				data-aos-delay="200"
			>
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
					<FaSass className={styles.sass} style={{ fontSize: "78px" }} />
					<SiStyledcomponents
						className={styles.styled}
						style={{ fontSize: "110px", padding: "0 10px" }}
					/>
					<FaWordpress className={styles.wordpress} />
					<FaGithub className={styles.github} />
					<FaGulp className={styles.gulp} />
					<FaFigma className={styles.figma} />
					<SiPostman className={styles.postman} style={{ fontSize: "80px" }} />
					<SiMaterialui
						className={styles.material}
						style={{ fontSize: "90px" }}
					/>
				</div>
			</div>
		</section>
	);
}
