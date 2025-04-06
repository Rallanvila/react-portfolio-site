'use client';

import { ProjectGrid } from '@/components/MyProjects/ProjectGrid';
import data from '@/data/data';

export default function ProjectsPage() {
  return (
    <main className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-8'>My Projects</h1>
      <ProjectGrid projects={data} />
    </main>
  );
}
