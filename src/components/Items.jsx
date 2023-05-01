import { FaPenSquare, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const Items = (props) => {
  const { task } = props;
  console.log(task);
  return (
    <div className="todoItem">
      <div className="firstDiv">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <p className="taskItem">{task}</p>
      </div>
      <div className="secondDiv">
        <FaPenSquare className="editIcon" />
        <FaTrash className="deleteIcon" />
      </div>
    </div>
  );
};

Items.propTypes = {
  task: PropTypes.string.isRequired,
};
export default Items;
