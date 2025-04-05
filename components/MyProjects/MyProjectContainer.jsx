import Image from 'next/image';
import { useState } from 'react';
import styles from './MyProjectContainer.module.scss';
import MyProjectModal from './MyProjectModal';
import Overlay from '../zOldSite/Overlay';

export default function ProjectContainer({
  project: { title, image, description, link, github, type, lessons },
}) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    !modal ? setModal(true) : setModal(false);
  }

  return (
    <>
      <div key={title} className={styles.myProjects__projectContainer}>
        <div className={styles.myProjects__projectContainerProject}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
            }}>
            <Image
              className={styles.productImage}
              src={image}
              alt={title}
              fill
              loading='lazy'
              style={{ objectFit: 'cover' }}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <div className={styles.projectText}>
            <h5>{title}</h5>
            <button onClick={toggleModal}>More Info</button>
          </div>
        </div>
      </div>
      {modal ? (
        <>
          <MyProjectModal
            toggleModal={toggleModal}
            title={title}
            image={image}
            description={description}
            type={type}
            link={link}
            github={github}
            lessons={lessons}
          />
          <Overlay toggleModal={toggleModal} modal={modal} />
        </>
      ) : null}
    </>
  );
}
