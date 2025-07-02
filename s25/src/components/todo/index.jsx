import { useState } from "react";

import Title from "../general/title/index.jsx";
import Card from "../general/card/index.jsx";

import List from "./list.jsx";
import Form from "./form.jsx";

const TodoApp = ({ title }) => {
  const [list, setList] = useState([]);

  const onDeleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <>
      <hr />
      <Card variant="shadow">
        <Title text={title} />
        <List onDeleteItem={onDeleteItem} items={list} />
        <Form onTaskSubmit={(task) => setList([...list, task])} />
      </Card>
    </>
  );
};

export default TodoApp;
