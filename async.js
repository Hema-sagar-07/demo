import fetch from 'node-fetch'
// async function fetching(){

//     const res =    fetch('https://jsonplaceholder.typicode.com/photos');
//     const photos =  res.json();

//     console.log(photos)
//     console.log(1);
//  }

// fetching()
// setTimeout(()=>{
//     console.log("4");
// },4)
// setTimeout(()=>{
//     console.log("3");
// },3);setTimeout(()=>{
//     console.log("3");
// },3);setTimeout(()=>{
//     console.log("3");
// },3);setTimeout(()=>{
//     console.log("3");
// },3);setTimeout(()=>{
//     console.log("2");
// },2);

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(r => r.json())
    .then(r => console.log(r))
//hello

try {

} catch {

} finally {

}



// console.log("hi");
