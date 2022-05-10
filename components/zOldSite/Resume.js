import styles from "./Resume.module.scss";

const Resume = () => {
	return (
		<section className={styles.resume} data-aos="fade-in">
			<div className={styles.resume__overlay}></div>
			<div className={styles.resume__headline}>
				<h2>CHECK OUT MY RÉSUMÉ!</h2>
				<button className={styles.resume__btn}>
					<a
						className={styles.resume__btnLink}
						href="/Resume.pdf"
						target="_blank"
						rel="noreferrer"
					>
						Snag It Here
					</a>
				</button>
			</div>
		</section>
	);
};

export default Resume;
