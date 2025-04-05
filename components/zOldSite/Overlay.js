import { ModalOverlayContext } from '../../context/ModalContext.tsx';
import React, { useContext } from 'react';
import styles from './Overlay.module.scss';

const Overlay = ({ toggleModal, modal }) => {
  const [modalOverlay, setModalOverlay] = useContext(ModalOverlayContext);

  const toggleModalOverlay = () => {
    setModalOverlay(!modalOverlay);
  };

  return (
    <>
      {modal && (
        <div className={styles.overlay} onClick={toggleModalOverlay}></div>
      )}
    </>
  );
};

export default Overlay;
