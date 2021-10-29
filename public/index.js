import React from 'react'
import ReactDOM from 'react-dom'
import ExpandableContent from '../src/index.js';

ReactDOM.render(
  <div>
    <p>You rendered the React module:</p>
    <ExpandableContent minHeight={100} maxHeight={200}>mon contenu</ExpandableContent>
  </div>,
  document.getElementById('app')
)