import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Comp')
    return (
        <div>
            {name}
        </div>
    )
}

// This is similar to PureComponent, but is for Function Component, 
// only rerender if there's changes in state or props. 
// Avoiding rerender when there's no changes in props or state
// This is called a Higher Order Component 
export default React.memo(MemoComp)
