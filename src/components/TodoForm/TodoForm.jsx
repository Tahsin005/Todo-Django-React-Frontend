import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
const TodoForm = ({setTodos, fetchData}) => {
    const [newTodo, setNewTodo] = useState({
        'body' : ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setNewTodo(prev => ({
            ...prev,
            'body' : e.target.value
        }))
        console.log(newTodo);
        
    }

    const postTodo = async () => {
        try {
            await axios.post("http://127.0.0.1:5173/api/todo/", newTodo)
            fetchData();
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div className="pt-12">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleChange} value={newTodo.body} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    postTodo();
                }
            }}/>
            <button className="btn btn-success ml-2 text-black" onClick={postTodo}>Add Todo</button>
        </div>
    );
};

export default TodoForm;