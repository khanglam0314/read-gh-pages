import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button Clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button> 
        </div>
    )
    // do not use clickHandler() because we want a function, not a function call. NO () 
}

export default FunctionClick
