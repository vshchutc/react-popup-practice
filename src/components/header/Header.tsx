import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import ModalTriggerButton from "../modalTriggerButton/ModalTriggerButton";
import "./Header.scss";


function Header() {
    const {userName} = useContext(UserContext);
    return (
        <header>
                {userName && <div className="user-data">{userName}</div>}
                <ModalTriggerButton/>
        </header>);
};

export default Header;