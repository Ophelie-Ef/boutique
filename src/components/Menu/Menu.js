import { menuentries } from "../../menuentries";
import ListMenu from "../ListMenu/ListMenu";
import "./Menu.css";

const Menu = (props) => {
    return (
        <nav>
            <ListMenu sendEntries={props.sendEntries} handleDisplayPanier={props.handleDisplayPanier}></ListMenu>
        </nav>
    )
}

export default Menu;