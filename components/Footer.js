import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__details}>
				<h2>Richard Allan Vila</h2>
				<p>Full-Stack Developer</p>
			</div>
			<a
				href="https://www.linkedin.com/in/allan-vila-91922b129/"
				target="_blank"
				rel="noreferrer"
			>
				<FaLinkedin />
			</a>
			<a href="https://github.com/Rallanvila" target="_blank" rel="noreferrer">
				<FaGithubSquare />
			</a>
		</footer>
	);
}
