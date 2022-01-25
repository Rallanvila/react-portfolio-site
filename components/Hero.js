import styles from "./Hero.module.scss";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<header className={styles.header}>
			<div className={styles.hero__overlay}></div>
			<motion.div
				animate={{ y: 0 }}
				transition={{
					type: "spring",
					duration: 2,
					bounce: 0.4,
				}}
				initial={{ opacity: 0, y: -300 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className={styles.hero__headline}
			>
				<h1 className={styles.hero__headlineAnimation}>
					Hey there, I&apos;m Allan
				</h1>
				<span className={styles.webdev}>Full-Stack Web Developer</span>
				<button className={styles.hero__headlineContactBtn}>
					<a href="mailto:r.allanvila@gmail.com">Contact Me</a>
				</button>
			</motion.div>
		</header>
	);
}
