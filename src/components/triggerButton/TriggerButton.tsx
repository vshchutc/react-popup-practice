import axios from "axios";
import { useContext } from "react";
import ModalContext from "../../contexts/modalContext";
import UserContext from "../../contexts/userContext";
import "./TriggerButton.scss"

function TriggerButton() {
    const {userName, setUserName} = useContext(UserContext);
    const {isModalVisible, setIsModalVisible} = useContext(ModalContext);
    return (
        <button 
            onClick={() => {
                setIsModalVisible(!isModalVisible)
                if(isModalVisible){
                    if(!userName){
                        axios.get('https://random-data-api.com/api/v2/users').then((data) => {
                        setUserName(data.data.username);
                    })} else {
                        axios.get('https://random-data-api.com/api/v2/beers').then(() => {
                            setUserName('');
                        })
                    };
                }
            
            }}
        >
            {isModalVisible && "Confirm"} {userName ? 'Logout' : 'Login'}
        </button>);
};

export default TriggerButton;