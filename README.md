# Waterfall Buckets Problem
## Challenge:
Imagine there are a series of walls. 
Given heights of `[5, 3, 7, 2, 6, 4, 5, 9, 1, 2]`, it would look like this:
```
10|                          
9 |                      X   
8 |                      X   
7 |       X              X
6 |       X     X        X   
5 | X     X     X     X  X   
4 | X     X     X  X  X  X   
3 | X  X  X     X  X  X  X   
2 | X  X  X  X  X  X  X  X     X
1 | X  X  X  X  X  X  X  X  X  X
  +------------------------------
  ( 0  1  2  3  4  5  6  7  8  9 )
  [ 5, 3, 7, 2, 6, 4, 5, 9, 1, 2 ]
``` 

Now imagine that it rains. The walls would act like buckets and collect water '`~`' between some of them:

```
10|                              
9 |                      X      
8 |                      X      
7 |       X  ~  ~  ~  ~  X
6 |       X  ~  X  ~  ~  X      
5 | X  ~  X  ~  X  ~  X  X      
4 | X  ~  X  ~  X  X  X  X      
3 | X  X  X  ~  X  X  X  X       
2 | X  X  X  X  X  X  X  X  ~  X 
1 | X  X  X  X  X  X  X  X  X  X 
  +------------------------------
  ( 0  1  2  3  4  5  6  7  8  9 )
  [ 5, 3, 7, 2, 6, 4, 5, 9, 1, 2 ]
```

## Goal: 
Determine which two **walls** _have the **most water**_ trapped **between** them, and exactly how much water that is.   
Return value should be a 3-item array in the form of [wall1, wall2, total sum of water between the walls].
so for the above, the answer is that between wall #3 and wall #8, there are 11 blocks of water.

Therefore Output for the above example: `[3, 8, 11]`

---
## The Plan:
### Constraints: 
* Using ints. That's about it. No guarantees there will even be a successful answer.
* Look for a Pattern of leftVal > _[one or more slots]Val_ < rightVal.
* the leftmost and rightmost positions cannot possibly contain water.
* Every puddle must begin and end with a tower that has no water on top of it.

### The Approach/Tactic:
* Go through the array calculating the max value 'to the left' of each available slot >>> arr1
* Go through the array calculating the max value 'to the right' of each slot >>> arr2
* Take the _lesser/smaller_ of those two values as a 'maxLimit' for that slot >>> arr3
* Subtract the height of that slot from its maxLimits to get the 'amount of water' possible above each slot >>> arr4 
  * Caveat: If the result is negative, just return 0
* Scan through the array with a currentSlot from slot[1] to the slot 'one' before the last.
  * As soon as you hit a non-0 value, start a temp answer array:
    * push the currentSlot's index-1 to the temp answer << left boundary
    * initialize a temp running sum as the value of the current slot; 
  * while the next slot is not a zero value, keep adding values to the running sum and moving slot index;
  * once the value of the current slot _is_ a 0 value << right boundary
    * push the current indx+1 to the temp answer array;
    * push the running sum to the temp answer array;
  * push that temp answer array to a larger collection of answers for eventual evaluation;
  * (unless you're at the end) resume the start of scanning for non-zero values and repeat process above as needed
  * at the end condition, if your running sum is 0, just return;
* Return the arr from the answer-array with the largest 3rd (sum) element.

* As soon as you hit a 0 or less value, you have hit an interruption, so push it as an array answer, then continue the process starting with the previous end-slot as a new start slot.  


### Big O: O(n)
Have to search entire array about 5(?) times.