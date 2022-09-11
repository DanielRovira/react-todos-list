import React, { useState } from 'react';

import Button from './Button';

import './css/AddTask.css';

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        // console.log(e.target.value)  // Mostra o valor que foi digitado
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    };

    return (
        <div className='add-task-container'>
            <input 
                autoFocus 
                onChange={handleInputChange} 
                value={inputData}  //Precisa disso?
                className='add-task-input' 
                type="text" 
                onKeyDown={event => {
                    if (event.key === "Enter") {
                        handleTaskAddition(inputData);
                    }
                }}
            />
            <div className="add-task-button-container">
              <Button onClick={handleAddTaskClick}>Adicionar</Button>
             </div>
        </div>
      );
}
 
export default AddTask;