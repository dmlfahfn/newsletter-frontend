const firstPage = document.getElementById("first-page");
const secondPage = document.getElementById("second-page");
const header = document.getElementsByTagName("header");
let saveBtn = document.getElementById("saveBtn");
let logInBtn = document.getElementById("logInBtn");

if (localStorage.getItem("userId")){
} else {
    let userId = [];
    localStorage.setItem("userId", JSON.stringify(userId));
};

saveBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    let newUser;
    if (
        document.getElementById("newUsername").value !== "" &&
        document.getElementById("email").value !== "" &&
        document.getElementById("newPassword").value !== ""
        ){
        newUser = {username: document.getElementById("newUsername").value, email: document.getElementById("email").value, password: document.getElementById("newPassword").value, subscription: document.getElementById("checkbox").checked};
        
        console.log(newUser);

    } else {
        return;
    };

    fetch("https://newsletterswe.herokuapp.com/users/new", {
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
let user;
logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    user = {username: document.getElementById("username").value, password: document.getElementById("password").value}

    fetch("https://newsletterswe.herokuapp.com/users/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.userId, data.code)

        if (data.code == "OK"){
            console.log(data.userId);
            localStorage.setItem("userId", data.userId);
            showUser(data);
        } else {
            console.log(data.code);
        };
    });
});

function showUser(data) {
    firstPage.innerHTML = "";
    firstPage.insertAdjacentHTML("beforeend", `<div> <h2> Welcome ${data.username} ! </h2></div>  
                                <div> <h4> Your subscription status:  ${data.subscription? `Subscribed
                                <form>
                            
                                <input type="button" id="btn" onclick="changeStatus()" value="Unsubscribe">
                                </form> </h4></div>`:`Not Subscribed     
                                <form>
                                 
                                <input type="button" id="btn" onclick="changeStatus()" value="Subscribe">
                                </form>`}`);


    let userId = data.id;
    localStorage.setItem("userId", JSON.stringify(userId));
};



const changeStatus = () => {

    user.subscription = !user.subscription;
    fetch("https://newsletterswe.herokuapp.com/users/change", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showUser(data);

    });

}