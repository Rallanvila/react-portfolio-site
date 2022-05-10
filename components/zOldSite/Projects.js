import styles from "./Projects.module.scss";
import ProjectContainer from "./ProjectContainer";
import data from "../../data/data";
import { useState } from "react";

const Projects = () => {
	const [displayedProjects, setDisplayedProjects] = useState(data);

	let portfolioV1Projects = [];
	for (let i = 0; i < displayedProjects.length; i++) {
		let project = displayedProjects[i];
		let projectVersions = displayedProjects[i].portfolioVersion;
		for (let j = 0; j < projectVersions.length; j++) {
			let version = projectVersions[j];
			if (version === "v1") portfolioV1Projects.push(project);
		}
	}

	return (
		<section id="my-projects" className={styles.myProjects}>
			<h2 data-aos="fade-in">LOOK AT SOME OF MY WORK</h2>
			<p data-aos="fade-in">(Adding More Monthly)</p>
			<div className={styles.myProjectFilter} data-aos="fade-in">
				<button className={styles.filterBtn} onClick={clearFilter}>
					Show All
				</button>
				<button
					className={styles.filterBtn}
					onClick={() => handleFilter("email")}>
					HTML Emails
				</button>
				<button
					className={styles.filterBtn}
					onClick={() => handleFilter("landing")}>
					Landing Pages
				</button>
				<button
					className={styles.filterBtn}
					onClick={() => handleFilter("javascript")}>
					JavaScript
				</button>
				<button
					className={styles.filterBtn}
					onClick={() => handleFilter("react")}>
					React
				</button>
			</div>
			<div
				className={styles.myProjects__projectContainer}
				data-aos="fade-in"
				data-aos-anchor-placement="top-center">
				{portfolioV1Projects.map((project) => (
					<ProjectContainer key={project.title} project={project} />
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
