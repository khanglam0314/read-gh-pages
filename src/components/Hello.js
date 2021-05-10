import React from 'react'

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1> Hello Khang</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, // Object of key/value pair to be applied to the element
        React.createElement('h1', null, 'Hello Khang'))
}

export default Hello