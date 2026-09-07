// IMPORT

// COMPONENT CODES
export const seo = {
  //------------------------------------
  // Data properties

  //------------------------------------
  // Component User Interface (UI)
  renderUI() {
    // Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="seo-card" >
        <div class="flip-card-inner position-relative w-100 h-100">

          <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
              align-items-center text-center text-primary p-3 rounded" >
            <h3 class="fw-bold">Search Engine Optimization</h3>
            <!-- Image Container -->
            <div class="m-2">
                <img id="portrait" class="img-fluid" src="https://verticalresponse.com/wp-content/uploads/2022/10/seo.jpeg" alt="Search Engine Optimization">
            </div>
          </div>

          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
          
            <article>
              <h2 class="fw-bold mb-3">Five Ways to Improve SEO</h2>
              <p><strong>1. Keyword Research:</strong> Target long-tail phrases that match the specific phrases and search intents of your audience.</p>
              <p><strong>2. On-Page Optimization:</strong> Use keywords naturally inside short title tags, clear meta descriptions, and structural header elements.</p>
              <p><strong>3. Quality Content:</strong> Publish useful, comprehensive answers to user queries while adding descriptive alt text to all visual media.</p>            
              <p><strong>4. Technical Performance:</strong> Ensure fast page load speeds, fix layout issues on mobile devices, and secure your site using HTTPS.</p>            
              <p><strong>5. Trusted Backlinks:</strong> Earn links from reputable external websites to build authority and show search engines your platform is credible.</p>

              <a href="https://verticalresponse.com/wp-content/uploads/2022/10/seo.jpeg" target="_blank" class="text-decoration-none small text-muted">
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

  // Functions
  //------------------------------------
  addEvent() {
    // Flip cards on click
    document.getElementById('seo-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  }
}
