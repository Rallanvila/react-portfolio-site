import { createContext, useState } from "react";

//create a context, with createContext api
export const ModalOverlayContext = createContext();

const ModalOverlayProvider = (props) => {
	// this state will be shared with all components
	const [modalOverlay, setModalOverlay] = useState(false);

	return (
		// this is the provider providing state
		<ModalOverlayContext.Provider value={[modalOverlay, setModalOverlay]}>
			{props.children}
		</ModalOverlayContext.Provider>
	);
};

export default ModalOverlayProvider;
