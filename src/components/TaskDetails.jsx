import React from 'react';
import { useNavigate, useParams } from "react-router-dom"
import Button from './Button';

import './css/TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useNavigate();

    const handleBackButtonClick = () => {
        history(-1);
    }
    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    <input type="text" />
                </p>
            </div>
        </>
    );
}

export default TaskDetails;
