import React from 'react';
import ReactDOM from 'react-dom';
import ExpandableContent from '../src/index.js';

ReactDOM.render(
  <div style={{width: "200px"}}>
    <ExpandableContent expandText={"Read more"} maxHeight={200}>mon contenu You rendered the React module: You rendered the React module: You rendered the React module: You rendered the React module: You rendered the React module:</ExpandableContent>
  </div>,
  document.getElementById('app')
)