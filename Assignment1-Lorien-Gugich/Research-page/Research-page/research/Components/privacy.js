// IMPORT

// COMPONENT CODES
export const privacy = {
  //------------------------------------

  // Data properties

  //------------------------------------
  // Component User Interface (UI)
  renderUI() {
    // Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="privacy-card" >
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
            align-items-center text-center text-primary p-3 rounded">
          <h3 class="fw-bold">Privacy and Privacy Policy</h3>
          <!-- Image Container -->
          <div class="m-2">
              <img id="portrait" class="img-fluid" src="https://mrd.co.nz/wp-content/uploads/2020/03/Feature-Image-Privacy-Policy.jpg" alt="Web Privacy">
          </div>


        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">

          <article>
              <h2 class="fw-bold mb-3">Privacy and NZ Privacy Policy</h2>
              
              <p><strong>What is a Privacy Policy?</strong> A legal statement explaining how an organization collects, uses, discloses, stores, and manages a user's personal information. It ensures compliance with legal frameworks and builds trust by keeping data handling transparent.</p>
              <h4 class="fw-bold mb-3">The 13 Information Privacy Principles (IPP) of the NZ Privacy Act 2020</h4>
              <p><strong>1. Purpose of Collection:</strong> Personal information must only be collected for a lawful purpose connected with a function or activity of the agency, and the collection must be necessary for that purpose.</p>            
              <p><strong>2. Source of Information:</strong> Personal information must be collected directly from the individual concerned unless specific exceptions apply (such as when the information is publicly available).</p>            
              <p><strong>3. Collection from Individual:</strong> When collecting information directly, an agency must ensure the individual is aware that it is being collected, why it is being collected, and who will receive it.</p>            
              <p><strong>4. Manner of Collection:</strong> Personal information must not be collected by unfair, unlawful, or unreasonably intrusive means.</p>            
              <p><strong>5. Storage and Security:</strong> An agency must ensure that personal information is protected by reasonable security safeguards against loss, unauthorized access, use, modification, or disclosure.</p>              
              <p><strong>6. Access to Information:</strong> Individuals have a legal right to request access to any personal information an agency holds about them, subject to limited statutory reasons for refusal.</p>            
              <p><strong>7. Correction of Information:</strong> Individuals have the right to request the correction of their personal information or to ask that a statement of the correction sought be attached to the data.</p>            
              <p><strong>8. Accuracy of Information:</strong> An agency must take reasonable steps to ensure that personal information is accurate, up-to-date, complete, and not misleading before using it.</p>             
              <p><strong>9. Retention of Information:</strong> An agency must not keep personal information for longer than is required for the lawful purposes for which the information may be used.</p>             
              <p><strong>10. Limits on Use:</strong> An agency must only use personal information for the specific purpose for which it was gathered unless an exception applies (such as individual authorization).</p>             
              <p><strong>11. Limits on Disclosure:</strong> An agency must not disclose personal information to another person or body unless an exception applies (such as preventing a serious threat to public safety).</p>             
              <p><strong>12. Disclosure Outside NZ:</strong> Personal information may only be sent to a foreign agency if that overseas entity is subject to privacy laws that offer comparable protections to New Zealand's Act.</p>            
              <p><strong>13. Unique Identifiers:</strong> Agencies cannot assign unique identifiers (like account numbers) to individuals unless it is necessary, and they cannot reuse identifiers assigned by other agencies.</p>
          
              <a href="https://mrd.co.nz/wp-content/uploads/2020/03/Feature-Image-Privacy-Policy.jpg" target="_blank" class="text-decoration-none small text-muted">
                  View Image Source
              </a>

          </article>
          
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
    document.getElementById('privacy-card').addEventListener('click', function() {
      // toggle('flipped') adds the CSS class 'flipped' 
      // to an HTML element if it is missing, or removes it if it is already there.
      this.classList.toggle("flipped");
    });
  },

}
