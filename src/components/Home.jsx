import React, { useState } from 'react';
import TaskItem from './task-item/TaskItem';
import InputField from './InputField';

const Tasks = [
    {
        id: 0,
        title: 'first task',
        isComplete: false
    },
    {
        id: 1,
        title: 'second task',
        isComplete: false
    },
    {
        id: 2,
        title: 'third task',
        isComplete: false
    },
]



const Home = () => {
    const [tasks, setTask] = useState(Tasks)

    const changeItem = (id) => {
        const newTasks = [...tasks]
        const current = newTasks.find(item => item.id === id)
        current.isComplete = !current.isComplete

        setTask(newTasks)
    }

    const addTask = (task) => {
        const newTasks = [{
            id: new Date(),
            title: task,
            isComplete: false
        }, ...tasks]
        setTask(newTasks)
    }

    const deleteTask = id => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTask(newTasks)
    }

    return (
        <div className="flex justify-center flex-col items-center pt-10 w-3/6 m-auto">
            <InputField 
                addTask={addTask} 
            />
            {tasks.map( item => (
                <TaskItem key={item.id} data={item} changeItem={changeItem} deleteTask={deleteTask} />
            ))}
        </div>
        
    )
}

export default Home