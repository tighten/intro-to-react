import React from 'react';
import './Message.css';

// This does not have state, so it can be a functional component!
const Message = ({ text, index }) => {
  return (
    <div className="message">
      <span className="text">{ text }</span>

      {/* Exercise: use this button to delete a message */}
      <button>x</button>
    </div>
  );
};

export default Message;
