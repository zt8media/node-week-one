// console.log(process.argv)

let arr = process.argv

// arr =  [ 1,2,3,4,5,] //out put the sum 

let sum = 0;

for(let i = 2; i < arr.length; i++){
    sum+= +arr[i]
} 

console.log(sum)