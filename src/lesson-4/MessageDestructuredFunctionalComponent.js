import React from 'react';

// Props is destructured here, meaning "text" is automatically set to a variable
const MessageDestructuredFunctionalComponent = ({ text }) => {
  return <div>{ text }</div>;
};

export default MessageDestructuredFunctionalComponent;
