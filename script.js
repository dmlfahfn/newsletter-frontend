const firstPage = document.getElementById("first-page");
const adminPage = document.getElementById("admin-page");
const header = document.getElementsByTagName("header");

fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => {console.log(data)

    showUsers(data)
});

function showUsers(users) {
     firstPage.insertAdjacentHTML("beforeend", `<form action="" id="register">
                                                 User Name <input type="text" >
                                                 Password <input type="password"> 
                                                 <button>Register</button></form>
                                                 <form action="" id="member">
                                                 User Name <input type="text" >
                                                 Password <input type="password"> 
                                                 <button>Log In</button></form>`);

    firstPage.insertAdjacentHTML("beforeend","<div><h2>Users in the system</h2></div>");
    
    for (user in users){
        firstPage.insertAdjacentHTML("beforeend", "<div>" + users[user].username + "</div>")
    }
};


showUsers();