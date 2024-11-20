//Find out the meaning of "querySelectorAll & querySelector"
const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

//Find the meaning of of "forEach & =>"
btns.forEach((btn) => {
    //Find out the meaning of "addEventListener, click, target & e"
    btn.addEventListener("click", (e) => {
        if (e.target.id == "red"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "yellow"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "green"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "blue"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "violet"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "pink"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "orange"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "indigo"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "purple"){
            body.style.background = e.target.id;
        }
        if (e.target.id == "brown"){
            body.style.background = e.target.id;
        }
    })
})