import { ChangeEvent, useEffect, useState } from "react";

interface InputProps {
  inputHandler: (inputValue: string) => void;
}

export const PTInput = ({ inputHandler }: InputProps) => {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
    inputHandler(value);
  };

  return <input value={input} onChange={handleChange} />;
};
