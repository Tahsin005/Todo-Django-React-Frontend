import './App.css'
import Table from './components/Table/Table';
import TodoForm from './components/TodoForm/TodoForm';
import { TypeAnimation } from 'react-type-animation';

function App() {

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
        <TodoForm></TodoForm>
        <Table></Table>
      </div>
    </>
  )
}

export default App
