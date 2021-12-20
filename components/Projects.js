import Image from "next/Image";
import styles from "./Projects.module.scss";
import vilaMortgage from "../public/img/VilaMortgage.png";
import ProjectContainer from "./ProjectContainer";
import data from "../data/data";

const Projects = () => {
	return (
		<section id="my-projects" className={styles.myProjects}>
			<h2>LOOK AT SOME OF MY WORK</h2>
			<p>(Adding More Monthly)</p>
			<div id="my-projects-filter">
				<button className={styles.filterBtn}>Show All</button>
				<button className={styles.filterBtn}>HTML Emails</button>
				<button className={styles.filterBtn}>Landing Pages</button>
				<button className={styles.filterBtn}>JavaScript</button>
				<button className={styles.filterBtn}>React</button>
			</div>
			<div className={styles.myProjects__projectContainer}>
				{data.map((project) => (
					<ProjectContainer
						key={project.title}
						title={project.title}
						image={project.image}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
