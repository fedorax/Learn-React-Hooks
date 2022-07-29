import React, { useContext, useEffect } from 'react';
import ItemComponet from '../item/item.component';
import TodoContext from '../Todo.context';
const TodoListComponent = () => {
    const { state } = useContext(TodoContext);

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