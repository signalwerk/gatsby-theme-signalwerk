---
title: Title
author: "Stefan Huber"
date: "2022-11-11"
layout: post
draft: false
hideInMenu: false
path: "/posts/example/"
tags:
  - "TagOne"
  - "TagTwo"
description: "Lead · Lead of the page"
---

import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';

## Intro
The template behaves like normal markdown text. However, there are some advanced functions. For more information see [Github](https://github.com/signalwerk/gatsby-theme-signalwerk).


## Table of Contents
```toc
exclude:
  - Table of Contents
from-heading: 2
to-heading: 6
```


## Table of contents (element)
The table of contents can be controlled via a `toc` (Table of Contents)  code block.
* `exclude` – what title should not appear in the table of contents
* `from-heading` – first heading to be output. `2` = `h2`
* `to-heading` – last heading to be output `6` = `h6`


### Code

````md
```toc
exclude:
  - Table of Contents
from-heading: 2
to-heading: 6
```
````

### View
see above
<!--
```toc
exclude: Inhaltsverzeichnis
from-heading: 2
to-heading: 6
``` -->



## Text
<Margin>

### Marginal columns

Marginal columns · Text in `<Margin></Margin>`-Tags.

</Margin>

Text · Normal text can be written as normal Markdown.


## Lists
### Code

````md
* Item A
* Item B
* Item C
````

### View
* Item A
* Item B
* Item C

## Numeric Lists

### Code

````md
1. Item 1
2. Item 2
3. Item 3
````

### View

1. Item 1
2. Item 2
3. Item 3

##  Code

Code can be entered either as block or inline.


### Code
````md
Inline `code`

```js
var kk = "kk";
```
````
### View

Inline `code`

```js
var kk = "kk";
```



## Footnotes

Text with footnotes can either be made with references, as usual in Markdown:

### Code
```md
_«Quote A»_[^quote-one]

[^quote-one]: ...
```

or inline
```md
_«Quote B»_[^hier der Text]
```

### View
_«Quote A»_[^quote-one]
_«Quote B»_[^hier der Text]


## List of figures

If you want to maintain the illustrations (or other directories) outside the footnotes, you can mark the footnotes with a group prefix (`:group:`):


### Code
```md
_Bild A_[^:fig:one]

[^:fig:one]: ...
```

or inline
```md
_Fig. B_[^:fig:hier der Text]
```
### View

_Fig. A_[^:fig:one]
_Fig. B_[^:fig:hier der Text]


## Quotes
Paragraphs with quotations can be specially marked.

### Code
```md
> Text here.[^quote-one]

```

### View
> Text here.[^quote-one]


## Pictures
If there is an empathized text (`*text*`) directly below an image, this text is given the formatting for captions.




### Code
```md
![Cat](./img/header.jpg)
*Wow so miau. Much cute.[^:fig:pic-source]*
```

### View
![Cat](./img/header.jpg)
*Wow so miau. Much cute.[^:fig:pic-source]*


## Video
Videos should be packed into a responsive `Box`. The ratio can be 16:9, 4:3 or 3:2.

### Code
```md
<Box ratio="16:9">

<iframe src="https://player.vimeo.com/video/169809377" frameborder="0"></iframe>

</Box>
```

### View

<Box ratio="16-9">

<iframe src="https://player.vimeo.com/video/169809377" frameborder="0"></iframe>

</Box>




## Grid – full width
### Code

```md
<Grid>

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Grid>
```

### View

<Grid>

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Grid>

## Grid – full width with background

### Code

```html
<Grid background>

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Grid>
```

### View


<Grid background>

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Grid>


## Grid – with columns

### Code
```md
<Grid>
<Column start="1" end="7">

### Cat Column A
...

</Column>
<Column start="7" end="13">

### Cat Column B
...

</Column>
</Grid>
```

### View

<Grid>
<Column start="1" end="7">

### Cat Column A
![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Column>
<Column start="7" end="13">

### Cat Column B
![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Column>
</Grid>




<!-- references text-->

<!--
Vorname Nachname, [Titel der Seite](https://www.google.com/) (Abrufdatum: dd. mm. yyyy).
Vorname Nachname, Buchtitel, Auflage, Verlag, Erscheinungsort Jahr, erste Seite – letzte Seite.
-->

[^quote-one]: Example for footnote

<!-- references figures-->
[^:fig:one]: Example for list of figures.
[^:fig:pic-source]: Example of [lorempixel.com](http://lorempixel.com/800/600/cats/1)



## References
```references
```

## List of figures
(Can also be maintained as references)

```references
# gets repalced with footnotes
group-include: fig

inline-link-prefix: 'Fig. '

reference-link-prefix: '↑ Fig. '
reference-link-suffix: ''

reference-text-suffix: ' – '
```
