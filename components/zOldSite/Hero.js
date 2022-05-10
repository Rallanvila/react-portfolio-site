import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
	return (
		<header className={styles.header}>
			<div className={styles.hero__overlay}></div>
			<Image src="/img/Banner-Hires.jpg" alt="City Street" layout="fill" />
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
				className={styles.hero__headline}>
				<h1 className={styles.hero__headlineAnimation}>
					Hey there, I&apos;m Allan
				</h1>
				<span className={styles.webdev}>Front-End Software Engineer</span>
				<a
					href="mailto:r.allanvila@gmail.com"
					className={styles.hero__headlineContactBtn}>
					<p>Contact Me</p>
				</a>
			</motion.div>
		</header>
	);
}
