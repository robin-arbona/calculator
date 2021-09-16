import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import AmazingNumberButton from "./AmazingNumberButton";
import { defaultTheme } from "../Styles/theme";
import styled from "styled-components";
import Button from "../Styles/Button";
import useStore from '../Hooks/useStore';

const operators: Array<string> = ["+", "-", "*", "/"];
const numbers: string[] = ['1','2','3','4','5','6','7','8','9','0'];

const Wrapper = styled.div`
    border-radius: 15px;
    max-width: 325px;
    margin: 10% auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    `;

const Keyboard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    `;

const ACButton = styled(Button)``;

const STButton = styled(Button)`
    background-color: ${props => props.theme.colors.primary};
    color: ${props=>props.theme.colors.secondary};
    border-radius:15px;
    flex-grow: 1;
    `;

const Calculator = () => {
    const [input, setInput] = useState("");
    const [msg, setMsg] = useState("");
    const [add, storage] = useStore([]);
    const store = ()=>{
        add(input);
    }
    const reset = () => {
        setInput("");
        setMsg("");
    };
    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        if(e.target instanceof HTMLButtonElement){
            let newInput = e.target.innerText;
            setMsg("");
            if(newInput === "="){
                try {
                    // eslint-disable-next-line
                    let result = eval(input);
                    if(!Number.isNaN(result)){
                        setInput(result.toString());
                        if(result > 9000){
                            setMsg("It's Over 9000 !!!");
                        } 
                    } else {
                        setInput('');
                        setMsg("I can't do that :/ ");
                    }
                } catch(err) {
                    setMsg("Error, i can't do that");
                    setInput("");
                    console.error('HUUUU',err);
                }
        
            } else {
                setInput((input)=>{
                    if(input.length>0 
                        && operators.includes(input[input.length-1])
                        && operators.includes(newInput)){
                        return input.slice(0, input.length-1) + newInput;
                    }
                    return input + newInput});
            }
        }
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Wrapper className="calculator">
                    <BeautifullScreen input={input} msg={msg} storage={storage}/>
                    <Keyboard>
                        <ACButton onClick={reset} >AC</ACButton>
                        {   
                        operators.map(
                            (item: string,index: number) => <GreatOperationButton key={index} type={item} onClick={onClick}/>
                            )
                        }
                        {
                            numbers.map(
                                (item: string,index: number) => <AmazingNumberButton key={index} number={item} onClick={onClick}/>
                                )
                            }
                        <MagnificientEqualButton onClick={onClick} />
                        <STButton onClick={store} >Store</STButton>
                    </Keyboard>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Calculator;