---
title: Creating a Jekyll Workflow Part 1
date: 2015-04-16
tags: ["jekyll"]
---

As a designer (aka programming noob), I want to create a workflow that simplifies some of the things that writing in Jekyll requires. I don't write in vim, I still have a conceptually hard time with git, and terminal still freaks me out. I wanted a workflow were I get the benefits of Jekyll, but with a designer mentality.
That said, starting terminal, finding the directory, running Jekyll and serving up localhost in my browser seems like it could be simplified (programmers are lazy, right?). So I set out to write a script to do this for me.

I had trouble with just one script, so I actually wrote two, one cueing the other. These are just text files with the `.command` file extension. The first one I called `JekyllServe.command`.

```shell
cd /path/to/site/folder
jekyll serve
```

(you can see where the creative name came from, right?)

All it does is start the server. Simple, right? When you double click this it opens up terminal and executes those two lines. I could have stopped here, but I also wanted to open up Chrome as well, to `http://localhost:4000`.

The second script I called `LocalStartup.command`. This is the one I will generally double-click when I am ready to start writing a post or edit my local copy of the site.

```shell
open /path/to/JekyllServe.command
sleep 2
open http://localhost:4000
exit 0
```

This is the actual "app" that I run. As you can see, when you double-click this it will first run the jekyll serve command from `JekyllServe.command`, then wait 2 second (for the server to finish starting), then open your browser to `http://localhost:4000`.

I'm going to continue to perfect this later, like add a "publish" command, and hopefully knock this down to one file, but as of right now, here it is!
