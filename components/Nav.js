import Image from "next/image";
import logo from "../public/img/LogoWhite.png";
import styles from "./Nav.module.scss";

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Image src={logo} alt="r.allanvila logo" />
				<p>Allan Vila</p>
			</div>
			<div className={styles.links}>
				<a href="#about">About</a>
				<a href="#experience">Experience</a>
				<a href="#my-projects">My Projects</a>
			</div>
		</nav>
	);
}
