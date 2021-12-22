import styles from "./Projects.module.scss";
import ProjectContainer from "./ProjectContainer";
import data from "../data/data";
import { useState } from "react";

const Projects = () => {
	const [displayedProjects, setDisplayedProjects] = useState(data);
	console.log("state: ", displayedProjects);

	displayedProjects.map((project) => console.log("projects: ", project));

	return (
		<section id="my-projects" className={styles.myProjects}>
			<h2>LOOK AT SOME OF MY WORK</h2>
			<p>(Adding More Monthly)</p>
			<div className={styles.myProjectFilter}>
				<button className={styles.filterBtn} onClick={clearFilter}>
					Show All
				</button>
				<button
					className={styles.filterBtn}
					onClick={() => handleFilter("email")}
				>
					HTML Emails
				</button>
				<button
					className={styles.filterBtn}
					onClick={() => handleFilter("landing")}
				>
					Landing Pages
				</button>
				<button
					className={styles.filterBtn}
					onClick={() => handleFilter("javascript")}
				>
					JavaScript
				</button>
				<button
					className={styles.filterBtn}
					onClick={() => handleFilter("react")}
				>
					React
				</button>
			</div>
			<div className={styles.myProjects__projectContainer}>
				{displayedProjects.map((project) => (
					<ProjectContainer key={project.title} project={project} />
					// <ProjectContainer
					// 	key={project.title}
					// 	title={project.title}
					// 	image={project.image}
					// 	description={project.description}
					// 	link={project.link}
					// 	github={project.github}
					// 	type={project.type}
					// 	lesson={project.lesson}
					// />
				))}
			</div>
		</section>
	);

	function handleFilter(category) {
		let filtered = data.filter((project) => project.type === category);
		setDisplayedProjects(filtered);
	}
	function clearFilter() {
		setDisplayedProjects(data);
	}
};

export default Projects;
