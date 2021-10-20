import React from "react";

const handleOnMouseOver = (e) => {
    e.target.style.textDecoration = "line-through"
}

const handleOnMouseLeave = (e) => {
    e.target.style.textDecoration = ""
}

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length > 0 ? (
        todos.map(todo => {
            return(
                <div className="collection-item center" key={todo.id}>
                    <span onMouseOver = {handleOnMouseOver} onMouseLeave={handleOnMouseLeave} onClick={() => {deleteTodo(todo.id)}}>
                        {todo.content}
                    </span>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no todo's left </p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;