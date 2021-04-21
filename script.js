const firstPage = document.getElementById("first-page");
const secondPage = document.getElementById("second-page");
const header = document.getElementsByTagName("header");
let saveBtn = document.getElementById("saveBtn");
let logInBtn = document.getElementById("logInBtn");

// showUsers();

// function showUsers() {
//     firstPage.insertAdjacentHTML("beforeend","<div><h2>Welcome Dear Users</h2></div>");
//     fetch("http://localhost:3000/users")
//     .then(res => res.json())
//     .then(data => {console.log(data)
//         for (user in data){
//             firstPage.insertAdjacentHTML("beforeend", "<div>" + data[user].username + "</div>")
//         }
//     });
// };

saveBtn.addEventListener("click", ()=> {
    let newUser = {username: document.getElementById("newUsername").value, password: document.getElementById("newPassword").value, subscription: false };
    console.log(newUser);

    fetch("http://localhost:3000/users/new", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
});

logInBtn.addEventListener("click", () => {

    let user = {username: document.getElementById("username").value, password: document.getElementById("password").value}

    fetch("http://localhost:3000/users/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)//.username, data.subscription
    });
});
