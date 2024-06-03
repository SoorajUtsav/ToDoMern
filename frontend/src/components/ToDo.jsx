import { AiFillDelete } from "react-icons/ai";
import { BiMessageEdit } from "react-icons/bi";

const ToDo = ({ text, updateMode, deleteMode }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiMessageEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteMode} />
      </div>
    </div>
  );
};

export default ToDo;
