import axios from "axios";
import { useContext } from "react";
import ModalContext from "../../contexts/modalContext";
import UserContext from "../../contexts/userContext";


function ModalContent() {
    const {userName, setUserName} = useContext(UserContext);
    const {setIsModalVisible} = useContext(ModalContext);
    const actionLabel = userName ? 'Logout' : 'Login';

    async function modalButtonClickCallback () {
        try {
            if(!userName) {
                console.log('will login');
                const userData = await axios.get('https://random-data-api.com/api/v2/users');
                setUserName(userData.data.username);
                console.log("login successful");
            } else {
                console.log('will logout');
                const userData = await axios.get('https://random-data-api.com/api/v2/beers');
                setUserName('');
                console.log('logout successful');
            };
        } catch {
            throw new Error(`Unable to ${actionLabel}`);
        }
        setIsModalVisible(false);
    }
    
    return  (<>
        <button onClick={modalButtonClickCallback}>{actionLabel}</button> 
    </>);
}

export default ModalContent;