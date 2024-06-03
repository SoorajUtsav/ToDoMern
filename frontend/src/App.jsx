import ToDo from "./components/ToDo";
import { useState, useEffect } from "react";
import { addToDo, getAllToDo } from "./utils/HandleApi";

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDo(setToDos);
  }, []);

  return (
    <div>
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            name=""
            id=""
          />
          <button
            type="button"
            onClick={() => addToDo(text, setText, setToDos)}
          >
            Add
          </button>
        </div>
        <div>
          {toDos?.map((item, index) => (
            <ToDo text={item?.text} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
