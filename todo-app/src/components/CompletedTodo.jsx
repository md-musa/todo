import { Button, Checkbox, Label } from 'flowbite-react';
import React from 'react';

const CompletedTodo = props => {
  const { task, _id, isCompleted } = props.todo;

  return (
    <div className="my-2 capitalize rounded-lg flex justify-between cursor-pointer items-center gap-2 text-lg py-2 px-2 border-2 border-gray-200 shadow-md">
      <div className="flex items-center space-x-3">
        <Checkbox id="agree" onClick={() => props.completeTask(_id)} checked />

        <p className="" style={isCompleted ? { textDecoration: 'line-through' } : {}}>
          {task}
        </p>
      </div>

      <button
        onClick={() => props.deleteTask(_id)}
        className="border-2 bg-red-100 text-red-400 text-base border-red-100 shadow-sm px-2 rounded-md hover:bg-red-500 hover:border-red-400 hover:text-white">
        Delete
      </button>
    </div>
  );
};

export default CompletedTodo;
