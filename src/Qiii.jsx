import React,{useState} from 'react';

const Qiii = () => {
    const [ans1, setans1] = useState();
    const inpute1 = (e) => {
        const c = e.target.value;
        const a = ((9 * c) / 5) + 32;
        setans1(a);
    }

    const [finalans1, setfinalans1] = useState();
    const showans1 = () => {
        setfinalans1(ans1);
    }

    const [ans2, setans2] = useState();
    const inpute2 = (e) => {
        const f = e.target.value;
        const a = ((f - 32) * 5) / 9;
        setans2(a);
    }

    const [finalans2, setfinalans2] = useState();
    const showans2 = () => {
        setfinalans2(ans2);
    }
    return (
        <>
            <h1>Temperature</h1>
            <input type="text" placeholder='Input Celcius' onChange={inpute1}/>&nbsp;&nbsp;<button onClick={showans1}>Fahrenheit</button>
            <br />
            <h3>Celcius to Fahrenheit is: {finalans1}</h3><br />
            <input type="text" placeholder='Input Fahrenheit' onChange={inpute2}/>&nbsp;&nbsp;<button onClick={showans2}>Celcius</button>
            <br />
            <h3>Fahrenheit to Celcius is: {finalans2}</h3>
        </>
    );
}

export default Qiii;