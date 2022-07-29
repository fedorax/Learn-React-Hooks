import React from 'react';
import TodoListComponent from './list/TodoList.component';
import AddTaskComponent from './task/AddTask.component';
import TodoProvider from './Todo.provider';

const TodoComponent = () => {
    return (
        <TodoProvider>
            <TodoListComponent />
            <AddTaskComponent />
        </TodoProvider>
    );
}

export default TodoComponent;