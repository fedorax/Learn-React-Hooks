import React from 'react';
import TodoListComponent from './list/TodoList.component';
import TodoProvider from './Todo.provider';

const TodoComponent = () => {
    return (
        <TodoProvider>
            <TodoListComponent />
        </TodoProvider>
    );
}

export default TodoComponent;