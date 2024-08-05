
const TodoForm = () => {
    return (
        <div className="pt-12">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-success ml-2 text-black">Add</button>
        </div>
    );
};

export default TodoForm;