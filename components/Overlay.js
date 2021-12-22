import React, { useContext } from "react";
import { ModalOverlayContext } from "../context/ModalContext";
import styles from "./Overlay.module.scss";

export default function Overlay({ toggleModal, modal }) {
	const [modalOverlay, setModalOverlay] = useContext(ModalOverlayContext);

	function toggleModalOverlay() {
		!modalOverlay ? setModalOverlay(true) : setModalOverlay(false);
	}

	return (
		<>
			{modal ? (
				<div className={styles.overlay} onClick={toggleModal}></div>
			) : null}
		</>
	);
}
