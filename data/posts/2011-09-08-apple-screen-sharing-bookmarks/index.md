---
title: Apple Screen Sharing Bookmarks
date: 2011-09-08
tags: ["macos", "osx"]
---

If I remember correctly (and I like to think that I do), you used to be able to bookmark computers that you VNCed into with Apple’s Screen Sharing. However, this simple feature seems to be missing since Snow Leopard and I have been forced into memorizing IP addresses of all of our production machines…

Today I found a nifty little trick to kindof solve this issue. You can create an Apple Screen Sharing bookmark in Safari, using the following scheme:

vnc://ipaddress.of.machine or vnc://ipaddress.of.machine:port

Pretty cool! Safari knows to open the connection and look in the keychain for the user and password…

Another cool thing, is you can drag the bookmark out of Safari, into Finder, and create a folder with all of your machines that you remote into, into it. Seems a little crazy to have to do it this way, but it looks like it will work just fine. Now, I should probably find some way to lock/encrypt that folder...
