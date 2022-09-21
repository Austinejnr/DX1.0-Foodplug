

// basic Es5 functon declaration 
// function name (){}

var myname = "Austine Jnr"

function popsomething() {
    alert(myname + " I have been coding since 12")
}


// console.log(document)

var ourbody = document.querySelector(".pagebody")

// ourbody.style.background = "black"


var hamburger = document.querySelector(".hamburger-container")
var mobilelinkscontainer = document.querySelector(".mobile-links-container")

// console.log(hamburger)



function addandremove (){
    hamburger.classList.toggle("showhamburger")
    mobilelinkscontainer.classList.toggle("showmobilelinks")
}

