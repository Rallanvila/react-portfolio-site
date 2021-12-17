import styles from "./Hero.module.scss";

export default function Hero() {
	return (
		<header className={styles.header}>
			<div className={styles.hero__overlay}></div>
			<div className={styles.hero__headline}>
				<h1 className={styles.hero__headlineAnimation}>Hey there, I'm Allan</h1>
				<span className={styles.webdev}>Full-Stack Web Developer</span>
				<button className={styles.hero__headlineContactBtn}>
					<a href="mailto:r.allanvila@gmail.com">Contact Me</a>
				</button>
			</div>
		</header>
	);
}
