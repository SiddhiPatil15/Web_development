async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 5300);
    })
    
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