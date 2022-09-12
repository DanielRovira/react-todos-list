import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import data from './data.json'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import './components/css/App.css'

const App = () => {
        const [tasks, setTasks] = useState(data);

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

            setTasks(newTask)
        };

        const handleTaskAddition = (taskTitle) => {
            const newTasks = [
                ...tasks, 
                {
                    title: taskTitle,
                    id: uuidv4(),
                    completed: false,
                },
            ];

            setTasks(newTasks);
        };

        const handleTaskDeletion = (taskId) => {
            const newTasks = tasks.filter(task => task.id !== taskId)

            setTasks(newTasks)
        };

        const handleDescAddition = (taskDesc, taskTitle) => {
            const newTask = tasks.map(task => {
                if (task.title === taskTitle) return { ...task, description: taskDesc };
                return task;
            })
            
            setTasks(newTask);
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
