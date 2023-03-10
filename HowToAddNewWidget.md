# Add a new widget to the library

## Create widget file

> Create the wiget file inside the `./tags` directory

The widget file must export a React component as the default export

> When creating a new component dont forget to add 'id' and 'style' props to allow it to be personalizable by the user

```js
// Example from 'Paragraph' widget
import {paragraph as className} from "./styles/paragraph.module.scss"

export default function Paragraph(props){
    return (
        <>
            <p className={className} style={props.style} id={props.id}>{props.children || props.text}</p>
        </>
    )
}
```

## Widget styles

To give styles to the widget you must should create a *sass* file in the `./tags/styles/` directory

The styles file should follow the same naming rule: `<widgetName>.module.scss`

Then import the styles file to the component to import the classNames used

> There is also a `_global.scss` file for common classNames styles

```scss
// Example from 'Paragraph' widget styles file
@import "./global";

.paragraph{
    color: $lightGray;
    font-size: 1.1rem;
    font-weight: 300;
    padding: 10px 0;
}

// Media query for responsive design
@media (max-width:600px){
    .paragraph{
        font-size: 1rem;
        line-height: 22px;
    }
}
```

## Add widget to the global exports file

To allow the widget to be imported from one single file you should add the widget component file to the `./Tags.js` file and then add the component to the exports array

```js
import Title from "./tags/Title"
import Title2 from "./tags/Title2"
import Title3 from "./tags/Title3"
import Title4 from "./tags/Title4"
import Paragraph from "./tags/Paragraph" // Our new widget

// Append here to make acesible from global object: Tags.Paragraph
const tags = { Title, Title2, Title3, Title4, Paragraph }

// Exports
export default tags; // Export all
// Export individualy, Append here to allow export only specific object
export { Title, Title2, Title3, Title4, Paragraph }; 

```

## Write the widget documentation on the `README.md`

Write in the library documentation some description, screenshoots, props, usage examples, etc...

- Add the wiget to the index
- Add the documentation the last one

