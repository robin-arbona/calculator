import styled from "styled-components";

const Wrapper = styled.div`
    height: 30vh;
    border-bottom: 1px solid #f5f5f5;
    padding: 20px;
    `;

interface PropsBeautifullScreen {
    input: string;
    msg: string;
    storage: any;
}

const Expression = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 50px;
    margin: 0;
`;

const HistoryScreen = styled.div`
    font-family: 'Roboto Mono', monospace;
    text-align: right;
    height: 20vh;
    overflow-y: scroll`;

const History = ({storage}: {storage: any}) => {
    if(!storage) return null;
    if(typeof storage.result === 'undefined') return null;
    const history = [...storage.result].reverse();
    return (
        <HistoryScreen>
            {history.map((item : any, index : number) => {
                return <p key={index}>{item}</p>
            })}
        </HistoryScreen>
    );
}
       

const BeautifullScreen = ({input, msg, storage} : PropsBeautifullScreen) => {
    let expression = input.length > 9 ? input.substring(0, 9) : input;
    return (
        <Wrapper>
            <Expression>{expression || 0}</Expression>
            {msg && <p>{msg}</p>}
            {storage && <History storage={storage}/>}
        </Wrapper>
    );
};
export default BeautifullScreen;


