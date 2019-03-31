---
title: Git Workflow for Solo Development
date: "2019-04-09"
---

This is part two of a series on on using Git as a solo-developer. If you haven't already, I'd recommend you read part one.

In this article I'm going to go over my workflow when it comes to using Git and writing code. I'm by no means an expert at this, so feel free to adapt anything you see here to suit your needs!

## Super Board

I feel like my brain thinks in kanbans boards. They are really clean and easy to organize your thoughts and plans, especially when the execution process is repetitive. And when it comes to a specific tool, GitLab's Issue Boards are the second best kanban in my opinion (one being Trello). Which is great, because I already use GitLab as my remote repository and my issue tracker.

I start my day going to my pinned GitLab Issue Board tab. I'll be checking this periodically through my day to regain perspective on my entire project, as well as have it ready and waiting to accrue new features an bugs as I come across them.

## The Flow

### Get in the zone

☑️ Coffee

☑️ Good music

☑️ Quieted head-space

### Find the task

Now that I am ready to go, I peruse the issue board in GitLab. I find what needs to be done next (based on estimated time to complete and priority).

### Start the task

Next I do something like this:

```shell
git checkout develop
git pull
git checkout -b 42-fix-file-importer
git push --set-upstream origin

```

Actually, because I have aliases set up for my workflow, it looks something like this:

```shell
gcd
gpl
gcb 42-fix-file-importer
gpsup
```

Let's break this down:

- `git checkout develop` and `git pull` makes sure that I have to latest build of my app (which I should since I'm the only person working on it, but just in case). As a side note, I work off of the `develop` branch and use `master` only for my production releases.
- `git checkout -b 42-fix-file-importer` creates a new branch. The name of the branch could be anything, but I find it super helpful to prefix it with the issue number automatically assigned by GitLab's Issue Board. I also make sure to give it a name that I can associate with the bug or feature later.
- `git push --set-upstream origin` pushes this new branch to my remote repository. Later I can just `git push` but the first time you push you need to create the branch on the remote repo. I find it easiest to do this all at once, instead of after I'm ready for my first commit.

### Let's code!

Now is the follow a steady ritual of finding where I need to place code, mistype it four or five times, test, beat my head against the desk, try again, figure it out, and dance around… Standard coding.

### Found a bug 🐞

While I am working on something, I force myself to not fix every bug I find when I find it, but instead create an issue for it. This may seem counter-intuitive, but I find it helps for two reasons:

1. It forces me to stay focused on the task at hand, instead of going down a rabbit trail of improvements. Because, once I fix that issue I'll remember that that bug also exist somewhere else too. And in that file I forgot to use my new _new_ organization structure… NO! Create an issue! Write down what I am thinking in the description and then move on. If the bug is so easy to solve right now, it should be no problem later!
1. It means that this branch remains pure. The commits that I create only have to do with the that particular issue. I'm not fixing the file importer AND messing with CSS somewhere else, in the same issue. If (when) I ever need to go back in my git history, I'm not undoing completely unrelated things!

I generally use VS Code's Git panel for committing, since I don't like to leave my editor when I don't have to. I'm not sure if it's best practice or not, but I like to push my code after every few commits. It would suck if I spilled my coffee on my computer and that was the only place my recent work lived, so I make sure I push it to my remote repo.

---

### All done

Once in my done with that feature or bug, I `git push` one final time. I then create a merge request to merge that branch back into `develop`. The trick here is to use the sick GitLab Workflow plugin. Simply hit CMD+Shift+P then type "create" and I'll get a match for "GitLab: Create new merge request on current project". I hit return and my browser opens up to a merge request already waiting for me to hit merge! To finalize the merge request, check "delete branch", and apply the merge.

### Check it off

Because I prefixed this branch with the issue number, GitLab is smart enough to automatically **close the issue** when the branch is merged. This is SUPER helpful, because in one fell swoop I finish my code, merge it, and check off a todo! I feel like a samurai every time!

---

I'll go over my particular workflow in another post, and show you specifically how I use Git not only as my code repository, but also my task list. Stay tuned!

[github]: http://github.com/ "Github"
[gitlab]: http://gitlab.com/ "Gitlab"
[bitbucket]: http://bitbucket.com/ "Bit Bucket"
[asana]: http://asana.com/ "Asana"
[wunderlist]: http://wunderlist.com/ "Wunderlist"
[oh-my-zsh]: https://github.com/robbyrussell/oh-my-zsh "Oh My ZSH"
[microsoft vs code]: https://code.visualstudio.com/ "Microsoft VS Code"
[git history]: https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory "Git History"
[gitlab workflow]: https://marketplace.visualstudio.com/items?itemName=fatihacet.gitlab-workflow "Gitlab Workflow"
