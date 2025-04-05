import React, { useState } from 'react';
import MyProjectContainer from './MyProjectContainer';
import data from '../../data/data';

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
      <button
        className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
        onClick={() => handleFilter(type)}>
        {text}
      </button>
    ) : (
      <button
        className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors'
        onClick={() => handleFilter(type)}>
        {text}
      </button>
    );
  };

  //TODO: Figure out new layout to add my work contributions and still have some of my old beginner projects
  return (
    <section id='my-projects' className='max-w-6xl mx-auto mb-12 px-8'>
      <h2 data-aos='fade-in' className='text-xl leading-7 font-bold mb-8'>
        Some early learning projects:
      </h2>
      <div className='flex justify-between items-center'>
        <div className='flex flex-wrap gap-4 mb-8' data-aos='fade-in'>
          <button
            className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors'
            onClick={clearFilter}>
            Show All
          </button>
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
        className='w-full'
        data-aos='fade-in'
        data-aos-anchor-placement='top-center'>
        <div className='w-full grid gap-8 px-8 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-8'>
          {portfolioV2Projects.map((project) => {
            if (!project.portfolioVersion.includes('depricated')) {
              return (
                <MyProjectContainer key={project.title} project={project} />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
