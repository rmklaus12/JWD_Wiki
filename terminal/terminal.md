## The Terminal

-   The _command line_ is a text interface for the computer's operating system. To access teh command line, we use the terminal.
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

-   Options modify the behavior of commands:
    -   `ls -a` lists all contents of a directory, including hidden files and directories
    -   `ls -l` lists all contents in long format
    -   `ls -t` orders files and directories by the time they were last modified
    -   Multiple options can be used together, like `ls -alt`
-   From the command line, you can also copy, move, and remove files and directories:
    -   `cp` copies files
    -   `mv` moves and renames files
    -   `rm` removes files
    -   `rm -r` removes directories
-   Wildcards are useful for selecting groups of files and directories

Quiz questions

1.  How do you print the current working directory?
    **a) pwd**
    b) cd
    c) mkdir
    d) ls
2.  What is a filesystem?
    **a) It organizes a computer's files and directories into a tree structure.**
    b) It's a text interface with a computer
    c) It's a type of directory
    d) It is a directive to the computer to perform a specific task
3.  How would you create a file named **text.txt** in your current directory?
    a) touch home/text.txt
    b) ls text.txt
    **c) touch text.txt**
    d) mkdir text.txt
4.  If the current working directory is **home/**, which of the following commands will navigate to the **movies/** directory in the tree below?
    a) ls media/moves
    **b) cd media/movies**
    c) mkdir media/movies
    d) cd movies

```
home/
  media/
	movies/
	music/
```

5.  What does the following command do?
    `touch media/popular.txt`
    a) it creates a file named popular.txt in the working directory
    b) this command is not formed correctly
    c) it changes the working directory to the media directory
    **d) it creates a file named popular.txt in the media directory**
6.  What is a directory?
    **a) a folder used to store files**
    b) a command to a computer
    c) a file
    d) a tree structure
7.  How would you change to one directory above the current working directory?
    a) cd ../..
    b) ls ..
    **c) cd ..**
    d) mkdir ..
8.  If the current working directory is **home/media/music**, which of the following commands will navigate to the **home/** folder in the tree above?
    **a) cd ../..**
    b) mkdir ls ..
    c) ls ..
    d) cd ..

# Terminal Basics Exercise

### Part I

-   make a directory called first `mkdir first`
-   change directory to the first folder `cd first`
-   create a file called person.txt `touch person.txt`
-   change the name of the file to another.txt `mv person.txt another.txt`
-   make a copy of the another.txt file and call it copy.txt `cp another.txt copy.txt`
-   remove the copy.txt file `rm copy.txt`
-   make a copy of the first folder and call it second `cp -r first second`
-   delete the second folder `rm -rf second`

### Part II

-   What does the man command do? Type in man rm. How do you scroll and get out? **The man command lists the manual for a command**
    **- D or Control ⌃-D to advance half a page**
    **- B or Control ⌃-B to go back one page**
    **- U or Control ⌃-U to go back half a page**
-   Look at the man page for ls. What does the -l flag do? What does the
    `-a` flag -do? **The `-l` flag lists files in a list format with more detail and the `-a` lists all files and folders including hidden ones**

-   Type the following command to download and save the contents of google.com: curl https://www.google.com > google.html `curl https://www.google.com > google.html`

-   Use less to look at the contents of google.html. `less google.html`

-   Look at the man page for less. Read the section on /pattern. Search for the text hplogo in the google.html file. `less -p hplogo google.html`

-   How do you jump between words in the terminal? `option left/right`

-   How do you get to the end of a line in terminal? `control + e`

-   How do you move your cursor to the beginning in terminal? `control + a`
    How do you delete a word (without pressing backspace multiple times) in -terminal? `option + delete`

-   What is the difference between a terminal and shell? **The terminal is a program is just an interface to the shell. The shell is what actually handles commands and so forth; the terminal program just gives it a way to interact with the environment.**

-   What is an absolute path? **An absolute path is a path that starts from the root route and gives the complete location for a file or folder**

-   What is an relative path? **A relative path is a path that starts at the current location and not the root route**

-   What is a flag? Give three examples of flags you have used. **A flag adds additional functionality to an existing command, we have seen `-a` and `-l` for the `ls` command and `-r` for the `cp` and `rm` commands**

-   What do the r and f flags do with the rm command? **`r` will remove folders and recursively go through each folder and file and `f` will force removal**

# Intermediate Terminal Exercises

### Part I

Answer the following questions:

1. Create an environment variable called `FIRST_NAME` and set it equal to your first name (this does not need to be permanent) `export FIRST_NAME=Elie`
2. Print the `FIRST_NAME` variable `echo $FIRST_NAME`
3. Print out the `$PATH` variable `echo $PATH`
4. What is the `$PATH` variable? **It is a set of paths for our environment to find where to run commands**
5. Why would you want to create an environment variable? **For securing information and using a variable multiple times**
6. How do you permanently save environment variables? **Save them in your .bash_profile or .zshrc**
7. What is a process? **a process is a specific computer program that is being excecuted**
8. How do you list all processes running on your machine? `ps -ax`
9. What is a PID? **A unique identifier for for a process which is necessary when stopping a process**
10. How do you terminate a process? **You can use `kill` or `kill -9`**
11. What is the difference between `kill` and `kill -9`? **9 is a specific signal ensures that the command can not be ignored, whereas without the -9 there may be processes that are not killed by using `kill` alone.**
12. What `grep` flag allows for case insensitive search? `-i`
13. What `grep` flag allows for a certain number of lines before the match? `-B`
14. What `grep` flag allows for a certain number of lines around the match? `-C`
15. What `grep` flag allows for a certain number of lines after the match? `-A`
16. What `grep` flag allows for full word search? `-w`
17. What `grep` flag shows you the line number of a match? `-n`

### Part II

Write the following terminal commands to do the following (assume that `instructors.txt` is an imaginary file):

1. Find all files inside the `Desktop` folder that have a name of "learn." `find ~/Desktop -name "learn"`
2. Find all files inside the `Desktop` folder that start with a "P." `find ~/Desktop -name "P.*" `
3. Find all files inside the `Desktop` folder that end with `.txt`. `find ~/Desktop -name "*.txt" `
4. Find all files inside the `Desktop/views` folder that have the name `data` somewhere in their filename. `find ~/Desktop/views -name "*data*" `
5. Inside of the `instructors.txt` file, output the number of times the word "Elie" appears. `grep -c "Elie" instructors.txt`
6. Inside of the `instructors.txt` file, list all matches for any full word that starts with a capital "P." `grep -w "P.*" instructors.txt`
7. Inside of the `instructors.txt` file, list all the line numbers for any full word that starts with a "z" (it should match regardless of upper or lower case). `grep -ni "z.*" instructors.txt`

# Advanced Terminal Exercises

Use the following text file to answer the questions

```bash
Elie-Schoppik-sushi
Tim-Garcia-gummybears
Janey-Keig-bagels
Colt-Steele-tacos
Matt-Lane-pizza
```

1. Replace all of the `-` with `:` using `sed` - `sed -ie 's/-/:/g' instructors.txt`
2. Return a file with just the first name and last name separated by a space (you can do this with `cut` and `sed` or just `sed`) - `cut -d- -f1 -f2 instructors.txt | sed 's/-/ /g'`

```bash
1>>>>2
2>>>>3
3>>>>4
4>>>>5
```

1. Using `cut` print out just the numbers 2, 3, 4, 5. Use `xargs` to print them all on 1 line - `cut -c 6 instructors.txt | xargs`
1. Using `xargs` in the `Desktop` directory, find all of the files that include the text `Welcome` - `find ~/Desktop -name '*' | xargs grep Welcome `
1. Write a shell script called `access_file.sh` which accepts one parameter and changes the permissions to `755`
1. Write a shell script called `unaccessible.sh` which accepts one parameter and changes the permissions to `300`
1. Using `sed` write the command to replace all instances of the name "foo" with the string "bar" in a file called `baz.txt` - `sed 's/foo/bar' > baz.txt`
1. Write the command to only print out all of the `pid`s using `awk` - `ps aux | awk '{print $2}'`
1. Type in the `df -h` command - it will show you much space you have on your hard drive. Using the `awk` command, print out **only** the first percentage capacity. `df -h | awk 'FNR == 2 {print $5}'`
