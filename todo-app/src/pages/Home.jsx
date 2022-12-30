import axios from 'axios';
import { Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Todo from '../components/Todo';
import AuthProvider from '../context/AuthProvider';

const Home = () => {
  const user = useContext(AuthProvider);
  const [todos, setTodos] = useState([]);
  const [changeTracker, setChangeTracker] = useState([]);

  useEffect(() => {
    axios
      .get(`/${user.email}`)
      .then(res => setTodos(res.data))
      .catch(error => console.log(error));
  }, [changeTracker]);

  const addTodo = async e => {
    if (e.keyCode == 13) {
      try {
        const { data } = await axios.post(`/${user.email}`, { task: e.target.value });
        setChangeTracker(data);
        e.target.value = '';
      } catch (err) {
        console.log(err);
      }
    }
  };

  // const updateTodo = async e => {
  //   if (e.keyCode == 13) {
  //     try {
  //       const { data } = await axios.patch(`/$fjlsad`, { task: e.target.value });
  //       setChangeTracker(data);
  //       e.target.value = '';
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  const getCompletedTasks = async () => {
    setActiveButton({ myTask: false, completedTask: true });

    try {
      const { data } = await axios.get(`/completedTasks/${user.email}`);
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  const [activeButton, setActiveButton] = useState({
    myTask: true,
    completedTask: false,
  });

  const getMyTasks = async () => {
    setActiveButton({ myTask: true, completedTask: false });
    try {
      const { data } = await axios.get(`/${user.email}`);
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  const completeTask = async id => {
    console.log(id);
    try {
      const { data } = await axios.patch(`/${id}`);
      setChangeTracker(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className="border-2  border-gray-200 shadow-md rounded-lg grid items-end h-[80vh] w-2/3 mx-auto p-5">
        <section className="">
          <div className="mx-24 border-1 border-gray-500  shadow-sm rounded-md py-2 flex justify-around">
            <Link to="/">
              <button
                className="bg-blue-500 border-blue-400
               text-white px-3 py-1 active:ring-2 ring-blue-300 border-2 rounded-md shadow-sm">
                My Tasks
              </button>
            </Link>

            <Link to="/completedTasks">
              <button className="text-black hover:bg-blue-600 hover:text-white px-3 py-1 active:ring-2 ring-blue-300 border-gray-200 border-2 rounded-md shadow-sm ">
                Completed Tasks
              </button>
            </Link>
          </div>

          <div className="px-3 mx-24 h-[300px] overflow-y-scroll">
            {todos.map(todo => (
              <Todo todo={todo} completeTask={completeTask} />
            ))}
          </div>
        </section>

        <br />
        <div className="w-full flex items-end justify-center">
          <input
            type="text"
            className="w-2/3 px-3 py-3 rounded-lg border-2 border-gray-200 shadow-md outline-offset-0 bg-white active:ring-2 focus:outline-none ring-blue-200"
            onKeyDown={addTodo}
            placeholder="Add task from here..."
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
