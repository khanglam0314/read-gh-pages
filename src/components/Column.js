import React from 'react'

function Column() {
    // Fragment can access key attribute for list of element
    // const items = []
    return (
        <React.Fragment>
            {/* {
                items.map( item => (
                    <React.Fragment key = {item.id}> 
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name</td>
            <td>Khang</td>
            <>
                <React.Fragment>React.Fragment can also be written as empty tag <> </> 
                but we can't use key attribute when using this</React.Fragment>
            </>
        </React.Fragment>
    )
}

export default Column
