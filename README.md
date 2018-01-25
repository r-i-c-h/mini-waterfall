# Waterfall Bucket Problem

Imagine there are a series of walls. 

Given heights of [5, 3, 7, 2, 6, 4, 5, 9, 1, 2], it would look like this:
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
```


## Goal: 

Determine which two walls have the most water trapped between them, and exactly how much water that is.

Between wall #3 and wall #8, there are 11 blocks of water.

So return value should be a 3-item array in the form of [wall1, wall2, total sum of water 'between' the walls]

Output for the above example: `[3, 8, 11]` 