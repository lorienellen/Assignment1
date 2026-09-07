// IMPORT

// COMPONENT CODES
export const footer = {
  //------------------------------------

  // Data Properties

  //------------------------------------

  // User Interface (UI) Component
  renderUI() {
    // Build HTML
    let ui = `
      <!-- Footer here -->
      <footer class="container-fluid" style="background-color: var(--navbar-color);">
          <div class="row">
          
              <!-- Social media icons section: on small screen it takes up entire row and centralized.  -->
              <div class="col-12 col-md-4 d-flex justify-content-center align-items-center d-lg-block">
                  <h3>
                      <span class="bi bi-linkedin text-info m-1"></span>
                      <span class="bi bi-facebook text-success m-1"></span>
                      <span class="bi bi-twitter text-info m-1"></span>
                      <span class="bi bi-youtube text-danger m-1"></span>
                  </h3>
              </div>

              <!-- Author name section -->
              <div class="col-8 col-md-4 d-flex justify-content-center align-items-center">
                  <p class="fs-6">@Lorien Gugich</p> 
              </div>
              
              <!-- Privacy policy section -->
              <div class="col-4 col-md-4 d-flex justify-content-end align-items-center">
                  <p class="fs-6 text-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <strong><u>Privacy Policy</u></strong></p>
              </div>
          </div>
      </footer>

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" 
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Our Privacy Policy</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">

                    <p>This Privacy Policy outlines how we collect, store, and use your personal information. <br>
                        <br>
                        <strong>PERSONAL INFORMATION</strong><br>

                        Personal information has the same meaning as defined in the Privacy Act 1993. This can include any information that can be used to personally identify you. <br>
                        <br>
                        <strong>TYPES OF PERSONAL INFORMATION COLLECTED</strong><br>

                        Types of personal information collected can include, but is not limited to:

                        Name, Address, Location, Email address, Telephone number, Age or date of birth, Profession. <br>
                        <br>
                        <strong>HOW INFORMATION IS COLLECTED</strong> <br>

                        By filling out and submitting any forms on this webpage, you agree that we may collect the information provided by you. <br>
                        <br>
                        <strong>USE OF PERSONAL INFORMATION</strong> <br>

                        The personal information collected from you will be used for research and study purposes, to better understand trends in society. <br>
                        <br>
                        <strong>COOKIES</strong> <br>

                        Our website uses cookies to enhance your browsing experience. You can disable cookies through your browser settings, but this may affect the functionality of our site. <br>
                        <br>
                        <strong>USE OF PERSONAL INFORMATION FOR COMMUNICATION</strong> <br>

                        By providing your email address, you agree to receive follow up emails, promotional or informational, from. You can opt out at any time through the unsubscribe link in the emails. <br>
                        <br>
                        <strong>DISCLOSURE OF PERSONAL INFORMATION</strong> <br>

                        We do not sell, trade, or otherwise transfer your personal information to outside parties, except when required by law or to provide services you requested. <br>
                        <br>
                        <strong>PROTECTION OF PERSONAL INFORMATION</strong> <br>

                        We take responsibility of your personal information seriosuly, and will ensure that the personal information we hold is protected from misuse, loss or unauthorised access. <br>
                        <br>
                        <strong>YOUR RIGHTS TO ACCESS YOUR PERSONAL INFORMATION</strong> <br>

                        You have the right to access, correct, or delete your personal information. You can request this by contacting us through the details provided on our website. <br>
                        <br>
                        <strong>CHANGES TO THIS POLICY</strong> <br>

                        We reserve the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. <br>
                        <br>
                        <strong>CONTACT INFORMATION</strong> <br>

                        If you have any questions or concerns regarding this Privacy Policy, please contact us at gugicl1@eit.ac.nz</p>
                    
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Accept</button>
                </div>
            </div>
        </div>
      </div>

    `;

    // Return HTML view
    return ui;
  },

}
