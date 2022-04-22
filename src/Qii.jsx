import React from 'react';

const Qii = () => {
    const isPrime = (num) => {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
    }
    var arr=[];
    const display = () => {
        
    for ( var i = 3; i < 50; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    }
    display();
    
    return (
        <>
            <h2>Prime numbers between 1 and 50 are: </h2>
            {arr.map((idx) => {
                return (
                    <p>{idx}</p>
                );
            })}
        </>

    )

}

export default Qii;