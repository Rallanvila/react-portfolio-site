import { useState } from 'react';
import Image from 'next/image';
import { Project } from '../data/data';
import MyProjectModal from './MyProjectModal';

interface MyProjectContainerProps {
  project: Project;
}

const MyProjectContainer = ({ project }: MyProjectContainerProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='project-container'>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <button onClick={() => setShowModal(true)}>More Info</button>
      {showModal && (
        <MyProjectModal project={project} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default MyProjectContainer;
