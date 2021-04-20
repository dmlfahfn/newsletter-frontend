let firstPage = document.getElementById("first-page");
let adminPage = document.getElementById("admin-page");
const header = document.getElementsByTagName("header");

fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => {console.log(data)

    beginningPage(data)
});

function beginningPage(data) {
    firstPage.insertAdjacentHTML("afterbegin", `<form action="" id="register">
                                                <input type="text" >
                                                <input type="password">
                                                <button>Register</button></form>
                                                <form action="" id="member">
                                                <input type="text" >
                                                <input type="password">
                                                <button>Log In</button></form>`);

};
beginningPage();