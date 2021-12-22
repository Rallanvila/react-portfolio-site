import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./ProjectModal.module.scss";

export default function ProjectModal({
	toggleModal,
	image,
	title,
	type,
	description,
	link,
	github,
	lessons,
}) {
	function handleTypeRender(type) {
		if (type === "email") return <h3>HTML Newsletter Email</h3>;
		if (type === "landing") return <h3>Landing Page</h3>;
		if (type === "react") return <h3>React Project</h3>;
		if (type === "javascript") return <h3>Vanilla Javascript</h3>;
	}

	return (
		<>
			<div className={styles.project__modalContainer}>
				<h2>{title}</h2>
				<h3>{handleTypeRender(type)}</h3>
				<span onClick={toggleModal} className={styles.closeBtn}>
					&times;
				</span>
				<div className={styles.project__modalContainerContent}>
					{/* <img src={image} alt="Dribble" /> */}
					<div className={styles.imageContainer}>
						<Image
							// className={styles.productImage}
							src={image}
							alt={title}
							width="100vw"
							height="50vh"
							layout="responsive"
						/>
					</div>
					<p>{description}</p>
					<h3>Lessons Learned</h3>
					<ul>
						{lessons.map((lesson, index) => (
							<li key={index}>{lesson}</li>
						))}
					</ul>
					<div className={styles.project__modalContainerLinks}>
						<button>
							<a href={link} target="_blank">
								<FaLink /> View Email
							</a>
						</button>
						<button>
							<a href={github} target="_blank">
								<FaGithub /> View Code
							</a>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
