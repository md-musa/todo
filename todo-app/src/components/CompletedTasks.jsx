import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CompletedTodo from './CompletedTodo';

function CompletedTasks() {
  const [todos, setTodos] = useState([]);
  const [changeTracker, setChangeTracker] = useState([]);
  const user = { email: 'mohammad.musa706@gmail.com' };

  useEffect(() => {
    axios
      .get(`/completedTasks/${user.email}`)
      .then(res => setTodos(res.data))
      .catch(error => console.log(error));
  }, [changeTracker]);

  const completeTask = async id => {
    console.log(id);
    try {
      const { data } = await axios.patch(`/${id}`);
      setChangeTracker(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async id => {
    try {
      const { data } = await axios.delete(`/${id}`);
      setChangeTracker(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border-2  border-gray-200 shadow-md rounded-lg grid items-end h-[80vh] w-2/3 mx-auto p-5">
      <section className="">
        <div className="mx-24 border-1 border-gray-500  shadow-sm rounded-md py-2 flex justify-around">
          <Link to="/">
            <button className="text-black hover:bg-blue-600 hover:text-white px-3 py-1 active:ring-2 ring-blue-300 border-gray-200 border-2 rounded-md shadow-sm">
              My Tasks
            </button>
          </Link>

          <Link to="/completedTasks">
            <button className="bg-blue-500 border-blue-400 text-white px-3 py-1 active:ring-2 ring-blue-300 border-2 rounded-md shadow-sm">
              Completed Tasks
            </button>
          </Link>
        </div>

        <div className="px-3 mx-24 h-[300px] overflow-y-scroll">
          {todos.map(todo => (
            <CompletedTodo todo={todo} deleteTask={deleteTask} completeTask={completeTask} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CompletedTasks;
