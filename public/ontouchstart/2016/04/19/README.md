# Single Page Prototypes with Jekyll Front Matter

In this lesson we learn how to make single page prototypes with [Jekyll Front Matter](https://jekyllrb.com/docs/frontmatter/).

## Blank Page

Here is a [blank page](https://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/2016/04/19/blank.html).
The source you can view in the browser is following:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```
which is almost exactly like [our source](blank.html) except the empty [frontmatter](https://jekyllrb.com/docs/frontmatter/).

```
---
---
```

## Blank Page with a Title

Here is a [blank page with a title](https://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/2016/04/19/blank_title.html).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>blank</title>
  </head>
  <body>
  </body>
</html>
```
the source is [here](blank_title.html).

Notice how we define and use [custom variable](https://jekyllrb.com/docs/frontmatter/#custom-variables) `{{ page.title }}` in the source.

## Headings 

Here is a [page with headings](https://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/2016/04/19/headings.html).
