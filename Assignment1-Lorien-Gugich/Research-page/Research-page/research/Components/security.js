//IMPORT

// COMPONENT CODES
export const security = {
  //------------------------------------
  // Data properties

  //------------------------------------
  // Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="security-card" >
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
            align-items-center text-center text-primary p-3 rounded" >
          <h3 class="fw-bold">Web Security</h3>
          <!-- Image Container -->
          <div class="m-2">
              <img id="portrait" class="img-fluid" src="https://cwatch.comodo.com/blog/wp-content/uploads/2020/05/good-website-security-plan.jpg" alt="Web Security">
          </div>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 bg-white p-3 rounded overflow-y-auto">

          <article>
              <h2 class="fw-bold mb-3">Cyber Attacks and Prevention</h2>             
              <p><strong>1. Phishing:</strong> Deceptive messages tricking users into revealing passwords or sensitive data.<br><em>Prevention:</em> Train users to check links and enforce Multi-Factor Authentication (MFA).</p>             
              <p><strong>2. Malware:</strong> Malicious software that steals data or holds files hostage via ransomware.<br><em>Prevention:</em> Run updated antivirus software and maintain secure, offline system backups.</p>            
              <p><strong>3. DDoS:</strong> Flooding a server with traffic to crash the website and block real users.<br><em>Prevention:</em> Use robust network firewalls and web traffic scrubbers like Cloudflare.</p>            
              <p><strong>4. SQL Injection:</strong> Inserting malicious code into web forms to steal data from databases.<br><em>Prevention:</em> Sanitize all user form inputs and use parameterized database queries.</p>             
              <p><strong>5. Cross-Site Scripting (XSS):</strong> Injecting harmful scripts into web pages that execute in visitors' browsers.<br><em>Prevention:</em> Escape frontend output data and deploy a strict Content Security Policy (CSP).</p>
          
              <a href="https://cwatch.comodo.com/blog/wp-content/uploads/2020/05/good-website-security-plan.jpg" target="_blank" class="text-decoration-none small text-muted">
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
    document.getElementById('security-card').addEventListener('click', function() {
      // toggle('flipped') adds the CSS class 'flipped' 
      // to an HTML element if it is missing, or removes it if it is already there.
      this.classList.toggle("flipped");
    });
  },
    
 //------------------------------------
 //Functions  

}
