fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => {console.log(data)

    beginningPage(data)
});
//let storedAdmin = localStorage.setItem("admin", JSON.stringify(admin));

function beginningPage(data) {
    firstPage.insertAdjacentHTML("afterbegin", `<form action="" id="admin">
                                                <input type="text" >
                                                <input type="password">
                                                <button>Log In</button></form>`);

};
beginningPage();