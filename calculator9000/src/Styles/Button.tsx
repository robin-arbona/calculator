import styled from "styled-components";

const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    margin: 5px;
    color: ${props => props.theme.colors.primary};
    &:active {
        background-color: black;
    };
`;

export default Button;