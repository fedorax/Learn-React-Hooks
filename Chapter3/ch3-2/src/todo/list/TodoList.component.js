import React, { useContext, useEffect } from 'react';
import ItemComponet from '../item/item.component';
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
                            <ItemComponet key={index} item={item} />
                        )
                    })
                }
            </ul>
        );
    }

};

export default TodoListComponent;