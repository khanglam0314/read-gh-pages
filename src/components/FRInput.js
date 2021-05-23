import React from "react";

// Foward ref from Parent to child component
const FRInput = React.fowardRef((props, ref) => {
    return (
      <div>
        <input type="text" ref={ref} />
      </div>
    )
  }) 

export default FRInput;
