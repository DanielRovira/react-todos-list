import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import externalData from './data.json'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import './components/css/App.css'

const App = () => {
    const data = localStorage.getItem("tasks");
        const [tasks, setTasks] = useState(data ? JSON.parse(data) : externalData);

        //Import from API
        // useEffect(() => {
        //     const fetchTasks = async () => {
        //          const response  = await fetch(
        //              "https://jsonplaceholder.typicode.com/todos?_limit=4"
        //          );
        //          const responseJson = await response.json();
        //          setTasks(responseJson);
        //     };

        //     fetchTasks();
        //     console.log(data[0].title)
        // }, []);

        const handleTaskClick = (taskId) => {
            const newTask = tasks.map(task => {
                if (task.id === taskId) return { ...task, completed: !task.completed };

                return task;
            });

            setTasks(newTask);
            localStorage.setItem("tasks", JSON.stringify(newTask));
        };

        const handleTaskAddition = (taskTitle) => {
            const newTask = [
                ...tasks, 
                {
                    title: taskTitle,
                    id: uuidv4(),
                    completed: false,
                },
            ];

            setTasks(newTask);
            localStorage.setItem("tasks", JSON.stringify(newTask));
        };

        const handleTaskDeletion = (taskId) => {
            const newTask = tasks.filter(task => task.id !== taskId)

            setTasks(newTask);
            localStorage.setItem("tasks", JSON.stringify(newTask));
        };

        const handleDescAddition = (taskDesc, taskTitle) => {
            const newTask = tasks.map(task => {
                if (task.title === taskTitle) return { ...task, description: taskDesc };
                return task;
            })
            
            setTasks(newTask);
            localStorage.setItem("tasks", JSON.stringify(newTask));
        };

        const Main = () => {
            return (
                <>
                    <AddTask handleTaskAddition={handleTaskAddition} />
                    <Tasks 
                        tasks={tasks} 
                        handleTaskClick={handleTaskClick} 
                        handleTaskDeletion={handleTaskDeletion}
                    /> 
                </>
            )
        };

        return (
            <Router>
                <div className='container'>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/react-todos-list" element={<Main/>} />
                        <Route path="/:taskTitle" element={<TaskDetails handleDescAddition={handleDescAddition} />} />
                    </Routes>
                </div>
            </Router>    
        )
};

export default App;
