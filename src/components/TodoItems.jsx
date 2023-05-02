import Items from "./Items";

const TodoItems = () => {
  const items = [
    {
      id: 1,
      task: "First Task",
    },
    {
      id: 2,
      task: "Second Task",
    },
    {
      id: 3,
      task: "Third Task",
    },
    {
      id: 4,
      task: "Fourth Task",
    },
    {
      id: 5,
      task: "Fifth Task",
    },
    {
      id: 6,
      task: "Sixth Task",
    },
    {
      id: 7,
      task: "Seventh Task",
    },
    {
      id: 8,
      task: "Eigth Task",
    },
    {
      id: 9,
      task: "Ninth Task",
    },
    {
      id: 10,
      task: "Tenth Task",
    },
    {
      id: 11,
      task: "Eleventh Task",
    },
    {
      id: 12,
      task: "Twevlth Task",
    },
  ];
  return (
    <div className="todoItemsContainer">
      {items.map((item) => {
        return <Items key={item.id} task={item.task} />;
      })}
    </div>
  );
};

export default TodoItems;
