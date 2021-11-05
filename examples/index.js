import React from 'react';
import ReactDOM from 'react-dom';
import ExpandableContent from '../src/index.js';

ReactDOM.render(
  <div>
    <p>You rendered the React module:</p>
    <ExpandableContent maxHeight={200}>mon contenu You rendered the React module: You rendered the React module: You rendered the React module: You rendered the React module: You rendered the React module:</ExpandableContent>
  </div>,
  document.getElementById('app')
)