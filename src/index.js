import React from 'react';
import ReactDOM from 'react-dom';

/** Update this with the current lesson we are on */
import App from './lesson-8/App';

/** ReactDOM will search for a div with an ID of "root" in public/index.html
 * and render your component within the empty div */
ReactDOM.render(<App />, document.getElementById('root'));
