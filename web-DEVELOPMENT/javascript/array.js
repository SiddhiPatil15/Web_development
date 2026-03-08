let arr=[13,12,15,2]
console.log(arr);
console.log(arr.length);
arr[0]=1244;
console.log(arr[0]);
console.log(arr);
console.log(arr.toString());
console.log(arr.push("Siddhi"));//unsift push ka bhai
console.log(arr);//shift pop krto


let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,9,8]
console.log(a1.concat(a2,a3));

let b=[3,2,1]
console.log(b.sort())

let a1=[34,56,1,98]
a1.forEach((value,index,arr)=>{
    console.log(value,index,arr)
});
