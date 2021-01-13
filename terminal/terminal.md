## The Terminal

-   The _command line_ is a text interface for the computer's operating system. To access teh command line, we use the terminal.
-   The **shell** is the program which actually processes commands and returns output. Most shells also manage foreground and background processes, command history and command line editing. These features (and many more) are standard in bash, the most common shell in modern linux systems. (_We are using `zsh`_).
-   A **terminal** refers to a wrapper program which runs a shell. Decades ago, this was a physical device consisting of little more than a monitor and keyboard. As unix/linux systems added better multiprocessing and windowing systems, this terminal concept was abstracted into software.
-   A _filesystem_ organizes a computer’s files and directories into a tree structure. It starts with the _root directory_. Each parent directory can contain more child directories and files.
-   From the command line, you can navigate through files and folders on your computer:
    -   `pwd` outputs the name of the current working directory.
    -   `ls` lists all files and directories in the working directory.
    -   `cd` switches you into the directory you specify.
    -   `mkdir` creates a new directory in the working directory.
    -   `touch` creates a new file inside the working directory.
-   You can use helper commands to make navigation easier:
    -   `clear` clears the terminal
    -   tab autocompletes the name of a file or directory
    -   ↑ and ↓ allow you to cycle through previous commands
-   Flags modify the behavior of commands:
    -   `ls -a` lists all contents of a directory, including hidden files and directories
    -   `ls -l` lists all contents in long format
    -   `ls -t` orders files and directories by the time they were last modified
    -   Multiple options can be used together, like `ls -alt`
-   From the command line, you can also copy, move, and remove files and directories:
    -   `cp` copies files
    -   `mv` moves and renames files
    -   `rm` removes files
    -   `rm -r` or `rmdir` removes directories
-   Other commands:
    -   `whoami`- determine who the current user of the shell
    -   `$USER` - an environment variable in your shell to keep track of current user of the shell
    -   `pwd`
    -   `cat`
    -   `man` the man command lists the manual for a command
    -   D or Control ⌃-D to advance half a page
    -   B or Control ⌃-B to go back one page
    -   U or Control ⌃-U to go back half a page
    -   `echo`
    -   `less`
    -   `open`
-   Wildcards are useful for selecting groups of files and directories
-   Absolute path - starting at the root
-   Relative path - relative to where I am currently

## Terminal (Rithm School content)

### Permissions & Links

-   Permissions determine the access a user has to a file folder
    -   `-rwxr-xr-x 1 rmklaus staff 67B 14 Dec 2020 .bashrc`
        -   `r` - read access
        -   `w` - write access
        -   `x` - execute access
    -   3 groups listed in permissions of a file or folder (in order)
        -   owner
        -   group
        -   other
    -   types
        -   `-` file
        -   `d` directory
        -   `l` symbolic link
-   `chmod` change permissions
    -   for each set of permissions (owner, group, everyone) we can assign a number from 0 to 7. This is called **octal** (base-8) notation.

Here's a table that illustrates what each number means.
|Number|Permission|`rwx`|
|--|--|--|
|0| none| `---`
|1| execute|`--x`
|2|write only|`-w-`
|3|write and execute|`-wx`
|4|read only|`r--`
|5|read and execute|`r-x`
6|read and write|`rw-`
7|read, write and execute|`rwx`

-   example: `chmod 770 somefile.txt`
-   `root` user is a superuser that has the power to do anything. When `root` is the owner, the command `sudo` must be used to change permissions
-   `ln` create a link or alias to a file or folder
    -   _hard link_ like a copy of a file, the link will not break if the file is moved or deleted.
    -   _symbolic link_ creates a reference not a copy of the file (like a shortcut on your desktop). The link will break if the file is moved or deleted

### Redirection

-   _Redirection_ is taking result output of a command and sedning it somewhere else, like a file
    -   Redirections are denoted by `>>` or `>`
        -   `>` will overwrite text in a file
            -   `echo Hello World > hello.txt`
        -   `>>` will append text in a file
            -   `echo Hello Universe > hello.txt`
    -   Redirection can also take inputs
        -   `sort` will sort a list alphabetically
            -   `sort < names.txt > sorted.txt`

### Piping

_piping_ allows us to chain multiple commands using the _pipe_ symbol `|`

-   `head` - display the first lines of a file
    -   `head -n` to specify the number of lines
-   `tail` - display the last lines of a file
    -   `tail -n` to specify the number of lines
-   `sort` - sort lines of a text file
-   `uniq` - removes duplicated lines (data must be sorted first)
-   `wc` - word, line, character and byte count
-   `grep` - powerful tool for finding text. Quite useful when piped with `cat`

Example pipe command
`cat first.txt second.txt | sort | tail -n 3 | head -n 1`

1.  Concatenate the two files first.txt and second.txt
2.  Sort the results
3.  Find the last 3 lines
4.  Find the first line of those last 3 lines

### Terminal Environment
