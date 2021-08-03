// fetch('https://jsonplaceholder.typicode.com/posts').then(function(response) {
//     console.log(response, 'Response');
//     return response.json();
// }).then(function(obj) {
//     document.getElementsByClassName("obj-1")[0].innerHTML = obj[0].userId;
//     document.getElementsByClassName("obj-1")[1].innerHTML = obj[0].id;
//     document.getElementsByClassName("obj-1")[2].innerHTML = obj[0].title;
//     document.getElementsByClassName("obj-1")[3].innerHTML = obj[0].body;

// }).then(function(body) {
//     console.log(body, 'body');
// })

// fetch('https://jsonplaceholder.typicode.com/posts').then(function(response) {
//     return response.json();
// }).then(function(obj) {
//     document.getElementsByClassName("obj-1").innerHTML = "userid => " + obj[0].userId;
//     document.getElementsByClassName("obj-1").innerHTML = "id => " + obj[1].id;
//     document.getElementsByClassName("obj-1").innerHTML = "Title => " + obj[2].title;
//     document.getElementsByClassName("obj-1").innerHTML = "Body => " + obj[3].body;


//     // console.table(body);
// })
fetch('https://jsonplaceholder.typicode.com/posts').then(function(response) {
    console.log(response, 'Response');
    return response.json();
}).then(function(postsArray) {
    document.getElementById('allPosts').innerHTML = postsArray.map(post =>
            `<div>
                  <div>Id: ${post.id}</div>
                  <div>User Id: ${post.userId}</div>
                  <div>Title: ${post.title}</div>
                  <div>Body: ${post.body}</div>
                </div>`
        ).join('') //join('') removes comma after every item of array, check effect on browser by removing this function
});
// }).catch(function(error) {
//     console.error("Something went wrong");
//     console.error(error);
// })