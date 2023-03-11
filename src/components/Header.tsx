import Button from "./Button";

const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    borderBottom: "1px solid black",
    boxShadow: "0px 0 5px black"
};

function Header() {
    return (
        <header style={styles}>
            <Button />
        </header>);
};

export default Header;