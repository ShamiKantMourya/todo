import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // console.log(task, "task");
  console.log(todos, "todos");
  //Add todo task
  const addTodo = () => {
    setTodos((prevValue) => [...prevValue, { id: uuidv4(), text: task }]);
    setTask("");
  };

  //Edit todo task
  const editTodo = (id, task) => {
    console.log(id, task, "index");
    // const todo = todos.find((todo) => todo.id === id);
    // console.log(todo,task, "findtodo");
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: task } : todo))
    );
  };

  //Delete todo task
  const deleteTodo = (id) => {
    // console.log(id, "indexx");
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          className="border border-gray-300 rounded-l-md p-2"
          placeholder="Add a new task"
        />
        <button
          disabled={task.length < 2}
          onClick={addTodo}
          className="bg-blue-500 text-white rounded-r-md p-2"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-3 rounded-md shadow mb-2"
          >
            <span>{todo.text}</span>
            <div>
              <button
                onClick={() => {
                  const newText = prompt("Edit task", todo.text);
                  if (newText) editTodo(todo.id, newText);
                }}
                className="text-yellow-500 hover:text-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
