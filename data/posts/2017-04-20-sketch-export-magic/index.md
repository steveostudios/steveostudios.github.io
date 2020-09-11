---
title: Sketch Magic Export
date: 2017-04-20
tags: ["sketch"]
---

When I was using Photoshop/Illustrator for my asset workflow I had to set up all kinds of tricks to make sure things wound up in the correct folder with the correct file name. You know the drill; The endless process of selecting the right artboards or layers to export, save dialogs, output settings, overwriting files, dragging and dropping to the correct asset folder. Ugh.

Sketch has a few tricks up it’s sleeve that makes this process ridiculously easy and consistent. You can use the _layer name_ to specify a directory that the asset will export to? Yup! It’s hands-down one of my favorite magic tricks of Sketch!

Let’s say that you’ve made this super sweet icon.

![You’re right — that *is* a super sweet icon!](./sketch-export-magic-1.jpg)

You’ve set it up to export an SVG (good job!).

![Yay!](./sketch-export-magic-2.jpg)

You can use the layer name to specify not only the filename (myIcon), but the _output directory!_

![These layer names look a little funky — almost like paths…](./sketch-export-magic-3.jpg)

Sketch is ridiculously smart about this too!

- It will automatically overwrite your files by default.
- If the directory doesn’t exist it will create it for you.
- If layer name has several `/` then it will create all of the necessary directories that it needs.
- It even recognizes `../` as a parent directory and will traverse up! You can even do crazy complex traversing: `../../myFolderTwoFoldersBack`.

Check out this configuration:
![Look where all of these assets will go on a single export.](./sketch-export-magic-4.jpg)

## How to Export

When it comes to exporting, select the assets you want to export and then use the File > Export (⇧+⌘+E) to export only the selected assets.

![Yea — I want that icon in all of those places!](./sketch-export-magic-5.jpg)

Hit Export. Select the path that you’d like to output to:

![“Demo” — I’ll totally remember what that folder name is in 6 months…](./sketch-export-magic-6.jpg)

In my case everything will be exported relative to the “Demo” directory!

## Bonus trick

You can use this same trick _inside the export panel!_ The following will export an SVG in all of those folders (like before), plus create a `pngs` folder and put all of those folders/files in there.

![Multiple outputs with different folders.](./sketch-export-magic-7.jpg)

Sketch is ridiculously cool. You can save a ton of time and frustration by setting up your structure _within Sketch_, then let your computer do all of the sorting for you. After-all, isn’t that what computers are for?

Let me know if you have any other cool exporting tricks with Sketch!
