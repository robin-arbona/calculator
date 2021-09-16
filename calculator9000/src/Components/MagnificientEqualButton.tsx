import styled from "styled-components";
import Button from "../Styles/Button";

const EqualButton = styled(Button)``;

const MagnificientEqualButton = ({onClick} : {onClick: Function}) => {
    return (
        <EqualButton onClick={(e)=>onClick(e)}>
            =
        </EqualButton>
    );
};
export default MagnificientEqualButton;
