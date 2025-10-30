let stars=document.getElementById("stars")

let moon=document.getElementById("moon")

let montain3=document.getElementById("montain3")

let boat=document.getElementById("boat")

let last = document.querySelector(".Dummies")

window.onscroll = function(){
    let value= scrollY
    stars.style.left=value + 'px'
    moon.style.bottom=value*3 + 'px'
    montain3.style.top=value +'px'
    boat.style.left=value+'px'

}


