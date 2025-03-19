
//question 1  = [1,2,5,6,4,]
// target =9;
// output = [2,4];
// ----------------------------

// let arr =[1,2,5,6,4]
// let target=9;
// let ans=[]
// for(i=0;i<arr.length-1;i++){
//     for(j=i+1;j<=arr.length;j++){
//         if(arr[i]+arr[j]==target){
//             ans.push(i,j)

//         }
//     }
// }
// console.log(ans);

//question 2 =[1,2,3,5,4,15]
//output=true;

// let arrAy=[1,2,3,4,5,15];
// let bool=true;
// let bigGestnum =0;
// let sum=0;


// for(i=0;i<arrAy.length;i++){
//     for(j=0;j<arrAy.length;j++){
//         if(arrAy[i]>arrAy[j]){
//             bigGestnum=arrAy[i];
//         }
        
//     }

//     for(p=0;p<arrAy.length-1;p++){
//         for(q=0;q<arrAy.length;q++){
            
          
//         }


//     }
// }
// console.log(bigGestnum);
// console.log(sum);

// Binary Search
//----------------------------------------------------

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1



// let Anand = (array, target) => {
//     let left = 0;
//     let right = array.length - 1;
//     let mid;

//     while (left <= right) {
//         mid = Math.floor((left + right) / 2);
//         if (array[mid] === target) {
//             return mid;  
//         } else if (array[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
    
//     return mid;  
// }

// let ans = Anand([1, 2, 3, 4, 5, 6], 3);
// console.log(ans);

  //question 4
  //----------------------------------------------
//   Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]

// let array=[9,4,5,6,3,1,2,7];
// let temp=0;

// for(i=0;i<array.length-1;i++){
//   for(j=i+1;j<array.length;j++){
//     if(array[i]>array[j]){
//       array[i]=temp;
//       array[j]=array[i]
//       temp=array[j];
//     }
//   }
// }

// console.log(array[i]);


    

    
    



//question 5

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
      

//question 6
//------------------------------
//Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

//----------------------------------------

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.


// let array=[9,4,5,6,3,1,2,7];
// let temp=0;

// for(i=0;i<array.length-1;i++){
//   for(j=i+1;j<array.length;j++){
//     if(array[i]>array[j]){
//       array[i]=temp;
//       array[j]=array[i]
//       temp=array[j];

// //     }

// //   }
  
// // }

// // for(i=0;i<array.length-1;i++){
// //   for(j=i+1;j<array.length;j++){

// //     console.log(   )
    
// // }}


// //----------------------------------------
 

//     const Promise1 = new Promise((resolve,reject)=>{   
      
//    setTimeout(() => {
//     resolve("sucessfull1")
//    }, 10000);

  

//     })

    
    
//     // .then((res)=>console.log(res))
//     // .catch((res)=>{console.log(res);
//     // })

//     const Promise2 = new Promise((resolve,reject)=>{   
      
//       setTimeout(() => {
//        reject(console.error("error2"))
       
//       }, 5000);
   
     
   
//        })

//        const Promise3 = new Promise((resolve,reject)=>{   
      
//         setTimeout(() => {
//          resolve("sucessfull3")
//         }, 7000);
     
       
     
//          })
    

  //  Promise.all([Promise1,Promise2,Promise3])
  //  .then((res)=>console.log(res))
  // .catch((res)=>{console.log(res)});

  // Promise.allSettled([Promise1,Promise2,Promise3])
  // .then((res)=>console.log(res))
  // .catch((res)=>{console.log(res)});

    
    
  // (function(){
  //   let arr = [1,2,3,4,5,6,7,8,9,10];
  //   console.log(arr);
    
  // })()
   

  const data = fetch('https://fakestoreapi.com/products')

  data.then((res)=>{
    const data = res.json();
   console.log(data) 
   
    
  })
  .catch((err)=>{
    console.log(err);
  })

    