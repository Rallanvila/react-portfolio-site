import { useState, useEffect } from 'react';
import { Project } from '../data/data';
import data from '../data/data';
import MyProjectContainer from './MyProjectContainer';

const MyProjects = () => {
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    setDisplayedProjects(data);
  }, []);

  const FilterButton = ({
    filter,
    label,
  }: {
    filter: string;
    label: string;
  }) => (
    <button
      className={activeFilter === filter ? 'active' : ''}
      onClick={() => {
        setActiveFilter(filter);
        if (filter === 'all') {
          setDisplayedProjects(data);
        } else {
          setDisplayedProjects(
            data.filter((project: Project) => project.type === filter)
          );
        }
      }}>
      {label}
    </button>
  );

  return (
    <div className='projects-section'>
      <div className='filter-buttons'>
        <FilterButton filter='all' label='All Projects' />
        <FilterButton filter='react' label='React Apps' />
        <FilterButton filter='javascript' label='JavaScript Apps' />
        <FilterButton filter='landing' label='Landing Pages' />
        <FilterButton filter='email' label='Email Templates' />
      </div>
      <div className='projects-grid'>
        {displayedProjects.map((project, index) => (
          <MyProjectContainer key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
