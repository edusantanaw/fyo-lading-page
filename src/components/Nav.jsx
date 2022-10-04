import {HeaderContianer, List} from '../styles/styles'
import Logo from '../images/logo.svg'
import styled from 'styled-components'


const Item = styled.li`
    align-self: flex-end;
    padding: 10px;
    margin-left: 15px;
    font-size: 1em;
    color: hsl(0, 0%, 87%);
    font-weight: 400;
    font-family: "Raleway", sans-serif;
    transition: 0.1s;
    cursor: pointer;

    &:hover{
        color: hsl(0, 0%, 100%);
        text-decoration: underline;
    }
` 


export default function Header(){
    return(
        <HeaderContianer>
            <img src={Logo} alt="Logo" />
            <List>
                <Item>Features</Item>
                <Item>Team</Item>
                <Item>Sign in</Item>
            </List>
        </HeaderContianer>
    )
}