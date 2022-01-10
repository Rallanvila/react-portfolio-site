import Image from "next/Image";
import styles from "./WhatIDo.module.scss";
import reactSvg from "../public/img/react_svg.svg";
import design from "../public/img/design.svg";
import learning from "../public/img/Learning.svg";

export default function WhatIDo() {
	return (
		<section className={styles.section}>
			<h2>WHAT I DO</h2>
			<div className={styles.container}>
				<div className={styles.sections_container}>
					{/* <Image
						className={styles.img}
						src="/public/img/Design.png"
						alt="Paint Board"
						layout="fill"
					/> */}
					<Image src={design} />
					<h3>Design</h3>
					<br />
					<p>
						Design isn't just about the look of the website. It's mainly about
						the feel that creates the experience. I strive to design
						pixel-perfect experiences that look and feel amazing for the
						end-user.
					</p>
				</div>
				<div className={styles.sections_container}>
					{/* <Image
						className={styles.img}
						src="/public/img/Development.png"
						alt="Code Sign"
						layout="fill"
					/> */}
					<Image src={reactSvg} />
					<h3>Develop</h3>
					<br />
					<p>
						I love the ability to engineer a product based on the user's
						specific needs. As I grow as a developer, I write clean code that
						can be shared and leveraged to create amazing new things.
					</p>
				</div>
				<div className={styles.sections_container}>
					{/* <Image
						className={styles.img}
						src="/public/img/Learner.png"
						alt="Graduation Cap"
						layout="fill"
					/> */}
					<Image src={learning} />
					<h3>Learn</h3>
					<br />
					<p>
						I'm a motivated learner that's always self-improving. The industry
						is constantly changing, it's important to maintain your skills to
						simplify and quicken the build process for MVP.
					</p>
				</div>
			</div>
		</section>
	);
}
