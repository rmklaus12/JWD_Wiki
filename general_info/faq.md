JWD FAQs

## Table of Contents

[Git](https://docs.google.com/document/d/18cHoOFS2C1B79FKARbahIWf4MTjOVUrcYt1LHN_4CaE/edit#heading=h.wiy7hb628ory)

[Git Workflow Cheat Sheet](https://docs.google.com/document/d/18cHoOFS2C1B79FKARbahIWf4MTjOVUrcYt1LHN_4CaE/edit#heading=h.4v7fz0g2mha6)

[GitHub project worksheet](https://docs.google.com/document/d/18cHoOFS2C1B79FKARbahIWf4MTjOVUrcYt1LHN_4CaE/edit#heading=h.lot223s5sszc)

[Terminal / Command Line](https://docs.google.com/document/d/18cHoOFS2C1B79FKARbahIWf4MTjOVUrcYt1LHN_4CaE/edit#heading=h.5wiuqbxw2ktc)

[Visual Studio Code](https://docs.google.com/document/d/18cHoOFS2C1B79FKARbahIWf4MTjOVUrcYt1LHN_4CaE/edit#heading=h.bc82sm4vktqe)

This document will support you through the JWD program and we highly recommend you print this out or keep handy for easy referral.

As these questions are a creation of each of our cohorts and the questions you ask, check the shared document link for updates.

This FAQ is kept simple to allow you to find information quickly. If you need additional help or support don’t hesitate to reach out to your instructors or tech coach.

## Git

Git is a free and open-source version control system that provides safe and powerful collaboration. While git is the control system itself, there are several platforms on which to use git. By far the largest and most widely used platform is GitHub, which we use here at Generation. BitBucket is another well-known platform. Git and GitHub are often used interchangeably, so it is important to understand the differences to not get confused as you learn. Remember that ‘git’ and ‘GitHub’ are not the same thing!

Commonly used commands

-   `git status`
    -   Shows status of changed code in local git repo; either changed and not staged, or staged and not committed.
-   `git remote -v`
    -   Shows a list of available remotes. This helps you determine if you need to push/pull from ‘upstream’, ‘origin’ or something else. Remember, remotes can have any sort of name!
-   `git log`
    -   Shows a list of all previous commits
-   `git branch`
    -   Shows a list of current branches
-   `git branch -D <branch-name>`
    -   deletes given branch name
-   `git checkout`
    -   Removes changes from files in the working directory before they are staged
-   `git checkout -b <branch-name>`
    -   Switches to given branch name

Resources

-   [Git documentation by Atlassian](https://www.atlassian.com/git/)
-   [GitHub Learning Lab](https://lab.github.com/)
-   [Bitbucket vs GitHub](https://www.upguard.com/blog/bitbucket-vs-github#:~:text=If%20you%20boil%20it%20down,mostly%20enterprise%20and%20business%20users.)

## Git Workflow Cheat Sheet

These are the main (think daily) workflow steps for working on a git platform such as GitHub. The first 8 steps are those you will use as you are working on your code. The following useful & commonly used are those that can be used to gather more info about where you are, the status of changed code, how remotes are set up, the commit log, etc.

1.  Start your coding session!
2.  Pull current changes from the upstream (project) repo before starting your own work. This ensures you have the most recent changes for your team’s project
    -   `git pull upstream main`
3.  Create a new feature branch - use a name that reflects the feature you are working on. This protects the main branch, keeping your work separate from other’s work.
    -   `git checkout -b <branch-name>`
    -   `git checkout -b task-card-design`
4.  Code...code...code
5.  `git add`
6.  `git commit`
    -   Include a short and concise message reflecting what your commit includes (suggest starting with a verb such as ‘added’, ‘updated’, etc.
    -   `git commit -m “Added status selection types to task card”`
7.  `git push upstream main`
8.  `git pull upstream main`

## Terminal / Command Line

The terminal/command line and the terminology that goes along with them can be quite confusing and daunting when you first start working with it. We’ll try to summarise it as easily as possible here.

The programs we commonly call Terminal (MacOS) and Command Line (Windows) are known as “shells” and are used to start programs, make calls to the OS, access the file system, among other tasks.

You will be learning commands that are used to perform actions within the shell on your OS. In general, we’ll refer to the ‘bash’ which will vary among users, so you need to be aware of what program you are using as your bash. Some shells (such as Terminal in MacOS) are by default more powerful than others (such as Command Line in Windows). To access similar functions as Terminal, devs on Windows will need to install a separate program to access the shell.

-   **shell**: a computer program that uses a command line interface allowing you to control your computer using commands in text instead of a graphical user interfaces (GUIs) using mouse & keyboard.
-   **cmd.exe**: the executable (program) for Windows Command Line
-   **Terminal**: the executable (program) to access a shell on MacOS
-   **bash**: (Bourne Again SHell) - the default shell installed on MacOS which uses UNIX commands

Commonly used commands - the $ symbol is the shell prompt and does not need to be entered!

-   **pwd** `$ pwd`
    -   print the current working directory (find yourself if lost or unsure)
-   **ls** `$ ls`
    -   lists files and subdirectories of your current location
-   **cd** `$ cd directory_name`
    -   change to a new directory
-   **mkdir** `$ md new_dir_name`
    -   create a new directory
-   **rmdir** `$ rmdir dir_to_delete`
    -   delete a directory
-   **touch** `$ touch new_file_name.ext`
    -   create a new file (must give proper extension, i.e. .txt .js .html .css, etc)
-   **mv** `$ mv file_to_move new_file_location`
    -   move a file from the current location to a new location
-   **clear** `$ clear`
    -   clears the terminal window (aka remove the clutter for a fresh start)
-   **open** `$ open filename.ext`
    -   opens the file in your default text/code editor

## Visual Studio Code

VS Code is extremely powerful and customisable. To keep things simple, this FAQ will cover only those commands that you will use most often or that will make your learning-to-code journey easier. Please do not feel you must master VS Code, it will come with time.

Keyboard shortcuts - the most common

-   Legend (I am not using these here, but Mac users will see them in VS Code and other editors)
    -   ⇧ - shift
    -   ⌘ - command
-   Command Palatte (all available commands based on your current context)
    -   Ctrl+Shift+P
-   Quick Open (quickly open files)
    -   Ctrl+P
-   Basic editing
    -   move line down/up
        -   Alt+ ↑ / ↓
    -   copy line down/up
        -   Shift+Alt + ↓ / ↑
    -   select current line
        -   Ctrl+L
    -   select all occurrences of current selection
        -   Ctrl+Shift+L

Extensions - [VS Marketplace](https://marketplace.visualstudio.com/vscode)

Extensions in VS Code (much like Chrome extensions) are mini-programs that are used to add functionality to VS Code. You don’t need all or even a single one of these, they are simply recommendations. AKA - they can be a rabbit hole so don’t get too caught up in them!

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
-   [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
-   [JavaScript Code Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [PrintCode](https://marketplace.visualstudio.com/items?itemName=nobuhito.printcode)

Resources

-   [Windows keyboard shortcuts PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
-   [Mac keyboard shortcuts PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
-   [21 VSCode Shortcuts To Code Faster and Funner](https://jsmanifest.com/21-vscode-shortcuts-to-code-faster-and-funner/)

## Windows

The Windows OS creates a few oddities for developers. This section will cover those things to watch for when coding on Windows.

-   If you are backing up folders (such as your Documents folder) to OneDrive → from Git Bash access the My Documents folder through the following path:
    -   `/c/Users/user_name/OneDrive/Documents`
-   If you use Ubuntu, files created from within the Ubuntu shell can be accessed using the following path in File Explorer:
    -   `\\wsl$\Ubuntu\user_name`
