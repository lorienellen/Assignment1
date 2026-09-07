//IMPORT

//COMPONENT CODES
export const copyright = {
  //------------------------------------
  // Data properties

  //------------------------------------
  // Component User Interface (UI)
  renderUI() {
    // Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="copyright-card" >
        <div class="flip-card-inner position-relative w-100 h-100">
          <!-- Card front-->
          <div class="flip-card-front position-absolute w-100 h-100
                      d-flex flex-column justify-content-center align-items-center 
                      text-center text-primary p-3 rounded">
            <h3 class="fw-bold">Copyright, CC Licenses & Fair Use</h3>
            <!-- Image Container -->
            <div class="m-2">
                <img id="portrait" class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoQZu4PBwVAKvn04ZhEiGrywg3qR6-VSV5oCOSfLp8lH3N2GIjxKxCZcA&s=10" alt="Copyright Laws">
            </div>
          </div>

          <!-- Card back -->
          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
            
            <article>
              <h2 class="fw-bold mb-3">Copyright, Creative Commons and Fair Use</h2>
              
              <p><strong>Copyright Principles:</strong> Intellectual property law automatically grants creators exclusive rights to their original works (such as text, images, or code) upon creation. It restricts unauthorized duplication, modification, or commercial distribution by third parties without explicit permission.</p>
              
              <h4 class="fw-bold mb-2">Four Common Creative Commons (CC) Conditions</h4>
              <p><strong>1. Attribution (BY):</strong> Anyone reusing the creator's work must provide clear credit to the original author.</p>
              <p><strong>2. ShareAlike (SA):</strong> Any modified versions or adaptations of the work must be shared under the exact same license terms.</p>
              <p><strong>3. NonCommercial (NC):</strong> The licensed work can only be modified or redistributed for non-monetized purposes.</p>
              <p><strong>4. NoDerivatives (ND):</strong> The work can be redistributed freely, but it must remain intact and completely unedited.</p>
              
              <p><strong>Fair Use Framework:</strong> A legal doctrine that permits limited reuse of copyrighted material without permission. This applies specifically to transformative, non-commercial tasks such as news reporting, academic criticism, education, parody, or parody evaluation.</p>
              
              <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoQZu4PBwVAKvn04ZhEiGrywg3qR6-VSV5oCOSfLp8lH3N2GIjxKxCZcA&s=10" target="_blank" class="text-decoration-none small text-muted">
                  View Image Source
              </a>

              </article>

          </div>

        </div>
      </div>    
    `;

    // Return HTML view
    return ui;
  },

  //------------------------------------
  // Functions
  addEvent() {
    // Flip cards on click
    document.getElementById('copyright-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },
  
}
