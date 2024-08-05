import './App.css'
import Table from './components/Table/Table';
import TodoForm from './components/TodoForm/TodoForm';

function App() {

  return (
    <>
      <div className="min-h-screen px-8 bg-lime-100">
        <div className='text-center pt-12 text-4xl md:text-6xl font-semibold'>To Do List</div>
        <TodoForm></TodoForm>
        <Table></Table>
      </div>
    </>
  )
}

export default App
