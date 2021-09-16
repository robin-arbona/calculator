import { useState, useEffect } from "react";

const url = process.env.REACT_APP_API_URL || "http://localhost:3001/result";

export default function useStore(init : Array<number>): [Function, any] {
    const [state, setState] = useState(init);
    const updateState = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setState(data);
        })};

    useEffect(() => {
        updateState();
    }, []);
    

    

    const add =  (value: string | number) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: 'result='+value
        })
        .then(res => res.json())
        .then(data => {
            updateState();
        })
        .catch(err => console.log(err));
    }
    
    return [add, state]
}