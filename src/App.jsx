import { useEffect, useState } from 'react';
import './App.css'
import Table from './components/Table/Table';
import TodoForm from './components/TodoForm/TodoForm';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5173/api/todo/");
      console.log(response.data);
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="min-h-screen px-8  bg-indigo-300">
        
        <div className='text-center pt-12 text-4xl md:text-6xl font-semibold'>
          <TypeAnimation
          sequence={[
            'To',
            1000,
            'To Do',
            1000,
            'To Do List',
            1000,
          ]}
          wrapper="span"
          speed={50}
          className='text-center pt-12 text-4xl md:text-6xl font-semibold'
          repeat={Infinity}
        />
        </div>
        <TodoForm fetchData={fetchData} setTodos={setTodos}></TodoForm>
        <Table fetchData={fetchData} todos={todos} isLoading={isLoading} setTodos={setTodos}></Table>
      </div>
    </>
  )
}

export default App
