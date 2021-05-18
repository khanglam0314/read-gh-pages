import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  // index is passed as 2nd parameter to arrow function within the map method and is used as a value to key props.
  const nameList = names.map((name, index) => (
    <h2 key = {index}>{index} {name}</h2>
  ));

  return <div>{nameList}</div>;
}

export default NameList;
