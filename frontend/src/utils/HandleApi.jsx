import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then((data) => {
    setToDo(data?.data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    setText("");
    getAllToDo(setToDo);
  });
};
export { getAllToDo, addToDo };
