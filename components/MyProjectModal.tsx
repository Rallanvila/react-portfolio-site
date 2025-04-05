import { Project } from '../data/data';

interface MyProjectModalProps {
  project: Project;
  onClose: () => void;
}

const MyProjectModal = ({ project, onClose }: MyProjectModalProps) => {
  const renderProjectType = (type: Project['type']) => {
    switch (type) {
      case 'landing':
        return 'Landing Page';
      case 'react':
        return 'React App';
      case 'javascript':
        return 'JavaScript App';
      case 'email':
        return 'Email Template';
      default:
        return type;
    }
  };

  const renderButtonLabel = (type: Project['type']) => {
    switch (type) {
      case 'landing':
        return 'Visit Site';
      case 'react':
      case 'javascript':
        return 'View App';
      case 'email':
        return 'View Template';
      default:
        return 'View Project';
    }
  };

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='close-button' onClick={onClose}>
          ×
        </button>
        <h2>{project.title}</h2>
        <p className='project-type'>{renderProjectType(project.type)}</p>
        <p className='project-description'>{project.description}</p>
        <div className='lessons-learned'>
          <h3>Lessons Learned:</h3>
          <ul>
            {project.lessons.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
        </div>
        <div className='project-links'>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            {renderButtonLabel(project.type)}
          </a>
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjectModal;
