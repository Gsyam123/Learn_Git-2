import React, { useState } from "react";

const Todo = () => {
  const [textList, setTextList] = useState([]);
  const [inputText, setInputText] = useState("");
  const handleAddText = () => {
    if (inputText.trim() !== "") {
      setTextList([inputText, ...textList]);
      setInputText("");
    }
  };
  const handleDelete = (index) => {
    const updatedList = textList.filter((_, i) => i !== index);
    setTextList(updatedList);
  };
  return (
    <div className="App">
      <h1>Text List</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleAddText}>Add</button>
      <ul>
        {textList.map((text, index) => (
          <li key={index}>
            {text}
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
