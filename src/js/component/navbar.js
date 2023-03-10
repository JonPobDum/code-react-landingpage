import React from "react";

function Navbar(){
return(
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid ">
    <a class="navbar-brand text-white" href="#">Start Boostrap</a>
    <button class="navbar-toggler bg-white" type="button " data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text-white" href="#">Home</a>
        <a class="nav-link text-white" href="#">About</a>
        <a class="nav-link text-white" href="#">Services</a>
        <a class="nav-link text-white" href="#">Contact</a>
        {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>

)
}

export default Navbar;