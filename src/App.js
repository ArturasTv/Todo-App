import { useState } from "react";
import MainCard from "./components/Card/taskList/MainCard";
import FormCard from "./components/Card/form/FormCard";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./style.css";

const db = require("./db.js");

db.tasks = db.tasks.sort((a, b) => (a.time > b.time ? 1 : -1));

const App = () => {
  const [tasks, setTasks] = useState(db.tasks);

  const SetCheckBox = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, check: !task.check } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const addTask = (task) => {
    task.id = uuidv4();
    setTasks([...tasks, task].sort((a, b) => (a.time > b.time ? 1 : -1)));
  };
  const doneTasks = () => {
    setTasks(
      tasks.map((task) => (task.check ? { ...task, done: true } : task))
    );
    console.log(tasks);
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainCard
            tasks={tasks}
            SetCheckBox={SetCheckBox}
            deleteTask={deleteTask}
            doneTasks={doneTasks}
          />
        </Route>
        <Route exact path="/add">
          <FormCard addTask={addTask} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
