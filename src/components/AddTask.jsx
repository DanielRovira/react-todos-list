import React, { useState } from 'react';

import Button from './Button';

import './css/AddTask.css';

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        // console.log(e.target.value)  // Mostra o valor digitado
    };

    const handleAddTaskClick = () => {
        if (inputData !== "") {
        handleTaskAddition(inputData);
        setInputData('');}
    };

    return (
        <div className='add-task-container'>
            <input 
                autoFocus 
                placeholder="Adicionar tarefa.." 
                onChange={handleInputChange} 
                value={inputData} 
                className='add-task-input' 
                type="text" 
                onKeyDown={event => { if (event.key === "Enter") {handleTaskAddition(inputData)}}}
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
             </div>
        </div>
    );
}
 
export default AddTask;