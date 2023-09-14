function artcart(service){
  if(service == "favorite"){
    if(localStorage.getItem(service) == null){
      alert("There are no products in the favorite")
    }else{
      location ="products.html"
    }
  }
  localStorage.setItem("service" , service)
}
function artCart() {
  var pCart = localStorage.cart != null ? JSON.parse(localStorage.getItem("cart")) :[]
  var divCart = document.querySelector("#divCart")
  var arrHtml =  pCart.map((ele) => {
      if(ele.numberCart == 0 ){
          return "";
      }else{
          return(
              `
              <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
          <div class="">
          <img src="${ele.images[1]}" class="img-fluid rounded-start w-100" style="height:200px"  alt="...">
          </div>
          <div class="">
          <div class="card-body">
          <h5 class="card-title">${ele.title}</h5>
          <p class="card-text">${ele.description}</p>
          <div class="d-flex justify-content-between">
          <h2>${ele.numberCart}</h2>
          <div class="d-flex justify-content-end gap-5 px-5">
          <h3 class="card-text text-danger" style="cursor: pointer;" onclick="cartAdd(${ele.id} ,'${ele.category}','add' )">+</h3>
          <h3 class="card-text " style="cursor: pointer;" onclick="cartAdd(${ele.id},'${ele.category}','loss')">-</h3>
          </div>
          </div>
          </div>
          </div>
          </div> 
          </div> 
          `)
      }
      }) 
  divCart.innerHTML = arrHtml.join("")
  document.querySelector("#totalPrice").innerHTML = localStorage.price
}
artCart()