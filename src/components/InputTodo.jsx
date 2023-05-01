import { FaPlusCircle } from "react-icons/fa";

const InputTodo = () => {
  return (
    <form className="todoInput">
      <input
        type="text"
        className="todoTask"
        required
        placeholder="Add Todo..."
      />
      <FaPlusCircle className="plusIcon" />
    </form>
  );
};

export default InputTodo;
