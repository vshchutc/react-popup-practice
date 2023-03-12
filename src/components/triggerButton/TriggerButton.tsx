import { useContext } from "react";
import UserContext from "../../userContext";
import "./TriggerButton.scss"

function TriggerButton() {
    const userName = useContext(UserContext)
    return (
        <button >
            {userName ? 'Logout' : 'Login'}
        </button>);
};

export default TriggerButton;