// const Jay = () => {
//     // return "<strong>hi</strong>"
//   return <strong>hi</strong>;
// };

// const Jay = () => {
//   const myName = "Jay";
//   //   return <>hi myName is {myName}</>;
//   return (
//     <strong>
//       hi {myName}, you are user number {Math.floor(Math.random() * 10)}
//     </strong>
//   );
// };

// const Jay = () => {
//   const people = ["Jay", "Reza", "Shakiba", "Maryam"];
//   return (
//     <ul>
//       {people.map((person) => {
//         return <li key={person}>{person}</li>;
//       })}
//     </ul>
//   );
// };

const Hi = (props) => {
  console.log(props);

  return <h1>Hi may Name is {props.name}</h1>;
};
const Students = (props) => {
  const people = ["Ali", "Reza", "Shakiba", "Maryam"];
  return (
    <ul style={props.style}>
      {people.map((person) => (
        <li key={person}>{person}</li>
      ))}
    </ul>
  );
};
const Jay = () => {
  return (
    <>
      <Hi name="Jay" age={30} roles={["developer", "team lead", "teacher"]} />
      <Students style={{ backgroundColor: "red" }} />
    </>
  );
};

export default Jay;
