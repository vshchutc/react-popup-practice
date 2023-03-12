import { useContext } from "react";
import UserContext from "../../userContext";
import TriggerButton from "../triggerButton/TriggerButton";
import "./Header.scss";


function Header() {
    const userName = useContext(UserContext);
    return (
        <header>
                {userName ? <div className="user-data">{userName}</div>: null}
                <TriggerButton/>
        </header>);
};

export default Header;