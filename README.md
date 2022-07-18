
# MarkupWidgets docs

The MarkupWidgets module is a packet of React components (widgets) that provides more tags for building web pages that the programmer can use as default but also customize the base component.

[*Go to widgets*](#widgets-list)

### Features

- Fully customizable
- Interactive widgets
- Prop | wrap based content
- Nice designs

### *Example page:*

![Screenshoot page 1](https://i.gyazo.com/d6d15a8a876deedf5358e82d18a3b094.jpg)
![Screenshoot page 2](https://i.gyazo.com/a9e96bbb6ab3c3af088d3583531b0d9b.jpg)
![Screenshoot page 3](https://i.gyazo.com/edc26983da335f72ac784db9fc531808.png)

------------------------------------------------

## How to use the widgets?

### Download the module

Navigate to the path of the folder where you want to install the module and clone from the github

```sh
git clone https://github.com/PortiESP/MarkupWidgets.git
```

### Import the module

Import the module from the file where you want to have access to the components, the module is structured in a way that the components can be imported in 3 diferent ways
- Import directly from the component file
- Import each component from the `./Tags.js`
- Import the default object of the file `./Tags.js`


```javascript
// Import component directly
import Paragraph from "./MarkupWidgets/tags/Paragraph"
// Import each component separately
import {Title, Paragraph, Code, Callout} from "./MarkupWidgets/Tags"
// Import all components as an object
import Tags from "./MarkupWidgets/Tags"
```

### Use the widgets

Using the widgets in the return of a React component

```javascript
import Tags from "./MarkupWidgets/Tags"
import {Code, Callout}

export default function MyComponent(){

    return (
        <>
            // Using the component from the default imported object
            <Tags.Paragraph>Example title</Tags.Paragraph>
            // Using the component from the specific export
            <Code>sudo chmod +x myScript.sh</Code>
        </>
    )
}
```

### Wrapper & prop based widgets

Most of the widget in the module are compatible with both, *wrapper* and *prop* based tags

***Wrapper based tag***
```html
<Title>
    This is the title content
</Title>
```
***Prop based tag***
```html
<Title text="This is the title content" />
```

But other widget like the `Img`, `UList`, *etc...*, this ones only support props to handle their content

### Styling the widgets

All the widgets support the `style` prop to handle the component style, anyways there are a few widgets that offer a bit more advanced features to style the diferent parts of the component

```html
<Title style={myStyles}></Title>
```

----------------------------------------------------------------

## Widgets list
  - [`Title`](#title)
  - [`Paragraph`](#paragraph)
  - [`Link`](#link)
  - [`Img`](#img)
  - [`Code`](#code)
  - [`UList`](#ulist)
  - [`Callout`](#callout)
  - [`Quote`](#quote)
  - [`Colors`]()


## Title

There are 3 types of titles/headings: *h1, h2, h3*

*H1*
![Title example screenshoot](https://i.gyazo.com/b3e161f98a115577855b8a3568d005a3.png "Title example screenshoot")
*H2*
![Title example screenshoot](https://i.gyazo.com/be80368683cd5b505c9d99252a7bfdc7.png "Title example screenshoot")
*H3*
![Title example screenshoot](https://i.gyazo.com/ea1a204167804e222618fe92d15b6352.png "Title example screenshoot")

```html
<Tags.Title>
    Text template title
</Tags.Title>


<Tags.Title text="Text template title h1" />
<Tags.Title2 text="Text template title h2" />
<Tags.Title3 text="Text template title h3" />
```


## Paragraph

![Paragraph example screenshoot](https://i.gyazo.com/dac24341490b8f99f7b0009c0c0754a7.png  "Paragraph example screenshoot")

```html
<Tags.Paragraph>
    Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
    archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de 
    las industrias desde el año 1500.
</Tags.Paragraph>


<Tags.Paragraph text="Text template title" />
```


## Link

![Link example screenshoot](https://i.gyazo.com/5fe3c4fb4c6119ea9423ac9643602622.png  "Link example screenshoot")

```html
Lorem Ipsum <Tags.Link href="www.example.com">Link text</Tags.Link> de relleno.
```


## Img

![Img example screenshoot](https://i.gyazo.com/a3ef41ebe0be29818230b3b2791d4381.png  " example screenshoot")

```javascript
import testImg from "./exampleImage.jpg"


<Tags.Img img={testImg} alt="Alt text"/>
```


## Code

![Code example screenshoot](https://i.gyazo.com/83ab08f18b17588aa7fa03e7ee4c77cb.png  " example screenshoot")

```html
<Tags.Code>
    git commit -m "This is a new commit" ./text.txt
</Tags.Code>


<Tags.Code text="Text template title" />
```


## UList

![UList example screenshoot](https://i.gyazo.com/b8006621f16f9438a8a6131177935b6b.png  " example screenshoot")

```html
<Tags.UList items={myItemList} />
```


## Callout

![Callout example screenshoot](https://i.gyazo.com/48442e0ad328a522487a5f856c08d1c8.png  " example screenshoot")
![Callout example screenshoot](https://i.gyazo.com/9015635234d86070f35eee04ede0712f.png  " example screenshoot")
![Callout example screenshoot](https://i.gyazo.com/dcd5e748b3ede14a40ae3cae11ae3ede.png  " example screenshoot")

```html
<Tags.Callout label="warning">
                This is a custom callout block
</Tags.Callout>


// Basic callout
<Tags.Callout text="This is a custom callout block"/>
// Callout with label
<Tags.Callout label="warning" text="This is a custom callout block"/>
// Callout with custom label with default styles
<Tags.Callout label="custom" text="Callout text" labelData={ text: "data", color="#ffffff" } />
// Callout with custom label with custom styles
<Tags.Callout label="custom" text="Callout text" labelData={ text: "data", color="#ffffff", style: [ "background-color: red", "border-radius: 20px"] } /> 
```


## Quote

![Quote example screenshoot](https://i.gyazo.com/0147ed02d39c1cc7b0bee2cba7cc8341.png  " example screenshoot")

```html
<Tags.Quote title="Quote title">
    This is a template text for a quote element as a text prop
</Tags.Qoute>


<Tags.Quote title="Quote title" text="This is a template text for a quote element as a text prop" />
```