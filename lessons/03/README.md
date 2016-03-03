# 03: page_data 

如果你完成了[00: 准备工作](https://github.com/bigdata-mindstorms/jekyll-playground/blob/gh-pages/lessons/00/README.md)， 
在[这个目录](https://github.com/bigdata-mindstorms/jekyll-playground/tree/gh-pages/public)下就应该有你的个人子目录了。

请在**你的子目录里面**建立以下文件.

- `page_data.md`

```markdown
---
---
{{ page }}
```

- `page_data.txt`
```markdown
---
---
{{ page }}
```

你们可以看到两个文件的除了后缀,内容完全一样。

根据Jekyll的一个约定，有了[这个头信息](http://jekyll.bootcss.com/docs/frontmatter/)
（为了简单起见，我们这里头信息里面的内容是空的），Jekyll就会根据文件后缀自动进行转换，
这个例子是`.md`到`.html`的转换，也就是：`page_data.md => page_data.html`。但是`.txt`文件没有
定义转换器，所以文件转换后的文件还是`.txt`。

但是这里我们介绍一个新的概念
```
{{ page }}
```
这是Jekyll的另一个约定，当源文件有了[头信息](http://jekyll.bootcss.com/docs/frontmatter/) (哪怕是空的)，
转换时每一页就有一个特殊的[变量](http://jekyll.bootcss.com/docs/variables/): `page`。用`{{ page }}`这样的特殊格式就能显示出来。
生成的网址和前面的规律一样：

https://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/page_data.html
(有兴趣的同学可以在浏览器里看看这个文件的源代码，和下面的文件是不是不一样？)

https://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/page_data.txt

`README.md` 于是就可以加上上面两条。

我们还可以使用`| jsonify` 过滤器把数据以json格式输出。 

`page_data.json`
```
---
---
{{ page | jsonify }}

```

生成的网址：

https://bigdata-mindstorms.github.io/jekyll-playground/public/ontouchstart/page_data.json

具体的例子看我更新的README.md: 
https://github.com/bigdata-mindstorms/jekyll-playground/blob/gh-pages/public/ontouchstart/README.md


[03 练习区](https://github.com/bigdata-mindstorms/jekyll-playground/issues/5)
