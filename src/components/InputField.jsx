import React, { useState } from 'react';

const InputField = ({addTask}) => {
    const [input, setInput] = useState('')

    const sendNewTask = (input) => {
        addTask(input)
        setInput('')        
    }

    return (
        <div className="bg-slate-500 my-2 py-3 px-7 w-full rounded-xl mb-5">
            <input 
                className="bg-slate-500 text-slate-300 w-full outline-0 text-2xl"
                onChange={e => setInput(e.target.value)} 
                onKeyPress={e => e.key === 'Enter' && input.length > 0 && sendNewTask(input) }
                value={input}
                placeholder="Add task"
            />
        </div>
    )
}

export default InputField