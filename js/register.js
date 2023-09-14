
let first = document.getElementById("first")
let last = document.getElementById("last")
let email = document.getElementById("inputEmail4")
let Password = document.getElementById("Password")
let rPassword = document.getElementById("rp")
let sign_up = document.querySelector("#sign-up")
/////////////////////////////
sign_up.addEventListener("click" , function (e){
    e.preventDefault()
    var user = {
        first : first.value,
        last : last.value,
        email : email.value,
        Password : Password.value,
        first : first.value
    } 
    localStorage.setItem("user" , JSON.stringify(user))
    location = "login.html"
} )
var img = document.querySelector(".img")
var da = document.querySelector("#img")

da.onchange =  function(){
    var file= new FileReader()
    file.readAsDataURL(da.files[0])
    file.onload = function(even){
        img.src = even.target.result
        localStorage.setItem("img", even.target.result)
    }
}