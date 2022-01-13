import Image from "next/Image";
import { useContext, useEffect, useState } from "react";
import styles from "./ProjectContainer.module.scss";
import ProjectModal from "./ProjectModal";
import { ModalOverlayContext } from "../context/ModalContext";
import Overlay from "./Overlay";

export default function ProjectContainer({
	project: { title, image, description, link, github, type, lessons },
}) {
	const [modal, setModal] = useState(false);
	const [modalOverlay, setModalOverlay] = useContext(ModalOverlayContext);

	// useEffect(() => {
	// 	modal ? setModalOverlay(true) : setModalOverlay(false);
	// 	console.log("useEffect() modalOverlay: ", modalOverlay);
	// }, [modal]);

	function toggleModal() {
		!modal ? setModal(true) : setModal(false);
		// console.log("modal: ", modal);
	}

	return (
		<>
			<div key={title} className={styles.myProjects__projectContainer}>
				<div className={styles.myProjects__projectContainerProject}>
					<Image
						className={styles.productImage}
						src={image}
						alt={title}
						width="400"
						height="250"
					/>
					<div className={styles.projectText}>
						<h5>{title}</h5>
						<button onClick={toggleModal}>More Info</button>
					</div>
				</div>
			</div>
			{modal ? (
				<>
					<ProjectModal
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
			{/* {modal ? (
				<div className={styles.overlay} onClick={toggleModal}></div>
			) : null} */}
		</>
	);
}
