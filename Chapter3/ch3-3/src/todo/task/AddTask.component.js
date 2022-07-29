import React, { useContext, useState } from 'react';
import TodoContext from '../Todo.context';

const AddTaskComponent = () => {
    const { state, setState } = useContext(TodoContext);
    const [task, setTask] = useState('');
    const changeTextAction = (event) => {
        setTask(event.target.value);
    }
    const addTaskAction = () => {
        if (!state) {
            setState([
                { task: task }
            ]);
        } else {
            setState([
                ...state,
                { task: task }
            ]);
        }

    }
    return (
        <>
            <input type="text" name="taskTxt" value={task} onChange={changeTextAction} />
            <button onClick={addTaskAction}> Add </button>
        </>
    )
};

export default AddTaskComponent;