import {
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  createContext,
  useState,
} from 'react';

type ModalContextType = [boolean, Dispatch<SetStateAction<boolean>>];

// create a context, with createContext api
export const ModalOverlayContext = createContext<ModalContextType>([
  false,
  () => {},
]);

interface ModalOverlayProviderProps {
  children: ReactNode;
}

const ModalOverlayProvider = ({ children }: ModalOverlayProviderProps) => {
  // this state will be shared with all components
  const [modalOverlay, setModalOverlay] = useState(false);

  return (
    // this is the provider providing state
    <ModalOverlayContext.Provider value={[modalOverlay, setModalOverlay]}>
      {children}
    </ModalOverlayContext.Provider>
  );
};

export default ModalOverlayProvider;
