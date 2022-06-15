import React from 'react';
import '../css/TodoListTemplate.css';

const TodoListTemplate = ({ form, children }) => {
    console.log(children);
    return (
        <main className="todo-list-template">
            <div className="todo-list-title">
                SMP JIRA 오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todoItemList-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;