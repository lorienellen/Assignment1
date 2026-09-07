//IMPORT

//COMPONENT CODES
export const nav = {
  //------------------------------------
  //Data properties

  //------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui= `
       <!-- Navbar Search Button Upward Collapse Function -->
    <div class="collapse" id="collapseExample">
        <div class="card card-body">

            <!-- Navbar Search Button -->
             <!-- Add method and action inside the form class -->
            <form class="d-flex" role="search" method="get" action="http://www.google.com/search">
                <!-- Add type and add name -->
                <input class="form-control me-2" type="text" name="q" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>

    <!-- Navbar Section -->
    <div class="container-fluid" style="background-color: var(--navbar-color); height: 8vh;">
        <nav class="navbar navbar-expand-lg">

            <!-- Navbar Container -->
            <div class="container-fluid">

                <!-- Logo and Paper Name -->
                <a class="navbar-brand" href="index.html"> <span class="bi bi-globe fs-2"></span>ITWD6.408</a>

                <!-- Search Icon Button -->
                <button class="btn d-inline d-lg-none" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <span class="bi bi-search fs-2"></span>
                </button>

                <!-- Toggle Button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navigation Links Container -->
                <div class="collapse navbar-collapse d-lg-flex justify-content-center" id="navbarNav" style="z-index: 3;">
                    <ul class="navbar-nav float-end fs-5 m-2 bg-warning">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-2" href="forms.html">FORMS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-2" href="webAPI.html">WebAPI</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-2" href="js-demo.html">JAVASCRIPT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-2" href="research.html">RESEARCH</a>
                        </li>                
                    </ul>
                </div>

                <!-- Search Icon Button -->
                <button class="btn d-none d-lg-inline align-end" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <span class="bi bi-search fs-2"></span>
                </button>

            </div>
        </nav>  
    </div>
    `;

    //return HTML view
    return ui;    
  },

  //Functions
  //------------------------------------
  
}
