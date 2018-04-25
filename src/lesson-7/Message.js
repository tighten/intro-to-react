import React from 'react';
import './Message.css';

const Message = ({ text, index, onDeleteMessage }) => {
  return (
    <div className="message">
      <span className="text">{ text }</span>

      <button onClick={() => onDeleteMessage(index)}>x</button>
    </div>
  );
};

export default Message;

