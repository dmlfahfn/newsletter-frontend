const firstPage = document.getElementById("first-page");
const adminPage = document.getElementById("admin-page");
const header = document.getElementsByTagName("header");

fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => {console.log(data)

    showUsers(data)
});

function showUsers(users) {
    firstPage.insertAdjacentHTML("beforeend","<div><h2>Our Users</h2></div>");
    
    for (user in users){
        firstPage.insertAdjacentHTML("beforeend", "<div>" + users[user].username + "</div>")
    }
};

let saveBtn = document.getElementById("saveBtn");
let logInBtn = document.getElementById("logInBtn");

saveBtn.addEventListener("click", ()=> {
    let newUser = {username: document.getElementById("newUsername").value, password: document.getElementById("newPassword").value };
    console.log(newUser);

    fetch("http://localhost:3000/users/new", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {console.log(data)
    });
});