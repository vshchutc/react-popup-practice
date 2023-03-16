import { useContext } from "react";
import ModalContext from "../../contexts/modalContext";
import UserContext from "../../contexts/userContext";
import "./ModalTriggerButton.scss"

function TriggerButton() {
    const {userName} = useContext(UserContext);
    const {isModalVisible, setIsModalVisible} = useContext(ModalContext);
    return (
        <button 
            onClick={() => {
                setIsModalVisible(!isModalVisible)}}
        >
            {userName ? 'Logout' : 'Login'}
        </button>);
};

export default TriggerButton;