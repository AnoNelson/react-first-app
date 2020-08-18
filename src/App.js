import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalsList/GoalList";
import NewGoal from "./components/newGoal/NewGoal";
function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "first listen the video" },
    { id: "cg2", text: "first listen the video" },
    { id: "cg3", text: "first listen the video" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };
  return (
    <div>
      <h2 className="course-goal"> The special goal for this course </h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
