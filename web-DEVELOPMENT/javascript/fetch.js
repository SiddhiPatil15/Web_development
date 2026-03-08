
 async function getData() {

    let x=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data=await x.json();
    return data;
 }




async function main() {
    console.log("Fetching data...");
    console.log("Do something new while waiting for data...");
    console.log("Loading...");
    let data = await getData();
    console.log(data);
    console.log("Data processing complete.");
    console.log("All tasks completed.");
}
main();