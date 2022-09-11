import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

import "./css/Task.css"

const Task = ({ task, handleTaskClick, handleTaskDeletion, handleDescription }) => {
    const history = useNavigate();

    const handleTaskDetailsClick = () => {
            handleDescription(task.description);
            history(`/${task.title}`);
    }

    return (
        <div 
            className="task-container"
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
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
    // return <div className="task-container">{task.title}</div>;
};

export default Task;