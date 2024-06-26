import React from "react";
import "./styles.css";
//import { useRef } from "react";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: Props) {
  //const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input
        //  ref={inputRef}
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
}

export default InputField;
