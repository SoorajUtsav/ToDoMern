import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then((data) => {
    setToDo(data?.data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text }).then(() => {
    setText("");
    getAllToDo(setToDo);
  });
};

const updateToDo = (
  _id,
  text,
  setText,
  setToDo,
  setIsUpdating,
  setUpdateIds
) => {
  axios.post(`${baseUrl}/update`, { _id, text }).then(() => {
    setText("");
    setUpdateIds("");
    setIsUpdating(false);
    getAllToDo(setToDo);
  });
};

const deleteToDo = (_id, setToDo) => {
  axios
    .delete(`${baseUrl}/delete`, { data: { _id } })
    .then(() => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
