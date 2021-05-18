import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    // Approach 2: Inline Styling
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
