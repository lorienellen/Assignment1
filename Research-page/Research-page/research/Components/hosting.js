// IMPORT

// COMPONENT CODES
export const hosting = {
  //------------------------------------
  // Data properties

  //------------------------------------
  // Component User Interface (UI)
  renderUI() {
    // Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="hosting-card" >
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
            align-items-center text-center text-primary p-3 rounded" >
          <h3 class="fw-bold">Web Hosting</h3>
          <!-- Image Container -->
          <div class="m-2">
              <img id="portrait" class="img-fluid" src="https://www.webdesignauckland.co/images/blog/the-impact-of-web-hosting-on-website-performance-and-security-1200x720.jpg" alt="Web Hosting">
          </div>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">

          <article>
              <h2 class="fw-bold mb-3">Five Factors for Choosing a Web Host</h2>
              
              <p><strong>1. Uptime Reliability:</strong> Choose a provider offering a verified 99.9% uptime guarantee to ensure your website remains consistently accessible online.</p>
              
              <p><strong>2. Server Speed:</strong> Prioritize hosts with solid-state drives (SSDs) and global content delivery networks (CDNs) for rapid page load performance.</p>
              
              <p><strong>3. Security Protections:</strong> Ensure the host provides automated backups, network firewalls, malware scanning, and free built-in SSL certificates.</p>
              
              <p><strong>4. Technical Support:</strong> Opt for providers that deliver reliable 24/7 customer service via live chat or phone to fix sudden server errors.</p>
              
              <p><strong>5. Scalability Plans:</strong> Pick a service with transparent pricing that allows you to seamlessly upgrade storage and bandwidth as traffic grows.</p>

              <a href="https://www.webdesignauckland.co/images/blog/the-impact-of-web-hosting-on-website-performance-and-security-1200x720.jpg" target="_blank" class="text-decoration-none small text-muted">
                  View Image Source
              </a>
          </article>
            
          </div>
      </div>    
    `;

    // Return HTML view
    return ui;
  },

  addEvent() {
    // Flip cards on click
    document.getElementById('hosting-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },
}
