
# MarkupWidgets docs

The MarkupWidgets module is a packet of React components (widgets) that provides more tags for building web pages that the programmer can use as default but also customize the base component.

### Features

- Fully customizable
- Interactive widgets
- Prop | wrap based content
- Nice designs

### *Example page:*

![Screenshoot page 1](https://i.gyazo.com/d6d15a8a876deedf5358e82d18a3b094.jpg)
![Screenshoot page 2](https://i.gyazo.com/a9e96bbb6ab3c3af088d3583531b0d9b.jpg)
![Screenshoot page 3](https://i.gyazo.com/edc26983da335f72ac784db9fc531808.png)


## Widgets list

- Title
- Title2
- Title3
- Paragraph
- Link
- Img
- Code
- UList
- Callout
- Quote


## Title

There are 3 types of titles/headings: *h1, h2, h3*

```html
<Tags.Title>
    Text template title
</Tags.Title>


<Tags.Title text="Text template title h1" />
<Tags.Title2 text="Text template title h2" />
<Tags.Title3 text="Text template title h3" />
```


## Paragraph

```html
<Tags.Paragraph>
    Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
    archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de 
    las industrias desde el año 1500.
</Tags.Paragraph>


<Tags.Paragraph text="Text template title" />
```


## Link

```html
Lorem Ipsum <Tags.Link href="www.example.com">Link text</Tags.Link> de relleno.
```


## Img
```javascript
import testImg from "./exampleImage.jpg"


<Tags.Img img={testImg} alt="Alt text"/>
```


## Code

```html
<Tags.Code>
    git commit -m "This is a new commit" ./text.txt
</Tags.Code>


<Tags.Code text="Text template title" />
```


## UList

```html
<Tags.UList items={myItemList} />
```


## Callout

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

```html
<Tags.Quote title="Quote title">
    This is a template text for a quote element as a text prop
</Tags.Qoute>


<Tags.Quote title="Quote title" text="This is a template text for a quote element as a text prop" />
```