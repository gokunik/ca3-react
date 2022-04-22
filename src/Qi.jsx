import React,{useState} from 'react';

const Qi = () => {
    const [num1, setnum1] = useState();

    const inputEvent1 = (event) => {
        console.log(event.target.value);
        setnum1(event.target.value);
    }

    const [num2, setnum2] = useState();
    const inputEvent2 = (event) => {
        console.log(event.target.value);
        setnum2(event.target.value);
    }

    const [answer, setans] = useState();
    const divide = () => {
        setans(num1/num2);
    }

    const Mult = () => {
        setans(num1*num2);
    }
    return (
        <>
            <label>Enter number 1:</label>
            <input type="text" placeholder="Enter number" onChange={inputEvent1} />
            <br /><br />
            <label>Enter number 2:</label>
            <input type="text" placeholder="Enter number" onChange={inputEvent2}/>
            <br/><br />
            <button onClick={divide}>Divide</button>&nbsp;&nbsp;
            <button onClick={Mult}>Multiply</button>

            <h3>Answer is: {answer}</h3>
        </>
    );
}

export default Qi;