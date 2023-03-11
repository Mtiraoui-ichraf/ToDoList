import React, { useState } from "react";
import "./ADDtodo.css";
import bgphoto from "../../images/mountain.jpg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ADDED, DELETED, UPDATED } from "../../redux/ReducerActions";
import { DELETE } from "../../redux/type";

const ADDtodo = () => {
  const tasks = useSelector((state) => state.TasksReducer);
  const dispatch = useDispatch();
  const [newTask, SetNewTask] = useState();
  const [updatedTask, SetUpdatedTask] = useState();

  const clickAdd = () => {
    const title = newTask;
    dispatch(ADDED(title));
    SetNewTask("");
  };
  const [toggleUpdate, SetToggleUpdate] = useState(true);

  const ClickUpdate = (id) => {
    dispatch(UPDATED(id, updatedTask));
    SetToggleUpdate(true);
  };
  

  return (
    <div className="add-todo">
      <div className="bg-holder">
        <img src={bgphoto} alt="mountain" />
        <p>
          <em>Monday 13/03/2023</em>
        </p>
      </div>
      <div className="input-holder">
        {toggleUpdate === true ? (
          <>
            <input
              type="text"
              placeholder="Enter a TODO..."
              className="task-input"
              value={newTask}
              onChange={(e) => SetNewTask(e.target.value)}
            ></input>
            <button
              type="submit"
              className="button-add"
              onClick={() => clickAdd()}
            >
              <b>Add</b>
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter a TODO..."
              className="task-input"
              value={toggleUpdate ? newTask : updatedTask}
              onChange={(e) => {
                toggleUpdate ? SetNewTask(e.target.value) : SetUpdatedTask(e.target.value);
              }}
            ></input>
            <button
              type="submit"
              className="button-add"
              onClick={() => ClickUpdate()}
            >
              <b>update</b>
            </button>
          </>
        )}
      </div>
      <div className="tasks">
        <ul className="list">
          {tasks.map((task) => (
            <>
              <li>
                <p>{task.title}</p>
                <div className="icons">
                  <BsFillPatchCheckFill
                    size={20}
                    onClick={() => dispatch(DELETED(task.id))}
                  />
                  <FaEdit
                    size={20}
                    onClick={() => {
                      SetToggleUpdate(false);
                      SetUpdatedTask(task.title);
                    }}
                  />
                  <MdDelete
                    size={20}
                    onClick={() => dispatch(DELETED(task.id))}
                  />
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ADDtodo;
