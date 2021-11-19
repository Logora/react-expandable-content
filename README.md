## react-expandable-content

React component to enable text collapse based on a certain height

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Props](#props)
  - [expandable](#expandable)
  - [expandText](#expandtext)
  - [collapseText](#collapsetext)
  - [className](#classname)
  - [maxHeight](#maxheight)
  - [showIcon](#showIcon)
  - [onCollapse](#oncollapse)
  - [onExpand](#onexpand)
- [Styling and Customization](#styling-and-customization)
- [License](#license)
- [Contributors](#contributors)

## Installation

Install via npm or yarn

```
npm install react-expandable-content --save

yarn add react-expandable-content
```

## Usage

ExpandableContent can receive any HTML elements or React components as its children.

```
import React from 'react';
import ExpandableContent from 'react-expandable-content';

const App = () => {
  return (
    <ExpandableContent maxHeight={100} collapseText={"Read less"} expandText={"Read more"}>
      <p>
        This content will be collapsed. It can be any kind of HTML or React components.
      </p>
      <p>
        Another section that will be collapsed.
      </p>
    </ExpandableContent>
  );
};

export default App;
```

## Examples

[Code Examples](https://github.com/Logora/react-expandable-content/blob/master/examples/default.js)

## Props

| props  	| default  	|  type 	| usage |
|---	|---	|---	|---  |
|  expandable	|  true 	| boolean 	| Enable your content to be expanded    |
|  expandText 	|  "Read more" 	|  string 	|  Text displayed when your content is collapsed    |
|  collapseText 	|   "Read less"	|  string 	| Text displayed when your content is expanded    |
|  className 	|   null	|  ? 	| CSS class ...    |
|  maxHeight 	|   :x:	|  integer 	| Max height for your collapsed content  |
|  showIcon 	|   true	|  boolean 	| Whether the dropdown icon is displayed    |
|  onCollapse 	|  null 	|  func 	| Callback function when content collapsing is triggered    |
|  onExpand 	|   null	|  func 	| Callback function when content expansion is triggered    |

## License

MIT