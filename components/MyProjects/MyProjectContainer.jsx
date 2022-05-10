import Image from "next/image";
import { useState } from "react";
import styles from "./MyProjectContainer.module.scss";
import MyProjectModal from "./MyProjectModal";
import Overlay from "../zOldSite/Overlay";

export default function ProjectContainer({
	project: { title, image, description, link, github, type, lessons },
}) {
	const [modal, setModal] = useState(false);

	function toggleModal() {
		!modal ? setModal(true) : setModal(false);
	}

	return (
		<>
			<div key={title} className={styles.myProjects__projectContainer}>
				<div className={styles.myProjects__projectContainerProject}>
					<Image
						className={styles.productImage}
						src={image}
						alt={title}
						// width="400"
						layout="fill"
						// height="250"
					/>
					<div className={styles.projectText}>
						<h5>{title}</h5>
						<button onClick={toggleModal}>More Info</button>
					</div>
				</div>
			</div>
			{modal ? (
				<>
					<MyProjectModal
						toggleModal={toggleModal}
						title={title}
						image={image}
						description={description}
						type={type}
						link={link}
						github={github}
						lessons={lessons}
					/>
					<Overlay toggleModal={toggleModal} modal={modal} />
				</>
			) : null}
		</>
	);
}
