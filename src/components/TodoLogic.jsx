import InputTodo from "./InputTodo";
import TodoItems from "./TodoItems";

const TodoLogic = () => {
  return (
    <>
      <div className="appLogic">
        <InputTodo />
        <TodoItems />
      </div>
    </>
  );
};

export default TodoLogic;
