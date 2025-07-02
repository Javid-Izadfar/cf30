import Header from "./components/layout/header";
import TodoApp from "./components/todo/index";

const App = () => {
  return (
    <>
      <Header />
      <TodoApp title="todo" />
      <TodoApp title="doing" />
      <TodoApp title="done" />
    </>
  );
};

export default App;
