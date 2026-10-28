async function fetchData() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    try {
    const response = await fetch(url); // get request
    if(!response.ok){
        throw new Error("didn't get response")
    }
    console.log(response);

    const post = await response.json();
    console.log(post);
    }catch(error){
        console.log(error);
    }
}
fetchData();
// through promise chaning

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(post))
    .catch(() => console.log("error"));