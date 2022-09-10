import React from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { useState } from 'react';
import Button from './Button';

import './css/TaskDetails.css'

const TaskDetails = ({ handleDescAddition }) => {
    const params = useParams();
    const history = useNavigate();
    const [inputDesc, setInputDesc] = useState('');

    const handleBackButtonClick = () => {
        history(-1);
    };

    const handleInputChange = (e) => {
        setInputDesc(e.target.value);
        console.log(inputDesc);
        handleDescAddition(inputDesc, params.taskTitle);
    };

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
                    value=""
                    className='task-input-detail'
                    onChange={handleInputChange}
                />
            </div>
        </>
    );
}

export default TaskDetails;
