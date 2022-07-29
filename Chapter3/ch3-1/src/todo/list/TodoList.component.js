import React, { useContext, useEffect } from 'react';
import TodoContext from '../Todo.context';
import TodoList from './TodoList';
const TodoListComponent = () => {
    const { state, setState } = useContext(TodoContext);
    useEffect(() => {
        setState(TodoList);
    })

    if (!state) {
        return (<></>);
    } else {
        return (
            <ul>
                {
                    state.map((item, index) => {
                        return (
                            <li key={index}>{item.task}</li>
                        );
                    })
                }
            </ul>
        );
    }

};

export default TodoListComponent;