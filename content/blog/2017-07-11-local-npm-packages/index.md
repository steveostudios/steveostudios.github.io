---
title: Local NPM Packages
date: 2017-07-11
tags: ["npm"]
---

There are a few scenarios when you may want to “publish” npm packages locally.

1. Let’s say you’re working on a little module that you don’t really want up on the world-wide-web (at least yet).
1. You may want to keep a package _private_ but don’t yet have the mulah to fork over to npmjs.org to buy a private package subscription.

Well it turns out it’s pretty easy to “host” a package locally while you’re developing it. Once you have the module made, including a `package.json` and all of it’s working features, you can add it to another project by doing this little number:

```shell
npm i --save ./../packages/my-package -D
```

This will, in turn, add this to your `package.json`:

```json
// package.json
  "dependencies": {
    ...
    "my-package": "file:../packages/my-package",
```

Pretty sweat, huh?!

## Major drawbacks

Now, this isn’t a perfect solution. But you can use it by yourself in development until you’re ready for the big time! Here are some of the drawbacks that I have found:

### Updating is a bit of a pain

npm looks for semver version numbers. If you look above, you’ll notice that it doesn’t have them like a normal package. Therefore local packages don’t update automatically. If you make a change to your local dependency then you have to force update it. That’s okay. The file reference is saved in your `package.json`, so npm know where to find it. You’ll need to manually delete your `node_modules` folder and recreate it, ensuring that everything is up-to-date (including the local package you added).

```shell
rm -rf node_modules
npm install
npm start
```

## Doesn’t work for teams

You can’t “host” this on a server like this to share. I mean, you probably can, but it would be super inefficient and hacky. If you’re trying to do that then you should look into either paying \$7/mo/user over at npm or setting up your own [Sinatra][] server.

It is _private_ though! Ain’t nobody checking this code out.

There you go. It turns out you can “publish” npm packages locally.

[sinatra]: https://github.com/websperts/sinatra.js "Sinatra"
