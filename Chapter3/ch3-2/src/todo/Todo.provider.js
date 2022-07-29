import React, { useState } from 'react';
import TodoContext from './Todo.context';
const TodoProvider = ({ children }) => {
    const [state, setState] = useState(null);
    return (
        <TodoContext.Provider value={{ state, setState }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;