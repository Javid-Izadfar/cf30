import { useState } from "react";
import { nanoid } from "nanoid";

// const onTaskSubmit = (task) => {
//   console.log(task);
// };

const Form = ({ onTaskSubmit }) => {
  const [title, setTitle] = useState("");

  const createNewTask = (e) => {
    e.preventDefault();
    onTaskSubmit({
      id: nanoid(),
      title: title,
    });
    setTitle("");
  };

  return (
    <form onSubmit={createNewTask}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
