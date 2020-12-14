## Git - a VCS (version control system)

-   Git is the industry-standard version control system for developers
-   Version control allows for safe collaboration of code
-   Git creates "snapshots" of the current state of the code base. It allwos you to time travel and go back to previous history. You can also rollabck to a specific spot in time.
-   a VCS allows you to create different versions of code and "travel" between different versions of the code. It also allows mutliple people to work on the same code without conflicts...or at least conflicts that aren't resolved before causing issues.
-   A "snapshot" of the code is called a `commit`. Code is added (`git add`) to the staging area from the working directory.
-   GitHub is a platform to use Git
    Use Git commands to help keep track of changes made to a project:

        -   `git init`  creates a new Git repository
        -   `git status`  inspects the contents of the working directory and staging area
        -   `git add`  adds files from the working directory to the staging area and changes the file from untracked to tracked
        -   `git diff`  shows the difference between the working directory and the staging area
        -   `git commit`  permanently stores file changes from the staging area in the repository
        -   `git log`  shows a list of all previous commits
        - `git remote add` tells a local repo about a remote repo (that we can send/retrieve code from)
        - `origin` is a nickname for the full URL where the repo is located
        - `git remote -v` to see a list of remotes available
        - `git push` is how code is sent from a local repo to a remote one
        - `git push -u` allows us to only have to type `git push` in the future instead of `git push origin main`

## GitHub - a place to use a VCS

-   GitHub is a web-based Git repository hosting service. It's a tool to allow collaboration on shared Git repos. There are other Git repo hosting services but GitHub is the industry standard
-   GitHub hosts repositories and is therefore also a backup system
-   GitHub specific comments include `forking` and `pull requests`

### Repository setup

-   create a new repo on the command line
    ````
    echo "# play" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/rmklaus12/play.git
    git push -u origin main```
    ````
-   push an existing repo from the command line
    ```
    git remote add origin https://github.com/rmklaus12/play.git
    git branch -M main
    git push -u origin main
    ```

### GitHub Workflow

The typical workflow on GitHub is:

-   `fork` a repo on GitHub - making a copy of someone else's remote repo and add it under our usrname so we can push code to it
-   `clone` a remote repo - download code from a forked remote repo onto a local computer (a local repo). `git clone` makes a directory and does the `git init` and `git remote` step automatically.
-   issue a `pull request` - a PR or pull request is a request for someone with permissions on a remote repo to evalute your code and determine if it can be merged or not.
-   Changes will need to be `pull`ed from remote repos on a regular basis. To do this:
    1.  Make sure everything is committed first locally
    2.  Pull the latest code from GitHub (from a new remote which we will call `upstream`)
    3.  Fix merge conflicts if there are any
    4.  Push the code back up to our `origin` repository
-   `origin` is a remote that corresponds to a forked repo. `origin` does NOT automatically update with changes made by others.
-   `upstream` is a remote that allows us to `pull` from the original repo
    -   `git remote add upstream git@github.com:rmklaus12/all-about-git`
    -   `git pull upstream master`
    -   `git push origin master`
-   `git pull` is a combo of two commands, `git fetch` and `git merge`

### Checkout and Reset - or how to undo changes

-   `git checkout` - remove changes from files in the working directory, before they are staged. `git checkout NAME_OF_FILE`
-   `git clean` - removes files that are untracked or unmerged. `git clean -df`
-   `git rm --cached`- moves files from staging area back to working directory. `git rm --cached NAME_OF_FILE`
-   `git reset` - removes files from the staging area AND working directory. Can also undo a commit with `git reset`
    -   `--soft` - moves files commited back to staging area
    -   `--mixed` - moves files commited back to working directory. This is the default (no flags)
    -   `--hard` - undoes the entire commit (**use with caution!)**

### Branching

-   separate areas for certain use cases (bug fix, new feature, deployment, etc)
-   When on a team, you will not work on a single branch. You may have many different branches going at one time
-   `git branch` - shows a list of current branches
-   `git checkout -b NAME_OF_BRANCH`
-   `git branch -D NAME_OF_BRANCH`
-   `git branch -a` shows all branches including remote ones
-   Once done working on a branch, it needs to be `merge`ed onto the `main` branch. `git merge NAME_OF_BRANCH`

### Merging

-   `git merge` moves changes from one branch to another.
-   two merge methods are _fast foward_ and _recursive_
-   _fast foward_ is when git can easily tell when the commits happened and "put" one set of commits on top of another chronologically.
-   _recursive_ merge happens when different commits happen at different times on two branches so git cannot easily determine what order these commits happened in.
-   A _merge conflict_ happens when changes are commited by two or more users on the same file on different branches. A conflict is created because Git does not know which commit to go with. _"Hey human, you're asking me to put conflicting files in the commit history; I don't know how to resolve these conflicts, so you take care of it and let me know when you're done."_

### Stashing

-   `git stash` temporarily stores the state of the working directory
-   Git won't let a `pull` or `merge` go through if there are changes in the working directory. `git stash` lets you "stash" your changes in order to pull or merge in new changes.
-   It's a way of remembering changes withotu making an offiical commit
-   `git stash` - stash commits
-   `git stash list` - show list of stashed changes
-   `git stash apply` - move latest stashed change back into working directory but keep on list
-   `git stash pop` - move latest stashed change back to working directory and remove it from the list
-   `git stash show` - show the latest stash
-   `git stash show stash@{number}` - show a specific stashed change
-   `git stash pop/apply stash@{number}` - retrieve a specific stashed change
-

### Rebasing

### Diff tools

-   `git diff` - see changes in the working tree not yet staged for the next commit
-   `git diff --cached`- see changes between the staging area and the last commit
-   `git diff HEAD` - see changes in teh working directory since the last commit
-   `git diff ANOTHER_BRANCH` - compare with the latest code on another branch
-   `git diff HEAD~1 HEAD` - compare with the previous commit (add ~2, ~3, etc for older commits)

### SSH Keys

**Creating a key** 1. Open up Terminal. 2. Anywhere in Terminal paste the following `ssh-keygen -t rsa -b 4096 -C "PUT YOUR EMAIL HERE"` and replace "PUT YOUR EMAIL HERE" with the email you used to sign up with GitHub. 3. Once you are prompted with `Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]` press enter. 4. You will then be prompted to enter a passphrase. **Just press enter here** 5. You will then be prompted to enter a passphrase again. **Just press enter here as well** 6. Paste the following in terminal: `eval "$(ssh-agent -s)"`. If you do not see a `pid` number, start from the first step again. 7. Paste the following in terminal: `ssh-add ~/.ssh/id_rsa`. if you see an error message, start from the first step again. 8. Paste the following in terminal `pbcopy < ~/.ssh/id_rsa.pub`. 9. Head over to your GitHub account (make sure you sign in). 10. In the top right corner of any page, click your profile photo, then click Settings. 11. In the user settings sidebar, click SSH and GPG keys. 12. Click New SSH key or Add SSH key. 13. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air". 14. Paste your key into the "Key" field. (you can just right click and click paste or use a keyboard shortcut. The previous command `pbcopy` did the copying for you). 15. Click Add SSH key. 16. If prompted, confirm your GitHub password. 17. Anywhere in Terminal, type `ssh -T git@github.com` and if you see "Successfully authenticated" (ignore the rest of the message) you are good to go! If you do not see that, start from the beginning again.

### Resources

[Git-SCM](https://git-scm.com/)
[GitHub](https://github.com/)
