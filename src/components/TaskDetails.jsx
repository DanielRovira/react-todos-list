import React from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from 'react';
import Button from './Button';

import './css/TaskDetails.css'

const TaskDetails = ({ handleDescAddition }) => {
    const params = useParams();
    const history = useNavigate();

    const handleBackButtonClick = () => {
        history(-1);
    };

    const handleInputChange = (e) => {
        window.description = e.target.value;
    };

    useEffect(() => {
        return () => {
            handleDescAddition(window.description, params.taskTitle);
        };
    }, [window.description]);

    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
            </div>
            <div>
                <textarea
                    autoFocus 
                    type="text"
                    placeholder="Detalhes.."
                    className='task-input-detail'
                    id='task-input-detail'
                    onChange={handleInputChange}
                    defaultValue={window.description}
                    onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                />
            </div>
        </>
    );
}

export default TaskDetails;
