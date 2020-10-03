import React, {useState} from 'react';
import './App.css';
import Workspace from './components/Workspace';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header className="App-header" />
      <Workspace saveTodo={console.warn}
       saveTodo={todoText => {
        const trimmedText = todoText.trim();
        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText]);
        }
      }} />
      <TodoList todos={todos}
      deleteTodo={todoIndex => {
        const newTodos = todos
          .filter((_, index) => index !== todoIndex); 
        setTodos(newTodos);
      }}
      />
    </div>
  );
}

export default App;
