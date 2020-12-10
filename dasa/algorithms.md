# Algorithms

_A set of steps to accomplish a task - remember the PB&J exercise from CS50?_

### Binary Search

_Binary search is a search algorithm that finds the position of a target value within a sorted array._
_Binary search works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. Most commonly used to find an item in an array_
_Binary search is bracket elimination_

### pseudocode

_basic binary search_

-   Let min = 1 and max = n
-   Guess the average of max and min, rounded down to an integer
-   If you guess the number, stop!
-   If the guess was too low, set min to be one larger than the guess
-   If the guess was too high, set max to be one smaller than the guess
-   Go back to step two

_binary search of array_

-   let min = 0 and max = n-1
-   Compute guess as the average of max and min, rounded down
-   if array[guess] equals target, then stop and return guess
-   If guess was too low, that is, array[guess] < target, then set min = guess + 1
-   Otherwise, the guess was too hight. Set max = guess - 1
-   Go back to step two.

_binary search to handle target number not present_

-   Let min = 0 and max = n-1
-   If max < min then stop; target is not present; return -1
-   Compute guess as the average of max and min, rounded down
-   If array[guess] equals target, then stop; return guess
-   If the guess was too low, that is, array[guess] < target, then set min = guess + 1
-   Otherwise, the guess was too high. Set max = guess - 1
-   Go back to step two

## The BigO guide

Big O is **asymptotic notation** - tells you how fast an alogrithm is. Big O is used for **asymptotic upper bounds**
**rate of growth** of the running time is how fast a function grows with the input size.

1. O(1)
2. O(lg n)
3. O(n)
4. O(n lg n)
5. O(n^2^)
6. O(n^2^ lg n)
7. O(n^3^)
8. O(2^n^)

-   If you are **iterating** over a **single** collection of elements using **one loop**, then run-time will be **O(n)**.
-   If you are **iterating** over **half** of the collection, it will be O(n/2) -> **O(n)**.
-   If you are **iterating** over **two separate** collections using **two different** loops, so it will become O(n+m) -> **O(n).**
-   If you are **iterating** over a **single** collection using **two nested** loops, so it will be **O(n²)**.
-   If you are **iterating** over **two different** collections using **two nested** loops, so it will become O(n\*m) -> **O(n²).**
-   If you are **sorting** a collection, this becomes **O(n\*log(n))**.

Algorithm
: any well-defined computational procedure that takes some value, or set of values, as input and produces some value, or set of values, as output. An algorithm is thus a sequence of computational steps that transform the input into the output.

Search algorithms
: designed to check for an element or retrieve an element from any data structure where it is stored. Based on the type of search operation, these algorithms are generally classified into two categories: - Sequential Search: the list or array is traversed sequentially and every element is checked. E.g. _Linear search_ - Interval search: these algorithms are specifically designed for seraching in sorted data structures. These types of searchign algorithms are much more efficient than linear search as they repeatedly target the center of the search structure and divide the search space in half. E.g. _Binary search_ - Binary Search Tree (BST) - sorted; lower values on left - unbalanced: distribution is skewed to one side - worst-case for BST - Heap - a type of tree; must be complete - heapify: reorder - max heap (high value is root) - min heap (low value is root)

Sort algorithms
: used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.
in-place (no new array)

Binary search O(log n)
: More efficent than linear search O(n) - bubble sort (sinking) - a naive approach - the largest element in the array "bubbles up" to the top - in-place sort

Merge sort
: most efficient
uses a 'pivot' (usually the last element)
in-place sort
'divide & conquer'

**List-based collections**

-   array (most common)
-   linked list
    -   no indices
    -   each node has an awareness of the next element
    -   add/remove elements is easier than an array
-   stacks O(1) constant time
    -   puts elements on top
    -   when order matters
        -   push (add)
        -   pop (remove)
    -   L.I.F.O (last in first out)
-   queues
    -   F.I.F.O (first in first out)
    -   head (oldest)
    -   tail (newest)

Efficency (complexity)
: space (memory, storage)
time (how long to run)

BigO notation is the efficency of code
space efficiency is asked less in interviews (than time efficiency)

Logarithm functions
: Let's look at a general case of an arrray of length **n**. We can express the number of guesses, in the worst case, as 'the number of times we can repeatedly halve, starting at **n**, until we get the value 1, plus one." But that's inconvienient to write out. Fortunately, there's a mathmatical function that means the same thing as the number of times we repeatedly halve, starting at **n**, until we get the value 1: the **base-2 logarithm** of **n**. We write it as **lg n**.
Logarithm functions grow very slowly (the inverse of exponentials)
The various values of **n** in **base-2 logarithm**

| _n_       | _lg n_ |
| --------- | ------ |
| 1         | 0      |
| 2         | 1      |
| 4         | 2      |
| 8         | 3      |
| 16        | 4      |
| 32        | 5      |
| 64        | 6      |
| 128       | 7      |
| 256       | 8      |
| 512       | 9      |
| 1024      | 10     |
| 1,048,576 | 20     |
| 2,097,152 | 21     |
