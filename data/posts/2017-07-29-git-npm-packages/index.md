---
title: Git npm Packages
date: 2017-07-29
tags: ["git", "npm"]
---

A few weeks ago I posted about [local-npm-packages][].

While this is cool, one of the major drawbacks that I noted is that you can't share or collaborate with this. The package is completely local.

After that post I decided I need to post that package somewhere, but I'm not committed enough to needing a private npmjs subscription. I wanted to find out whether or not I can post that package on a server I already own. It turns out that the wonderful folks at npm have provided a way for this!
You can host a package a number of different ways and use npm to pull those packages, even from other sources.

```shell
npm i git+ssh://git@gitlab.com:organization/my-package#1.0.0 -D
```

## Here are some pros to this:

1. It can be private or public, depending on the repo.
1. If you have free private repos then it's free!

## ...and the cons:

1. The semver distribution isn't as cool. It's using a git repo and not a package version, so you have to use tags to version your package. From what I can tell it's just not as polished.
1. npm has done a ton of amazing performance tricks to make npm sing. You don't get that out of the box whan you host it yourself on a git service. Which is totally fair. Their made to server
1. git, which is not npm packages!

You can find more info over at the [npm docs][].

[local-npm-packages]: /local-npm-packages "Local NPM Packages"
[npm docs]: https://docs.npmjs.com/cli/install "npmjs docs"
