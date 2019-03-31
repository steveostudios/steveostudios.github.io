---
title: Top 3 Kramdown extras
date: 2015-05-02
tags: ["jekyll", "markdown"]
---

Markdown is awesome and definitely one of the main reasons why I wanted to start blogging in Jekyll (yes, I know you can do Markdown in other platforms, but this is a little more literal which is why I think I like it).

That said, I'm exploring other _extra_ markdown features that I can do on my site, so I decided to list a few of my favorites.
I'm using [kramdown][1] as my markdown processor. It's the one that came with my theme so I can't say whether it's better than [redcarpet][2] or not, but I'm oblivious as of the moment.

## 1. Footnotes

> ... a footnote marker can be created by placing the footnote name in square brackets. The footnote name has to start with a caret (^), followed by a word character or a digit and then optionally followed by other word characters, digits or dashes.

For example:
`This is some text.[^1]`
translates to:

This is some text.[^1]

Where you want the footnotes to show up, simply put:

`[^1]: Some *crazy* footnote definition.`

{::comment}
This text is completely ignored by kramdown - a comment in the text.
{:/comment}

(Look are the bottom of this page to see the rendered footnote)

## 2. Links

So far my favorite way to make links is a inline, using a reference number, and then creating a list at the bottom of my page.

For example:
`Here is a link to [Google][1].`
translates to:
Here is a link to [Google][3].

At the bottom of the page, simply define the links:
`[1]: http://google.com`

## 3. Blockquotes

To make a blockquote, simply type a > marker and then the quote

For example:

```
> “True humility is not thinking less of yourself; it is thinking of yourself less.”
> <cite>-― C.S. Lewis, *Mere Christianity*</cite>
```

translates to:

> “True humility is not thinking less of yourself; it is thinking of yourself less.”
> <cite>-- C.S. Lewis, _Mere Christianity_</cite>

---

[^1]: Some _crazy_ footnote definition.

[1]: http://kramdown.gettalong.org/syntax.html
[2]: https://github.com/vmg/redcarpet
[3]: http://google.com
