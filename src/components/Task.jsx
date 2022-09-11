import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

import "./css/Task.css"

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useNavigate();

    const handleTaskDetailsClick = () => {history(`/${task.title}`)}

    return (
        <div 
            className="task-container"
            style={task.completed ? {borderLeft: '7px solid #1976d2', padding: '15px 20px 15px 13px'} : {}}
        >
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            
            <div className='buttons-container'>
                <button 
                    className='remove-task-button' 
                    onClick={() => handleTaskDeletion(task.id)}
                    >
                    <CgClose/>
                </button>
                <button 
                    className='see-task-detail-button' 
                    onClick={handleTaskDetailsClick}
                    >
                    <CgInfo/>
                </button>
            </div>
        </div>
    );
};

export default Task;
