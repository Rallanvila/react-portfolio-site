'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectRow } from './ProjectRow';
import { ProjectDetail } from './ProjectDetail';
import data, { type Project } from '@/data/data';

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = data;

  return (
    <div id='projects' className='max-w-6xl mx-auto mb-8 px-8 space-y-8'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>My Projects:</h2>
      <div className='space-y-12'>
        {projects.map((project, index) => (
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

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
