import React from "react";

export const Input = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <div className="input-box">
      <input placeholder="TODO入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
