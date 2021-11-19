import React from 'react';
import ReactDOM from 'react-dom';
import ExpandableContent from '../src/index.js';
import './default.css';

ReactDOM.render(
  <div style={{ display: "flex" }}>

    <div style={{width: "200px", border: "1px solid #e7e7e7", borderRadius: "6px", padding: "10px", marginRight: "15px", alignSelf: "flex-start"}}>
      <ExpandableContent 
        maxHeight={100} 
        collapseText={"Read less"} 
        expandText={"Read more"}
        onExpand={() => console.log("%conExpand() CALLBACK FIRED", "color: green; background: #000; padding: 15px; font-size: 20px;")}
        onCollapse={() => console.log("%conCollapse() CALLBACK FIRED", "color: red; background: #000; padding: 15px; font-size: 20px;")}
        className="className">
          My text is long and beautiful, as, it has been well documented, are various other parts of my website. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s.
      </ExpandableContent>
    </div>

    <div style={{width: "200px", border: "1px solid #e7e7e7", borderRadius: "6px", padding: "10px", background: "#000", color: "white", alignSelf: "flex-start" }}>
      <ExpandableContent 
        maxHeight={100} 
        collapseText={"Read less"} 
        expandText={"Read more"}
        darkMode={true}
        onExpand={() => console.log("%conExpand() CALLBACK FIRED", "color: green; background: #000; padding: 15px; font-size: 20px;")}
        onCollapse={() => console.log("%conCollapse() CALLBACK FIRED", "color: red; background: #000; padding: 15px; font-size: 20px;")}
        className="className">
          My text is long and beautiful, as, it has been well documented, are various other parts of my website. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s.
      </ExpandableContent>
    </div>

  </div>,
  document.getElementById('app')
)