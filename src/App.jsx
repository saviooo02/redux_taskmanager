import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{ description: 'Example task 1', completed: false } , {description:'Example task 2', completed:true}]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState('showAll');

  const addTask = () => {
    if (!newTask.trim()) {
      alert("Task description cannot be empty");
      return;
    }
    setTasks([...tasks, { description: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (taskToBeDeleted) => {
    setTasks(tasks.filter(task => task !== taskToBeDeleted));
  };

  const toggleComplete = (taskToBeToggled) => {
    setTasks(
      tasks.map((task) => task === taskToBeToggled ? { ...task, completed: !task.completed } : task)
    );
  };

  const renderTasks = () => {
    let filteredTasks = tasks;
    if (filter === 'showCompleted') {
      filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === 'showNotCompleted') {
      filteredTasks = tasks.filter(task => !task.completed);
    }

    return (
      <ul className="space-y-2">
        {filteredTasks.map((task, index) => (
          <li key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow">
            <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {task.description}
            </span>
            <button onClick={() => toggleComplete(task)} className="text-green-500 hover:text-green-700">
              ✅
            </button>
            <button onClick={() => deleteTask(task)} className="text-red-500 hover:text-red-700">
              ❌
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold font-sans text-gray-900 mb-2">Task Tracker</h1>
        <p className="text-gray-600 mb-6">Stay Organized, One Task at a Time</p>
        
        <div className="mb-6 flex">
          <input
            placeholder="Add a new task"
            required
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>
        
        <div className="mb-6 flex space-x-2">
          <button onClick={() => setFilter('showAll')} 
          className={`
            px-3 py-1 rounded
            ${filter === 'showAll' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
          `}>All tasks</button>
          <button onClick={() => setFilter('showCompleted')}
           className={`
            px-3 py-1 rounded
            ${filter === 'showCompleted' 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
            `}>Completed</button>
          <button onClick={() => setFilter('showNotCompleted')} 
          className={`
            px-3 py-1 rounded
            ${filter === 'showNotCompleted' 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
            `}>Not Completed</button>
        </div>
        
        {renderTasks()}
      </div>
    </div>
  );
}

export default App;

