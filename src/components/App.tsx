import { useState } from 'react';
import ReactModal from 'react-modal';
import ModalContext from '../contexts/modalContext';
import UserContext from '../contexts/userContext';
import Content from './content/content';
import Header from './header/Header';
import ModalContent from './modalContent/modalContant';

function App() {

  const [userName, setUserName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <ModalContext.Provider value={{isModalVisible, setIsModalVisible}}>
      <UserContext.Provider value={{userName, setUserName}}>
        <div>
          <Header />
          {userName && <Content />}
        </div>
        <ReactModal style={{content: { inset: "8% auto auto 85%"}}} isOpen={isModalVisible}><ModalContent /></ReactModal>
      </UserContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
