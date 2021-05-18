import React from "react";

// function Greet() {
//     return <h1>Hello Khang</h1>
// }

// Using props
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
// Destructuring props
export const Greet1 = ({name, heroName}) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
export const Greet2 = (props) => {
  const {name, heroName} = props
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
