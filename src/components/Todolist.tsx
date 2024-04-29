import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingelTodo from "./SingelTodo";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
const Todolist = ({ todos, setTodos }: props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingelTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default Todolist;
