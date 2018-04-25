import React from 'react';
import './Message.css';

const Message = ({ message, index, onDeleteMessage }) => {
  return (
    <div className="row">
      <div className="col-11">
        <strong>{ message.name }: </strong> { message.text }
      </div>

      <div className="col-1">
        <button className="btn btn-danger btn-sm"
                onClick={() => onDeleteMessage(index)}>x</button>
      </div>
    </div>
  );
};

export default Message;
