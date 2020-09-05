---
title: PlainTasks/Listacular Connection
date: 2015-05-09
tags: ["markdown"]
---

A few days ago I wrote about how [Listacular is my go-to list making app][1] and using [PlainTasks in my workflow][2]. If you haven't already, read up on those. Otherwise this is complete gibberish.

One problem I ran into with my new workflow is that tasks don't show up properly going between apps. PlainTasks by default uses boxes and checks for todos, where Listacular uses dashes and x's.

No worries - in Sublime this is _easy_ to fix!

In Sublime Text go to Sublime Text > Preferences > Package Settings > PlainTasks > Settings - User
Then add the following lines in the `{ }`'s :

```
"open_tasks_bullet": "-",
"done_tasks_bullet": "x"
```

Now all PlainTasks tasks and Listacular tasks will show up the same! Boom!

[1]: /listacular
[2]: /plaintasks
