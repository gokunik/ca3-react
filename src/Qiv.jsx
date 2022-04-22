import React,{useState} from 'react';

const Qiv = () => {
    const [num, setnum] = useState();
    const inpute = (e) => {
        setnum(e.target.value);
    }

    const [ans, setans] = useState();
    const subtract = () => {
        let diff;
        if (num <= 100) {
            diff = 100 - num;
        } else {
            diff = (num - 100) * 2;
        }

        setans(diff);
    }
    return (
        <>
            <label>Input number:</label>&nbsp;&nbsp;
            <input type="text" placeholder="Input number" onChange={inpute}/>
            <br /><br />
            <button onClick={subtract}>Subtract to 100</button>
            <h3>Answer: {ans}</h3>
        </>
    );
}

export default Qiv;