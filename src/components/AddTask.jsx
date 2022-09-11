import React, { useState } from 'react';

// import Button from './Button';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './css/AddTask.css';

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        if (inputData !== "") {
        handleTaskAddition(inputData);
        setInputData('');}
    };

    return (
        <div className='add-task-container'>
            <TextField 
                autoFocus 
                // placeholder="Adicionar tarefa.." 
                onChange={handleInputChange} 
                value={inputData} 
                className='add-task-input' 
                size="small"
                variant="outlined" id="outlined-basic" label="Adicionar tarefa.." 
                type="text" 
                onKeyDown={event => { if (event.key === "Enter") {handleTaskAddition(inputData)}}}
            />
            <div className="add-task-button-container">
                <Button variant="contained" className='add-button' onClick={handleAddTaskClick}>Adicionar</Button>
             </div>
        </div>
    );
}
 
export default AddTask;