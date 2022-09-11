import React from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import Button from './Button';

import './css/TaskDetails.css'

const TaskDetails = ({ handleDescAddition, TaskDescription }) => {
    const params = useParams();
    const history = useNavigate();
    const [inputDesc, setInputDesc] = useState('');

    const handleBackButtonClick = () => {
        history(-1);
    };

    const handleInputChange = (e) => {
        setInputDesc(e.target.value);

    };

    useEffect(() => {
        return () => {
            handleDescAddition(inputDesc, params.taskTitle);
        };
    }, [inputDesc]);

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
                    type="text"
                    placeholder="Detalhes.."
                    className='task-input-detail'
                    onChange={handleInputChange}
                    defaultValue={TaskDescription}
                />
            </div>
        </>
    );
}

export default TaskDetails;
