import Image from "next/Image";
import styles from "./ProjectContainer.module.scss";

export default function ProjectContainer({ title, image }) {
	return (
		<>
			<div key={title} className={styles.myProjects__projectContainer}>
				<div className={styles.myProjects__projectContainerProject}>
					<Image
						// src="/public/img/VilaMortgage.png"
						className={styles.productImage}
						src={image}
						alt={title}
						width="400"
						height="250"
						// layout="fill"
					/>
					<div className={styles.projectText}>
						<h5>{title}</h5>
						<button id="mtg-btn">More Info</button>
					</div>
				</div>
			</div>
		</>
	);
}
