---
title: PlainTasks Refreshing
date: 2015-05-11
tags: ["markdown"]
---

A few days ago I wrote about how [Listacular is my go-to list making app][1] and using [PlainTasks in my workflow][2]. If you haven't already, read up on those. Otherwise this is complete jibberish.

Another issue I ran into with my new workflow is syncing. Dropbox automagically syncs everything, but Sublime doesn't. If I change my todos in my phone and the file is open on my computer then my computer won't reflect the changes. Dropbox is syncing but Sublime doesn't auto-refresh files. And this makes sense to me. That would be terrible. Then you could potentially lose all kinds of work all of the time without even knowing, because Sublime synced in-between you doing something. However, I didn't want to have to close my todo list everytime I shut my coputer lid or walk away from my desk.

So I set up a key-binding.

## Keybinding

I wanted to push `f5` at anytime and the file would magically sync and refresh. Here is how to do that:

In Sublime Text go to Sublime Text > Preferences > Key Bindings - User
Then add the following lines in the `{ }`'s :

```
"keys": ["f5"], "command": "revert"
```

[1]: /listacular
[2]: /plaintasks
