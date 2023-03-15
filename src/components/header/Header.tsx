import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import TriggerButton from "../triggerButton/TriggerButton";
import "./Header.scss";


function Header() {
    const {userName} = useContext(UserContext);
    return (
        <header>
                {userName && <div className="user-data">{userName}</div>}
                <TriggerButton/>
        </header>);
};

export default Header;