[![Npm Version](https://img.shields.io/npm/v/react-expandable-content.svg?style=flat-square)](https://www.npmjs.com/package/react-expandable-content) [![License](https://img.shields.io/npm/l/react-expandable-content.svg?style=flat-square)](https://github.com/Logora/react-expandable-content/blob/master/LICENSE.md) [![Downloads Per Week](https://img.shields.io/npm/dw/react-expandable-content.svg?style=flat-square)](https://npmcharts.com/compare/react-expandable-content)

## react-expandable-content
React component to enable text collapse based on a certain height

![](example.gif)

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
|  expandable	|  true 	| boolean 	| Enable content to be expanded    |
|  expandText 	|  "Read more" 	|  string 	|  Text to display when content is collapsed    |
|  collapseText 	|   "Read less"	|  string 	| Text to display when content is expanded    |
|  className 	|   null	|  string 	| CSS class applied to the expandable part |
|  maxHeight 	|   :x:	|  integer 	| Max height in pixels for your collapsed content  |
|  showIcon 	|   true	|  boolean 	| Whether the dropdown icon should be displayed    |
|  onCollapse 	|  null 	|  func 	| Callback function triggered when content is collapsed    |
|  onExpand 	|   null	|  func 	| Callback function triggered when content is expanded     |

## License

MIT

## Contributors

<a href="https://github.com/Logora/react-expandable-content/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Logora/react-expandable-content" />
</a>
