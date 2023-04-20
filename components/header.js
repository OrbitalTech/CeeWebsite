class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <header class="w3-center">
    <div class="w3-cell-row w3-padding-32">
      <div class="w3-cell w3-cell-middle w3-mobile">
        <img src="assets/logo_slogan.png" />
      </div>
      <div class="w3-cell w3-cell-middle w3-mobile">
        <div class="w3-round-xxlarge w3-white w3-xlarge w3-padding" style="max-width:fit-content">
          <a href="#" class="w3-bar-item cee-button w3-button w3-round-xxlarge">Home</a>
          <a href="#" class="w3-bar-item cee-button w3-button w3-round-xxlarge">About</a>
        </div>
      </div>
      <div class="w3-cell w3-cell-middle w3-mobile">
        <img onclick="document.getElementById('id01').style.display='block'" src="assets/download_pill.png" />
      </div>
    </div>
  </header>
    `;
  }

}

customElements.define('cee-footer', Header);
