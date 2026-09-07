//IMPORT

//COMPONENT CODES
export const maintenance = {
  //------------------------------------
  //Data properties

  //------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="maintenance-card" >
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
            align-items-center text-center text-primary p-3 rounded" >
          <h3 class="fw-bold">Performance & Maintenance</h3>
          <!-- Image Container -->
          <div class="m-2">
              <img id="portrait" class="img-fluid" src="https://hakimisolutions.com/wp-content/uploads/maintenance-partner-min.png" alt="Web Maintenance">
          </div>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
        
          <article>
              <h2 class="fw-bold mb-3">Five Factors for Choosing a Web Host</h2>
              
              <p><strong>1. Uptime and Reliability:</strong> Look for providers offering a verified 99.9% uptime guarantee to ensure your site remains consistently accessible to visitors.</p>
              
              <p><strong>2. Loading Speed and Performance:</strong> Prioritize hosts that utilize solid-state drives (SSDs), content delivery networks (CDNs), and optimized server resources for fast page loads.</p>
              
              <p><strong>3. Security Features:</strong> Ensure the provider includes automated daily backups, firewalls, malware scanning, and free SSL certificates to protect your data.</p>
              
              <p><strong>4. Customer Support:</strong> Opt for companies that offer 24/7 technical support through live chat or phone so emergency server issues can be resolved instantly.</p>
              
              <p><strong>5. Scalability and Cost:</strong> Choose a host with transparent renewal pricing that lets you easily upgrade resources as your website traffic grows.</p>
              
              <a href="https://hakimisolutions.com/wp-content/uploads/maintenance-partner-min.png" target="_blank" class="text-decoration-none small text-muted">
                  View Image Source
              </a>
          
              </article>

        </div>

        </div>
      </div>    
    `;

    //Return HTML view
    return ui;
  },

  addEvent() {
    // Flip cards on click
    document.getElementById('maintenance-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

  //------------------------------------
  //Functions

}
