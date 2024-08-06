import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri";
import PropTypes from 'prop-types';
import axios from "axios";


const Table = ({ todos, setTodos, isLoading, fetchData }) => {
    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://127.0.0.1:5173/api/todo/${id}/`)
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="">
            <div className="py-12">
                <table className="w-11/12 max-w-4xl">
                    <thead className="border-b-2 border-black">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Checkbox</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">To Do</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Created</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? <div>Loading...</div> :
                                <>
                                    {
                                        todos.map((todo, index) => {
                                            return (
                                                <tr key={index} className="border-b-[1px] border-dashed border-black">
                                                    <td className="p-3 ">
                                                        {todo.completed ? 
                                                        <span><RiCheckboxFill className="text-lg hover:cursor-pointer"></RiCheckboxFill></span> :
                                                        
                                                        <span><RiCheckboxBlankLine className="text-lg hover:cursor-pointer"></RiCheckboxBlankLine></span>
                                                    }
                                                    </td>
                                                    <td className="p-3 text-sm ">{todo.body}</td>
                                                    {
                                                        todo.completed ? 
                                                            <td className="p-2 text-sm text-start">
                                                                <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-green-400">Done</span>
                                                            </td>
                                                         : 
                                                    
                                                            <td className="p-2 text-sm text-start">
                                                                <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-red-400">Incomplete</span>
                                                            </td>
                                                    }
                                                    <td className="p-3 text-sm ">{new Date(todo.created).toLocaleString()}</td>
                                                    <td className="p-3 text-sm flex justify-start gap-x-8">
                                                        <FaEdit className="text-lg hover:cursor-pointer"></FaEdit>
                                                        <MdDeleteForever onClick={() => handleDelete(todo.id)} className="text-lg hover:cursor-pointer"></MdDeleteForever>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Table.propTypes = {
    todos: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
export default Table;