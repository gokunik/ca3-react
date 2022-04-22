import React from 'react';

const Qv = () => {
    const a = [-9, -6, -3, 0, -78];
    var mx = a[0];
            const compare = () => {
                for (var i = 0; i <= 5; i++){
                    if (a[i] >= mx) {
                        mx = a[i];
                  }  
                }
    }
    compare();
     const clicked = () => {
         alert("The largest number is: " + mx);
      }
    return (
        <>
            <h2>Largest number from -9, -6, -3, 0, -78 is: </h2>
            <br />
            <button onClick={clicked}>Click Here</button>
        </>
    );
}

export default Qv;