async function main() { 
    let obj={
        a:1,
        b:2,
        c:3
    }
    let {a,b}=obj;
    console.log(a,b)
    
    let arr=[1,2,3,4,5];
    console.log(sum(arr[0],arr[1],arr[2],arr[3],arr[4]))
    console.log(sum(...arr))
}