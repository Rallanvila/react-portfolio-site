import { createContext, useState } from "react";
import "../styles/globals.css";
import ModalOverlayProvider from "../context/ModalContext";

function MyApp({ Component, pageProps }) {
	return (
		<ModalOverlayProvider>
			<Component {...pageProps} />
		</ModalOverlayProvider>
	);
}

export default MyApp;
