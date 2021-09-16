import styled from "styled-components";
import Button from "../Styles/Button";

const OperationButton = styled(Button)`
`;

const GreatOperationButton = ({type, onClick} : {type: string, onClick: Function}) => {
    return (
        <OperationButton onClick={(e)=>onClick(e)}>
            {type}
        </OperationButton>
    );
};
export default GreatOperationButton;