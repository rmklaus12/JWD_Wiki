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
