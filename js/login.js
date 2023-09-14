var showPassword = document.querySelector("#flexSwitchCheckDefault")
var password = document.querySelector("#exampleInputPassword1")
showPassword.onclick = function () {
    if(password.type == "password"){
        password.type = "text"
    }else{
        password.type ="password"
    }
    
}
var img = document.querySelector(".img")
var username = document.querySelector("#exampleInputEmail1")
var user =JSON.parse(localStorage.getItem("user"))
username.addEventListener("input", function(){
    if(user.first == username.value.trim() || user.email == username.value.trim()){
        if(localStorage.img != null){
            img.src =  localStorage.getItem("img")
        }
    }
    
})
var submit =document.querySelector("#submit")
submit.onclick = function(e){
    e.preventDefault()
    if(password.value =="" || username == ""){
        alert("you do not Enter to username or password")
    }
    if(password.value == user.Password && ( username.value == user.first || user.email == username.value.trim())){
        location = "index.html"  
    }else{
        alert("name or password  is wrong")
    }
}