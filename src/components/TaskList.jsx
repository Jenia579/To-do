import React, { useState } from "react";
import Task, { TaskFunc } from "./Task";

export class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = () => {
    const newTasks = [...this.state.tasks];
    newTasks.push("New Task");
    this.setState({ tasks: newTasks });
  };

  taskEdit = (index, text) => {
    const newTasks = [...this.state.tasks];
    newTasks[index] = text;
    this.setState({ tasks: newTasks });
  };

  taskRemove = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div className="field">
        <button onClick={this.addTask} className="btn new">
          Add new Task
        </button>
        {this.state.tasks.map((item, index) => {
          return (
            <TaskFunc
              key={item + "" + index}
              index={index}
              removeTask={this.taskRemove}
              updateTask={this.taskEdit}
            >
              {item}
            </TaskFunc>
          );
        })}
      </div>
    );
  }
}
export const TaskListFunc = ({}) => {
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    const newTasks = [...tasks];
    newTasks.push("New Task");
    setTasks(newTasks);
  };

  const taskEdit = (index, text) => {
    const newTasks = [...tasks];
    newTasks[index] = text;
    setTasks(newTasks);
  };

  const taskRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  {
    return (
      <div className="field">
        <button onClick={addTask} className="btn new">
          Add new Task
        </button>
        {tasks.map((item, index) => {
          return (
            <TaskFunc
              key={item + "" + index}
              index={index}
              removeTask={taskRemove}
              updateTask={taskEdit}
            >
              {item}
            </TaskFunc>
          );
        })}
      </div>
    );
  }
};
