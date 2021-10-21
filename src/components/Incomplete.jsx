import React from "react";

export const Incomplete = (props) => {
  const { todo, onClickComplete, onClickRemove } = props;

  return (
    <div className="incomplete-box">
      <h2 className="title">未完了のTODO</h2>
      <ul>
        {todo.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickRemove(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
