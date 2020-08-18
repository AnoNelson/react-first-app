import React, { useState } from "react";
import "./NewGoal.css";
const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();
    const NewGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setEnteredText("");
    props.onAddGoal(NewGoal);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="form-style" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit"> Add goal</button>
    </form>
  );
};

export default NewGoal;
