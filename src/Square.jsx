import React from 'react';

export default function Square({ value, onClick, id }) {
  return (
    <button className={`square ${id}`} onClick={onClick}>
      {value}
    </button>
  );
}
