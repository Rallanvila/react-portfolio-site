'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectRow } from './ProjectRow';
import { ProjectDetail } from './ProjectDetail';
import data from '@/data/data';

type Project = {
  title: string;
  image: string;
  type: string;
  link: string;
  github: string;
  description: string;
  lessons: string[];
  portfolioVersion: string[];
  completedDate?: string;
};

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [versionFilter, setVersionFilter] = useState<string>('all');
  const projects = data;

  // Filter projects based on type and version
  const filteredProjects = projects.filter((project) => {
    const typeMatch = filter === 'all' || project.type === filter;
    const versionMatch =
      versionFilter === 'all' ||
      (project.portfolioVersion &&
        project.portfolioVersion.includes(versionFilter));
    return typeMatch && versionMatch;
  });

  // Get unique project types
  const uniqueTypes = [
    'all',
    ...Array.from(new Set(projects.map((project) => project.type))),
  ];

  // Get unique portfolio versions
  const allVersions = projects.flatMap(
    (project) => project.portfolioVersion || []
  );
  const uniqueVersions = ['all', ...Array.from(new Set(allVersions))];

  return (
    <div className='max-w-6xl mx-auto mb-8 px-8  space-y-8'>
      <h2 className='text-2xl font-bold mb-8 text-gray-800'>My Projects:</h2>
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='flex flex-wrap gap-2 justify-center'>
          <span className='self-center text-sm font-medium mr-2'>Type:</span>
          {uniqueTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === type
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className='flex flex-wrap gap-2 justify-center'>
          <span className='self-center text-sm font-medium mr-2'>Version:</span>
          {uniqueVersions.map((version) => (
            <button
              key={version}
              onClick={() => setVersionFilter(version)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                versionFilter === version
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}>
              {version}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className='text-center py-12'>
          <h3 className='text-xl font-medium'>
            No projects match your filters
          </h3>
          <p className='text-muted-foreground mt-2'>
            Try changing your filter criteria
          </p>
        </div>
      ) : (
        <div className='space-y-12'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}>
              <ProjectRow
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      )}

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
