import { useState } from "react";

const Person = ({ name }) => {
  return <div>{name}</div>;
};

const People = ({ data }) => {
  return (
    <ol>
      {data.map((person) => (
        <li key={person.id}>
          <Person name={person.name} />
        </li>
      ))}
    </ol>
  );
};

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Javid",
    },
    {
      id: 2,
      name: "Reza",
    },
    {
      id: 3,
      name: "Shakiba",
    },
  ]);
  const addAli = () => {
    console.log("add");
    const newItems = [
      ...items,
      {
        id: 4,
        name: "Ali",
      },
    ];
    setItems(newItems);
  };

  const [number, setNumber] = useState(0);
  const addNumber = () => {
    console.log("is going to add");
    setNumber(number + 1);
  };

  const [myName, setMyName] = useState("Jay");
  const onNameChange = (e) => {
    setMyName(e.target.value);
  };
  return (
    <>
      <h1>
        Hello - {myName} - {number}
      </h1>
      <button onClick={addNumber}>Add number</button>
      <People data={items} />
      <button onClick={addAli}>Add Ali</button>
      <input value={myName} onChange={onNameChange} />
    </>
  );
};

export default App;
