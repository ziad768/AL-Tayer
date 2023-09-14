var username = document.querySelector(".ul-login")
if (localStorage.getItem("user")) {
    username.innerHTML = `
    <li><button class=" btn btn-outline-danger" type="button"data-bs-toggle="modal" data-bs-target="#exampleModal">${JSON.parse(localStorage.getItem("user")).first} ${JSON.parse(localStorage.getItem("user")).last}</button>
    
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
      <section class=" rounded" style="background-color: #eee;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
    
            <div class="card" style="border-radius: 15px;">
              <div class="card-body text-center">
                <div class="mt-3 mb-4">
                  <img src="${localStorage.img}"
                    class="rounded-circle img-fluid" style="width: 100px;" />
                </div>
                <h4 class="mb-2">${JSON.parse(localStorage.getItem("user")).first} ${JSON.parse(localStorage.getItem("user")).last}</h4>
                <p class="text-muted mb-4">@${JSON.parse(localStorage.getItem("user")).first} <span class="mx-2">|</span> <a
                    href="#!">AltairStores.com</a></p>
                <div class="mb-4 pb-2">
                  <button type="button" class="btn btn-outline-primary btn-floating">
                    <i class="fab fa-facebook-f fa-lg"></i>
                  </button>
                  <button type="button" class="btn btn-outline-primary btn-floating">
                    <i class="fab fa-twitter fa-lg"></i>
                  </button>
                  <button type="button" class="btn btn-outline-primary btn-floating">
                    <i class="fab fa-skype fa-lg"></i>
                  </button>
                </div>
                <button type="button" class="btn btn-primary btn-rounded btn-lg">
                  Message now
                </button>
                <div class="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <p class="mb-2 h5">8471</p>
                    <p class="text-muted mb-0">Wallets Balance</p>
                  </div>
                  <div class="px-3">
                    <p class="mb-2 h5">8512</p>
                    <p class="text-muted mb-0">Income amounts</p>
                  </div>
                  <div>
                    <p class="mb-2 h5">4751</p>
                    <p class="text-muted mb-0">Total Transactions</p>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>
    
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </li>
    <li><a class="btn btn-outline-danger " onclick = "log()">Log out</a></li>
    <li><button class="btn btn-outline-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Cart</button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h2 id="offcanvasRightLabel text-danger">Carts</h2>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <hr>
      <div class="offcanvas-body" id="divCart">
        </div>
        <div class="text-center w-100">
        <h2 class="mb-4 ">Total Price : <span id="totalPrice">${localStorage.getItem("price") != null ? localStorage.getItem("price") : 0}</span> $</h2>
        <button type="button" class="btn btn-success col-11  p-2 mb-3" data-bs-toggle="modal" data-bs-target="#sell-model">
        Visa payment
        </button>
      </div>
  <div class="modal fade" id="sell-model" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title">Visa payment</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="1234-5678-1234-0000" aria-label="1234-1234-5688-5636" required>
            </div>
            <div class="col-sm">
              <input type="text" class="form-control" placeholder="00/00" aria-label="00/00" required>
            </div>
            <div class="col-sm">
              <input type="text" class="form-control" placeholder="CVV" aria-label="CVV" required>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit"  class="btn btn-seccess">Visa payment</button>
        </div>
      </div>
    </div>
  </div>
        </div>
    </div>
    </li>

    `
} else {
    window.location = "login.html"
}

function log() {
    localStorage.clear()
    window.location.reload();
}
