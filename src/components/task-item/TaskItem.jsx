const TaskItem = ({data, changeItem, deleteTask}) => {
    return (
        <div className="bg-slate-500 my-2 py-3 px-7 w-full rounded-xl justify-between flex">
            <p 
                onClick={() => changeItem(data.id)} 
                className={`text-3xl text-cyan-400 w-full ${data.isComplete ? 'line-through' : ''}`}
            >{data.title}</p>
            <button 
                onClick={() => deleteTask(data.id)}
                className='text-red-700'
            >delete</button>
        </div>
    )
}
export default TaskItem