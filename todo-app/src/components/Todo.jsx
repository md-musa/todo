import { Checkbox } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';

const Todo = props => {
  const { task, _id, isCompleted } = props.todo;
  const [edit, setEdit] = useState(false);

  return (
    <div className="relative">
      <div className="my-2 capitalize rounded-lg flex justify-between cursor-pointer items-center gap-2 text-lg py-2 px-2 border-2 border-gray-200 shadow-md">
        <div className="flex items-center space-x-3">
          {isCompleted ? (
            <Checkbox id="agree" className="cursor-pointer" checked />
          ) : (
            <Checkbox
              onClick={() => props.completeTask(_id)}
              className="cursor-pointer"
              id="agree"
            />
          )}
          <p className="" style={isCompleted ? { textDecoration: 'line-through' } : {}}>
            {task}
          </p>
        </div>

        <button className="border-2 align-right text-gray-500 text-base border-gray-100 hover:bg-gray-100 hover:border-gray-300 shadow-sm px-2 rounded-md">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Todo;
