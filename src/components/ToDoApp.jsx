import Header from "./Header";
import TodoLogic from "./TodoLogic";

const ToDoApp = () => {
  return (
    <>
      <div className="todoApp">
        <Header />
        <TodoLogic />
      </div>
    </>
  );
};

export default ToDoApp;
