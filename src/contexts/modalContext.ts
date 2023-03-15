import React from "react";

const ModalContext = React.createContext({isModalVisible: false, setIsModalVisible: (isModalVisible:boolean) => {}});

export default ModalContext;