import navItems from './navbarConfig';
import {StyledLink} from "./AppBar.styled";
import {NavContainer} from "../containers/Containers.styled";

function AppBar(props) {
    return (
        <NavContainer>
            {navItems.map(({href, text,icon:Icon}) =>
                (<StyledLink to={href} key={href} >{text}</StyledLink>))}
        </NavContainer>
    );
}


export default AppBar;