---
title: CSS Custom fonts in Windows
date: 2011-06-24
---

Apparently either IE or something in Windows doesn't like custom fonts in CSS. I discovered this while trying to place a custom font in a Titanium Desktop app using the (so I thought) standard:

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.ttf");
}
```

This works great in Firefox and Safari, as well as Titanium's application, until I tried it in Windows. Apparently it doesn't like .ttf's. This [website][1] outlines a little about why Windows doesn't like .ttf's, which lead me to this [handy site][2] that you can use to convert your font to all standards and it outputs a CSS for you to use. Here is mine:

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.eot");
  src: url("myfont.eot?#iefix") format("embedded-opentype"), url("myfont.woff")
      format("woff"), url("myfont.ttf") format("truetype"), url("myfont.svg#MyFont")
      format("svg");
  font-weight: normal;
  font-style: normal;
}
```

Wallah! Magically it works. I don't understand why, though.

[1]: http://randsco.com/index.php/2009/07/04/p680
[2]: http://www.fontsquirrel.com/fontface/generator
