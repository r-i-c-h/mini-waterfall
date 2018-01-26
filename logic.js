// Big O: O(2) - have to search entire array once, and then part of it a possibly a 3rd and 4th time.


const baseCaseArr = [1,0,1];
const baseCaseResult = [0,3,2];

const foo = (arr) => {
  // RULES: left.val  must !==0
  //
  // We need the pattern of leftLimit > _[as least one slot]_ < rightLimit. (left limit _could_ equal right as long as there is a gap in the indx)
  
  // I'm gonna be stupid about this 
  // given [0,1,2,0,4,5,0,4,0,1,0]
         // 0 1 2 3 4 5 6 7 8 9,X
  // 1. Set a left-limit // limL={i:0, v:0}
  // 2. while limL.indx+1's val >= limL.val and start over with new Left-limit as indx+1; 
          // limL={i:0, v:0} >> {i:1, v:1} >> {i:2, v:2}
  // 3. Next index _has-to-be_ lower, so set a forward runner as limL.indx+2; (checking for valid indx length)
            //  limL={i:2, v:2}, FR={i:4, v:4}
  // 6. while the FR.val < limL.val keep setting FR along indx++ (checking for valid indx length) // not in this example  
  // 7. Once limL.val >= FR.val, RUN A FUNCTION TO DETERMINE HOW MUCH WATER THERE IS. (limLIndx,FRIndx)
        // ** STORE RESULT** 
  // 8. Set FR.indx as a new limL indx and val then GOTO Step#2. So new limL = {i:4, v:4} >> {i:5, v:5}
  // 9. GOTO STEP 3, fr = {i:7, v:4}

  
  //   if ( indx+2 < arr.length ) { indx+2 < array.length &&  is both within the arr.length as well as 
  // 2. Set pointer indx as leftLimit, 
  // 3. while the next slot over from the leftLimit is < leftLimit's value, set 
    // 1. Go through array *backwards* and find first non-zero value for a ending pointer.
  // 4. set rightLimit as first non-zero value from end of array.
  // whie leftLim[
  // if next indx value is >= leftLimit value, move starting pointer indx over 1 and restart process
  // 3. As long as the heights encountered are < leftLimit's height, move over leftPointer over to the right 
    

  // 

  // 2. determine the height difference between the two
}

// 2. see if they are more than 1 away from one another

// 2. Check that their indxes are more than +/-1 away from one another.
// 3. If not
// 3. for every slot between the walls establish in step one, subtract their height from the upper bound. 
// 3a - watch out for the two being next to one another
// 3b - watch out for a pyramidal shape where there is no second wall
// 4. reduce / sum the differences together,

const arr = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
const assert = [3, 8, 11];


const getWallLimitsObj = (arr) => {
  let wall1 = { height: -Infinity, indx: null };
  let wall2;

  for(let i = 0; i < arr.length; i++) {
    if ( arr[i] > wall1.height ) {
      wall2 = Object.assign({}, wall1 );
      wall1 = { height: arr[i], indx: i };
    }
  }

  // if (wall1.indx === wall2.indx+1 || wall1.indx === wall2.indx-1)
    // return { }  

    return { tallest: wall1.height, tallestIndx: wall1.indx,
           second: wall2.height, secondIndx: wall2.indx,
          difference: (wall1.height - wall2.height) }
}




module.exports = {foo};