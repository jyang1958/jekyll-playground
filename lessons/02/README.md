# 02: markdown转换成html

如果你完成了[00: 准备工作](https://github.com/bigdata-mindstorms/jekyll-playground/blob/gh-pages/lessons/00/README.md)， 
在[这个目录](https://github.com/bigdata-mindstorms/jekyll-playground/tree/gh-pages/public)下就应该有你的个人子目录了。

请在**你的子目录里面**建立两个不同的文件.

- `markdown.md`

```markdown
# Hello world
```

- `html.md`
```markdown
---
---
# Hello world
```

你们可以看到两个文件的后缀都是`.md`, 而且除了开头的两行，内容完全一样。

这是Jekyll的一个约定，有了[这个头信息](http://jekyll.bootcss.com/docs/frontmatter/)
（为了简单起见，我们这里头信息里面的内容是空的），Jekyll就会根据文件后缀自动进行转换，
这个例子是`.md`到`.html`的转换，也就是：

```markdown
# Hello world
```

```html
<h1 id="hello-world">Hello world</h1>
```

另外修改你前面建立的`README.md`, (我的在[这里](https://github.com/bigdata-mindstorms/jekyll-playground/blob/gh-pages/public/ontouchstart/README.md)), 
在里面放生成的网址，像这个样子： （先照:cat:画:cat:，能你们把基本功熟悉以后再照:cat:画:tiger:)

```markdown
http://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/

https://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/

http://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/markdown.md

http://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/html.html
```

完成后请把你的`README.md`网址按照例子贴到 
[作业区: markdown转换成html](https://github.com/bigdata-mindstorms/jekyll-playground/issues/4)。
