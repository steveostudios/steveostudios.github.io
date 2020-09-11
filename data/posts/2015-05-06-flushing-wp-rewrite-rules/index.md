---
title: Flushing WP Rewrite Rules
date: 2015-05-06
tags: ["wordpress"]
---

In all of my adventures yesterday in reworking the permalinks I ran into some caching issues. It took me a while to figure out that it _was_ a caching issue. Anyway, I came across [this article][1] which tells how to flush the WP rewrite rules.

```
/* I've lied to you, there are 2 solutions */

/* A function: */
flush_rewrite_rules();

// And a method of the global object $wp_rewrite
global $wp_rewrite;
$wp_rewrite->flush_rules();
```

[1]: http://andrei-lupu.com/wordpress/dont-forget-to-flush-your-rewrite-rules/
