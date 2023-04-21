class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <footer class="w3-container w3-padding-32 w3-round-xxlarge cee-sans" style="background-color: #ECEEFD";>
      <div class="w3-row">
        <div class="w3-col l4 m4 s12 w3-padding">
          <img src="assets/logo.png" class="w3-margin-bottom"/>
          <br>
          <div>
            We’ve worked extensively in terms of geography and sector, developing a variety of work .
          </div>
        </div>
        <div class="w3-col l2 m2 s12 w3-padding">
          <h3 class="cee-footer-heading">Product</h3>
            <ul class="cee-footer-list">
              <li>Features</li>
              <li>Pricing</li>
            </ul>
        </div>
        <div class="w3-col l2 m2 s12 w3-padding">
          <h3 class="cee-footer-heading">Support</h3>
            <ul class="cee-footer-list">
              <li>Help and Support</li>
              <li>Chat</li>
              <li>Report a bug</li>
            </ul>
        </div>
        <div class="w3-col l2 m2 s12 w3-padding">
          <h3 class="cee-footer-heading">Get in Touch</h3>
            <ul class="cee-footer-list">
              <li>About</li>
              <li>Contact</li>
            </ul>
        </div>
      </div>
      <div class="w3-row">
        <div class="w3-col l6 m6 s12 w3-padding">
          <button class="w3-button w3-hover-none w3-round w3-round-xxlarge cee-download">Download now</button>
        </div>
        <div class="w3-col l6 m6 s12 cee-socials">
          <a href="#" class="fa-stack fa-2x">
            <i class="fa-solid fa-circle fa-stack-2x"></i>
            <i class="fa-brands fa-twitter fa-stack-1x fa-inverse"></i>
          </a>
          <a href="#" class="fa-stack fa-2x">
            <i class="fa-solid fa-circle fa-stack-2x"></i>
            <i class="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
          </a>
          <a href="#" class="fa-stack fa-2x">
            <i class="fa-solid fa-circle fa-stack-2x"></i>
            <i class="fa-brands fa-discord fa-stack-1x fa-inverse"></i>
          </a>
          <a href="#" class="fa-stack fa-2x">
            <i class="fa-solid fa-circle fa-stack-2x"></i>
            <i class="fa-brands fa-tiktok fa-stack-1x fa-inverse"></i>
          </a>
          <a href="#" class="fa-stack fa-2x">
            <i class="fa-solid fa-circle fa-stack-2x"></i>
            <i class="fa-brands fa-youtube fa-stack-1x fa-inverse"></i>
          </a> 
         </div>
      </div>
      <hr class="cee-hr">
      <div class="w3-row w3-margin">
        <div class="w3-col l6 m6 s12 w3-stretch">
          <div class="w3-bar">
            <a class="w3-bar-item" href="#">Cookies</a>
            <a class="w3-bar-item" href="#">Privacy Policy</a>
            <a class="w3-bar-item" href="#">Terms</a>
            <a class="w3-bar-item" href="#">Help Center</a>
            <a class="w3-bar-item" href="#">FAQ</a>
          </div>
        </div>
        <div class="w3-col l6 m6 s12">
          <div class="w3-bar">
            <span class="w3-bar-item">2023 © Cee. All rights reserved. Powered by orbital studio</span>
          </div>        
        </div>
      </div>
    </footer>
    `;
  }

}

customElements.define('cee-footer', Footer);
