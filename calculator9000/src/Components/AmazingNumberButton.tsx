import styled from 'styled-components';
import Button from '../Styles/Button';

const Number = styled(Button)``;

const AmazingNumberButton = ({number, onClick} : {number: string, onClick: Function}) => {
    return (
        <Number onClick={(e)=>onClick(e)}>
            {number}
        </Number>
    );
};

export default AmazingNumberButton;