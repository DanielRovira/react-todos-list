import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion, handleDescription }) => { 
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task} 
                    handleTaskClick={handleTaskClick} 
                    handleTaskDeletion={handleTaskDeletion}
                    handleDescription={handleDescription}
                    />
            ))}
        </>
    );
};

export default Tasks;
