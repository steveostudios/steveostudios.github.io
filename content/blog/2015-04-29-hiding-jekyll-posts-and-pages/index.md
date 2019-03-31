---
title: Hiding Jekyll Posts and Pages
date: 2015-04-29
tags: ["jekyll"]
---

You can set a Jekyll page or post to be hidden by adding `published: false` to the front matter.

Super easy!

The post/page will not go through the generator, so it's not live anywhere (you can't preview it).

I did find that if you want to preview a _page_ without it adding the link to the site header you can add `hide: true` to the front matter. Although, I'm not sure yet if this is specific only to my theme or if it's a Jekyll standard.
