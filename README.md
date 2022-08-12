
# MarkupWidgets docs 📖

The MarkupWidgets module is a packet of React components (widgets) that provides more tags for building web pages that the programmer can use as default but also customize the base component.

[*Go to widgets*](#widgets-list)

### Features

- 🎨 Fully customizable
- 🕹️ Interactive widgets
- 💼 Prop | wrap based content
- 😍 Nice designs 
- 🏷️ Styles, IDs, etc...

### *Example page:*

<details>
  <summary>Example screenshoots 🖼️</summary> 

![Screenshoot page 1](https://i.gyazo.com/d6d15a8a876deedf5358e82d18a3b094.jpg)
![Screenshoot page 2](https://i.gyazo.com/a9e96bbb6ab3c3af088d3583531b0d9b.jpg)
![Screenshoot page 3](https://i.gyazo.com/edc26983da335f72ac784db9fc531808.png)
  
 </details>

<details>
  <summary>Example syntax 📟</summary> 

#### Code of the screenshoots above...

```js
<>
    <Tags.Title>
        Title
    </Tags.Title>
    <Tags.Paragraph>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
    </Tags.Paragraph>
    <Tags.Title2>
        Subtitle
    </Tags.Title2>
    <Tags.Code>
                                                                // Escaping collons
        <Cmd>git</Cmd> <Opt>commit</Opt> <Flag>-m</Flag> <Str>{'"This is a new commit"'}</Str> &gt; <Path>./text.txt</Path>
    </Tags.Code>
    <Tags.Title3>
        Subtitle
    </Tags.Title3>
    <Tags.Img img={testImg} alt="Alt text"/>
    <Tags.UList items={["Item 1", "Item 2", "Item 3", "Item 4"]} />
    <Tags.Callout label="custom" labelData={{text: "Secret", color: "#25AA88", style: ["font-weight: 500;", "filter: brightness(130%);"]}}>
        This is a custom callout block
    </Tags.Callout>
    <Tags.Callout  >
        This is a custom callout block
    </Tags.Callout>
    <Tags.Quote title="Quote title" text="This is a template text for a quote element as a text prop" />
    <Tags.Quote title="Quote title children">This is a template text for a quote element as a children</Tags.Quote>
    <Tags.Paragraph>
        Lorem Ipsum es simplemente el texto <Tags.Link href="google.com">Link text</Tags.Link> de relleno de las imprentas y archivos.
    </Tags.Paragraph>
</>
```

 </details>

------------------------------------------------

## How to use the widgets?

### Download the module 📥

Navigate to the path of the folder where you want to install the module and clone from the github

```sh
git clone https://github.com/PortiESP/MarkupWidgets.git
```

### Import the module 🧩

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

### Use the widgets 🖨️

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

### Wrapper & prop based widgets 💼

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

*If both options are used, the wrapper content will be priorized over the prop value*


But other widget like the `Img`, `UList`, *etc...*, this ones only support props to handle their content

### Styling the widgets

All the widgets support the `style` prop to handle the component style, anyways there are a few widgets that offer a bit more advanced features to style the diferent parts of the component

```html
<Title style={myStyles}></Title>
```

### FAQs

- **How do is escape characters inside a component**: 
```js
// The inner collons are parsed as part of a JS string and the interpolated in the JSX code
<> This is an {'"example"'} string </>
```

- **How do I add a new line in my paragraph, code, callout, etc...**:
```js
// The code is parsed as normal text but the <br/> will be parsed as HTML
<Code>
const myArray = {
    elem1,  <br/>
    elem2,  <br/>
    elem3   <br/>
}
</Code>
```

----------------------------------------------------------------

## Widgets list 📜
  - [`Title`](#title)
  - [`Paragraph`](#paragraph)
  - [`Link`](#link)
  - [`Img`](#img)
  - [`Code`](#code)
  - [`UList`](#ulist)
  - [`Callout`](#callout)
  - [`Quote`](#quote)
  - [`Colors`](#colors)
  - [`Hr`](#hr)
  - [`Br`](#br)
  - [`italic`/`bold`](#italic--bold-styles)
  - [`Button`](#button)
  - [`Toggle`](#toggle)
  - [`Carousel`](#carousel)
  - [`Block`](#block)


## Title

There are 4 types of titles/headings: *h1, h2, h3, h4* as *Title1, Title2, ...*

> ### **Props**
> - `background` - Add a background for the title
> - `text` - Text content
> - `style` - Styles object
> - `id` - Add an ID attribute

```html
<Tags.Title>
    Text template title
</Tags.Title>


<Tags.Title text="Text template title h1" />
<Tags.Title2 text="Text template title h2" background="#303030" />
<Tags.Title3 text="Text template title h3" />
```

*H1*

![Title example screenshoot](https://i.gyazo.com/b3e161f98a115577855b8a3568d005a3.png "Title example screenshoot")

*H2*

![Title example screenshoot](https://i.gyazo.com/be80368683cd5b505c9d99252a7bfdc7.png "Title example screenshoot")

*H3*

![Title example screenshoot](https://i.gyazo.com/ea1a204167804e222618fe92d15b6352.png "Title example screenshoot")


## Paragraph

Clasic paragraph to write text, also we can write special characters by adding them inside a JS string

> ### **Props**
> - `text` - Text content
> - `style` - Styles object
> - `id` - Add an ID attribute

```html
<Tags.Paragraph>
    Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
    archivos de texto. Lorem {'"Ipsum"'} ha sido el texto de relleno estándar de 
    las industrias desde el año 1500.
</Tags.Paragraph>


<Tags.Paragraph text="Text template title" />
```

![Paragraph example screenshoot](https://i.gyazo.com/dac24341490b8f99f7b0009c0c0754a7.png  "Paragraph example screenshoot")


## Link

The link widget is the same as the `<a>` tag but with its own styles

> ### **Props**
> - `href` - Target location of the link
> - `title` - Add a *title* attribute to the tag
> - `text` - Text content
> - `style` - Styles object
> - `id` - Add an ID attribute

```html
Lorem Ipsum <Tags.Link href="www.example.com">Link text</Tags.Link> de relleno.
```

![Link example screenshoot](https://i.gyazo.com/5fe3c4fb4c6119ea9423ac9643602622.png  "Link example screenshoot")


## Img

Display an image, this component can be used in 3 diferent ways based on the props
- Passing an image object imported from a path
- Passing the image path, the image will fit the parent container 
- Passing the image path and the `height` and `width` props

> The image aspect-ratio will respected no matter the option used

> ### **Props**
> - `img` - Image object/path
> - `alt` - Alt text
> - `title` - Add a *title* attribute
> - `width` - Width of the image
> - `height` - Height of the image
> - `hideCaption` - Hides the caption text shown when clicking the image
> - `style` - Styles object
> - `id` - Add an ID attribute

```javascript
import testImg from "./exampleImage.jpg"


<Tags.Img img={testImg} alt="Alt text"/>
<Tags.Img img="./images/image.jpg" alt="Alt text"/>
<Tags.Img img="./images/image.jpg" width="100px" height="50px" alt="Alt text"/>

<Tags.Img img={testImg} alt="Alt text" title="Title" caption="Caption"/>
<Tags.Img img={testImg} alt="Alt text" onClick={myCallback}/>
```

![Img example screenshoot](https://i.gyazo.com/a3ef41ebe0be29818230b3b2791d4381.png  "Img example screenshoot")


## Code

The code widget provides a snippet of some piece of code, if you *hover* into the block an icon will appear at the *bottom-right* corner that you can click to copy the code to the clipboard, a copy message will appear when the button is clicked

There are also 3 decorative buttons at the *top-right* corder, this buttons are just decorative and dont have any action

> ### **Props**
> - `inline` - Flag for code string
>   - `color` - Color for the inline code
> - `caption` - Add a caption text for the code snippet
> - `text` - Text content
> - `style` - Styles object
> - `id` - Add an ID attribute

```html
// Example from the first image
<Tags.Code>
    git commit -m "This is a new commit" ./text.txt
</Tags.Code>

// Example for second image
// This is how we parse special characters, new lines and tabs
<Tags.Code>{`
export default (<br/>
    {"<>"}                            <br/>
        {"  "}<Flag>comment</Flag>    <br/>
    {"</>"}                           <br/>
)
`}</Tags.Code>


// Example with text prop
<Tags.Code text="Text template title" />
```

There is also an alternative prop to use this component for writtring *inline code*

```html
// Example from the second image
This is some content <Tags.Code inline>npm install react</Tags.Code> blablaba
This is some content <Tags.Code inline color="#ab124F">npm install react</Tags.Code> blablaba
```

> To add a new line in your code just type <br /> as the HTML tag

> Both options **allow** custom styles with the *style* prop

![Code example screenshoot](https://i.gyazo.com/83ab08f18b17588aa7fa03e7ee4c77cb.png  "Code example screenshoot")
![Code2 example screenshoot](https://i.gyazo.com/ca52db55395134fae205865957169e7e.png  "Code2 example screenshoot")
![Inline code example screenshoot](https://i.gyazo.com/ddeaea6b199729d98eaddeab84b1b538.png  "Inline code example screenshoot")



## UList

This widget take an array as a prop to generate the list

> ### **Props**
> - `items` - Array of the item strings
> - `itemStyle` - Style of the idividual items
> - `style` - Styles object
> - `id` - Add an ID attribute

```html
<Tags.UList items={myItemList} />
```

![UList example screenshoot](https://i.gyazo.com/b8006621f16f9438a8a6131177935b6b.png  "UList example screenshoot")


## Callout

This widget creates a text block to spotlight some text, it also can take a `label` prop to show a small text at the top of the block (*as show in the screenshoots*)

This widget can take 3 styles:
- **No label**, only the text
- **Predefined labels**, The `label` value can the following values (*warning, info, tip, danger*) with predefined styles
- **Custom label**, The label with custon text & color, but also custom styles

> ### **Props**
> - `label` - Text shown at the top in an outter block
> - `labelData` - Text, color, style (*Data taken here only when label='custom'*)
> - `text` - Text content
> - `style` - Styles object
> - `id` - Add an ID attribute

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
<Tags.Callout label="custom" text="Callout text" labelData={ text: "Secret", color="#10A5FE", style: [ "background-color: red", "border-radius: 20px"] } /> 
```

![Callout example screenshoot](https://i.gyazo.com/48442e0ad328a522487a5f856c08d1c8.png  "Basic callout example screenshoot")
![Callout example screenshoot](https://i.gyazo.com/9015635234d86070f35eee04ede0712f.png  "Warning callout example screenshoot")
![Callout example screenshoot](https://i.gyazo.com/dcd5e748b3ede14a40ae3cae11ae3ede.png  "Custom callout example screenshoot")
![Callout example screenshoot](https://i.gyazo.com/106ef547673da2507483068a098f4469.png "Danger example screenshoot")

## Quote

> ### **Props**
> - `title` Add a *title* attribute
> - `text` - Text content
> - `style` - Styles object
> - `id` - Add an ID attribute

Quote block, colors can be personalized with the `style` props

```html
<Tags.Quote title="Quote title">
    This is a template text for a quote element as a text prop
</Tags.Qoute>


<Tags.Quote title="Quote title" text="This is a template text for a quote element as a text prop" />
```

![Quote example screenshoot](https://i.gyazo.com/0147ed02d39c1cc7b0bee2cba7cc8341.png  "Quote example screenshoot")


## Colors


We can apply color styles to some piece of text by using the components of the `./tags/Colors.js`, this file contains the color components to apply colors to the wrapped text

> This file is not exported by the `./Tags.js` file and it needs to be imported manualy

There are 3 types of color here based on their component name:
- **Colors**: Colors by name (*`Yellow`, `Blue`, `Red`, etc...*)(*not all colors included*)
- **Color of context**: Colors that represent the meaning of the text, (*`Str`, `Cmd`, `Opt`, `Flag`*)
- **Custom color**: Personalized color (*`Color`*)

### Import module

```js
// Import necesary colors
import {Blue, Red, Orange, Color, Flag} from "./MarkupWidgets/Tags/Colors"
// Import default component: `Color`
import MyColor from "./MarkupWidgets/Tags/Colors"
```

If you want to rename the components you can use the *import as*
```js
import {
    Red as R,
    Blue as B,
    Green as G,
    Color as C,
    Flag as F
} from "./MarkupWidgets/Tags/Colors"
```

```html
// Example 
This is an <R>example</R> text to <F>try</F> the colors

// Nested
<Paragraph>
    This is an <R>example</R> text to <F>try</F> the colors
</Paragraph>
```
> Remember that we have imported the component colors as its initial letter

If we use the `Color` component we can pass only the CSS color name or the prop `color` with the value

```html
Lets colour the <C aquamarine>example</C> text
Lets colour the <C color="aquamarine">example</C> text
Lets colour the <C color="rgb(127, 255, 212)">example</C> text
```

*Example of the colors usage in a code widget*
 
![Code example screenshoot](https://i.gyazo.com/83ab08f18b17588aa7fa03e7ee4c77cb.png  "Colors example screenshoot")

*Syntax of the screenshoot*

![Code syntax screenshoot](https://i.gyazo.com/793b7d79515a6d87a61456df13b547e4.png "Colors example syntax screenshoot")



## Hr

Creates a simple horizontal line to divide content, it can also take parameter `small` to create a shorter line

> ### **Props**
> - `small` - Make shorter line
> - `style` - Styles object
> - `id` - Add an ID attribute

```js
<Hr />
<Hr small />
```

![Hr screenshoot](https://i.gyazo.com/01e94914817f97017c3cd23c2f4f4399.png "Hr screenshoot")
![Hr small screenshoot](https://i.gyazo.com/58e556350c525804faf2f9aacd5f78c2.png "Hr small screenshoot")



## Br

Just a line break, it can take the prope `large` to get a larger space

> ### **Props**
> - `spacing` - Space height (*px*)
> - `id` - Add an ID attribute

```js
<Br />
<Br large/>
```

## Italic & Bold styles

To apply *italic* or *bold* styles to some text you can add it as you will do in HTML:
```js
<Paragraph>
    This is an <i>italic</i> word
</Paragraph>
```

## Button

Adds custommizable button, with optional icon and easy-access styling props for the most common attributes, for more specific ones use the `style` prop

Text content can be passed as a wrapped child or by the `text` prop, if 
text is **not** passed as a wrapped child the prop text must be passed

> ### **Props**
> 
> *All of the props are optional*
> 
> - `text` - Text content of the button
> - `icon` - This props receives an image as an object from an `import` statement
> - `id` - Add an ID attribute to the widget
> - `callback` - Callback function triggered when the button is clicked
> - `href` - URL to navigate when the button is clicked
> 
> *Button*
> 
> - `borderRadius` - Round the corners (px)
> - `background` - Background style of the button
>   
> *Icon*
> 
> - `iconScale` - Multiplier of the icon size (%): *Ex: 120%*
> - `iconInvert` - Invert the colors of the icon (0-100)
> - `iconBackground` - Background of the icon
>   
> *Text*
> 
> - `fontSize` - Size of the text (px)
> - `color` - Color of the text
>   
> *Object styles*
> 
> - `style` - Global styles of the widget, (*styles not recommended here*)
> - `styleButton` - Style of the inner div, (*button styles are recommentded here*)
> - `styleIcon` - Style of the icon image div
> - `styleText` - Style of the text div
> - `styleHover` - Style of the button when hover (***css syntax***)
> - `styleActive` - Style of the button when active (***css syntax***)
  
![Example button screenshoot](https://i.gyazo.com/663775cea1dd63fd79ec1524c5d4d9b4.png)

```js
// Import icon from path
import icon from "./myIcon.png"

<Tags.Button // Some example props
    text="Example" 
    icon={icon} 
    callback={myCallback}
    borderRadius="10px" 
    iconScale="140%" 
    iconInvert="100" 
    styleActive="background: red;"
    styleButton={{padding: "30px"}}
/>

```


## Toggle

This widget can expand to show more content

> ### **Props**
> - `title` - The title is shown always, wont be hided
> - `background` - Background of the container
> - `backgroundHover` - Background of the header when hover
> - `arrowColor` - Color of the toggle arrow
> - `arrowSize` - size of the toggle arrow (*use units*)
> - `color` - Color of the title text
> - `fontSize` - Font size of the title (*use units*)
> - `style` - Styles wrapper object
> - `id` - Add an ID attribute

```js
<Tags.Toggle title="Example toggle">

    <Tags.Callout label="info" >
        This is a custom callout block
    </Tags.Callout>
    <Tags.Paragraph>
    Lorem Ipsum es simplemente el texto <Tags.Link href="google.com" title="ggg">Link text</Tags.Link> de relleno de las imprentas y archivos.
    </Tags.Paragraph>
    <Tags.Quote title="Quote title children">This is a template text for a quote element as a children</Tags.Quote>
    
</Tags.Toggle>
```

![Toggle screenshoot](https://i.gyazo.com/0830c1813eabefd9da15bcba21870513.png "Toggle screenshoot")
![Toggle screenshoot](https://i.gyazo.com/20e234fd89847e9ce8aa3eb9db86daae.png "Toggle screenshoot")


## Carousel

The content carousel will display an infinite number of contents as cards, 3 cards are displayed at the same time while the rest is hided, the content can rotate in any direction infinitely, to navigate through the rest of the content cards you can use the arrows, the bubbles or clicking on the side cards

> ### **Props**
> - `cards` - Array where each index holds the content of one card
> - `callback` - This function will be called when the usesr clicks the central card
> - `default` - Index of the card that will be show in the center
> - `spacing` - This value detemine the distance between the side cards and the center (*use units*)
> - `duration` - Duration of the spinning animation
> - `style` - Styles object
> - `id` - Add an ID attribute


```js
<Tags.Carousel 
    callback={ i => console.log(i)}
    spacing="80%"
    cards={[
        <Tags.Title key="" text="Title 1"/>, 
        <Tags.Title key="" text="Title 2"/>, 
        <Tags.Title key="" text="Title 3"/>, 
        <Tags.Title key="" text="Title 4"/>, 
        <Tags.Title key="" text="Title 5"/>, 
        <Tags.Title key="" text="Title 6"/>, 
        <Tags.Title key="" text="Title 7"/>
    ]}
/>
```

![Carousel screenshoot](https://i.gyazo.com/eea44e2fba65056d98d872de379585dd.png "Carousel screenshoot")


## Block

This widget is really simple, it just wraps content in a box to diferenciate from the code around

> ### **Props**
> - `background` - Background of the block
> - `style` - Styles object
> - `id` - Add an ID attribute

```js
 <Tags.Block>
    <Tags.UList items={["Item 1", "Item 2", "Item 3", "Item 4"]}/>
    <Tags.Img img="/example1.jpg" height="300px" width="500px" alt="Alt text" caption="Enviorement"/>
</Tags.Block>
```

![Block screenshoot](https://i.gyazo.com/9c0f2719368abf3ccee472c50d8ba654.png "Block screenshoot") 