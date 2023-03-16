import { useState } from 'react';
import ReactModal from 'react-modal';
import ModalContext from '../contexts/modalContext';
import UserContext from '../contexts/userContext';
import Gallery from './gallery/gallery';
import Header from './header/Header';
import ModalContent from './modalContent/modalContent';

ReactModal.setAppElement('#root');

function App() {
  const [userName, setUserName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <ModalContext.Provider value={{isModalVisible, setIsModalVisible}}>
      <UserContext.Provider value={{userName, setUserName}}>
        <div>
          <Header />
          <Gallery />
        </div>
        <ReactModal style={{content: { inset: "8% auto auto 85%"}}} isOpen={isModalVisible}><ModalContent /></ReactModal>
      </UserContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
