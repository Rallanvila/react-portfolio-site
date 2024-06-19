import React from 'react';
import styles from './MyProjects.module.scss';
import MyProjectContainer from './MyProjectContainer';
import data from '../../data/data';
import { useState } from 'react';

export default function MyProjects() {
  const [displayedProjects, setDisplayedProjects] = useState(data);
  const [projectType, setProjectType] = useState('');

  let portfolioV2Projects = [];
  for (let i = 0; i < displayedProjects.length; i++) {
    let project = displayedProjects[i];
    let projectVersions = displayedProjects[i].portfolioVersion;
    for (let j = 0; j < projectVersions.length; j++) {
      let version = projectVersions[j];
      if (version === 'v2') portfolioV2Projects.push(project);
    }
  }

  const handleFilter = (category) => {
    let filtered = data.filter((project) => project.type === category);
    setDisplayedProjects(filtered);
    setProjectType(category);
  };

  const clearFilter = () => {
    setDisplayedProjects(data);
    setProjectType('');
  };

  const FilterButton = ({ type, activeType, text }) => {
    return activeType === type ? (
      <button className={styles.active} onClick={() => handleFilter(type)}>
        {text}
      </button>
    ) : (
      <button onClick={() => handleFilter(type)}>{text}</button>
    );
  };

  //Todo: Figure out new layout to add my work contributions and still have some of my old beginner projects

  return (
    <section id='my-projects' className={styles.myProjects}>
      <h2 data-aos='fade-in'>Some Things I&apos;ve built:</h2>
      <div className='flex justify-between items-center '>
        <div className={styles.myProjectFilter} data-aos='fade-in'>
          <button className={styles.filterBtn} onClick={clearFilter}>
            Show All
          </button>
          <FilterButton
            type='email'
            text='HTML Emails'
            activeType={projectType}
          />
          <FilterButton
            type='landing'
            text='Landing Pages'
            activeType={projectType}
          />
          <FilterButton
            type='javascript'
            text='Javascript'
            activeType={projectType}
          />
          <FilterButton type='react' text='React' activeType={projectType} />
        </div>
      </div>
      <div
        className={styles.myProjects__projectContainer}
        data-aos='fade-in'
        data-aos-anchor-placement='top-center'>
        <div className='w-full grid gap-8 px-8 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-8'>
          {portfolioV2Projects.map((project) => (
            <MyProjectContainer key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
