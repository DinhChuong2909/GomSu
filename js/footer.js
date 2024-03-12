const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="./css/main.css" />
<link rel="stylesheet" href="./css/buttons.css" />
<link rel="stylesheet" href="./css/home.css" />
<footer>
      <div class="footer-wrapper">
        <div class="footer-content">
          <img class="logo" src="./assets/imgs/logo.png"/>
          <div class="footer-navbar">
            <div class="page-navbar">
              <a onclick="window.location='homepage.html'">Trang chủ</a>
              <a onclick="window.location='contactpage.html'">Giới thiệu</a>
              <a onclick="window.location='aboutpage.html'">Liên hệ</a>
              <a onclick="window.location='storepage.html'">Cửa hàng</a>
            </div>
            <div class="social-navbar">
              <a>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3333 4.77344H16.6667C9.7631 4.77344 4.16666 10.1849 4.16666 16.8602V32.9759C4.16666 39.6513 9.7631 45.0627 16.6667 45.0627H33.3333C40.2369 45.0627 45.8333 39.6513 45.8333 32.9759V16.8602C45.8333 10.1849 40.2369 4.77344 33.3333 4.77344ZM8.33333 16.8602C8.33333 12.41 12.0643 8.80235 16.6667 8.80235H33.3333C37.9357 8.80235 41.6667 12.41 41.6667 16.8602V32.9759C41.6667 37.4261 37.9357 41.0338 33.3333 41.0338H16.6667C12.0643 41.0338 8.33333 37.4261 8.33333 32.9759V16.8602ZM25 34.9904C19.247 34.9904 14.5833 30.4809 14.5833 24.9181C14.5833 19.3553 19.247 14.8457 25 14.8457C30.753 14.8457 35.4167 19.3553 35.4167 24.9181C35.4167 30.4809 30.753 34.9904 25 34.9904ZM25 30.9615C28.4518 30.9615 31.25 28.2558 31.25 24.9181C31.25 21.5804 28.4518 18.8747 25 18.8747C21.5482 18.8747 18.75 21.5804 18.75 24.9181C18.75 28.2558 21.5482 30.9615 25 30.9615ZM37.5 14.8458C37.5 15.9583 36.5673 16.8602 35.4167 16.8602C34.2661 16.8602 33.3333 15.9583 33.3333 14.8458C33.3333 13.7332 34.2661 12.8313 35.4167 12.8313C36.5673 12.8313 37.5 13.7332 37.5 14.8458Z" fill="currentcolor"/>
                </svg>
              </a>

              <a>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33334 4.77344H41.6667C43.9679 4.77344 45.8333 6.57725 45.8333 8.80237V41.0338C45.8333 43.2589 43.9679 45.0627 41.6667 45.0627H8.33334C6.03215 45.0627 4.16667 43.2589 4.16667 41.0338V8.80237C4.16667 6.57725 6.03215 4.77344 8.33334 4.77344ZM8.33334 8.80235V41.0338H41.6667V8.80235H8.33334ZM23.1939 24.9269H27.0833V37.0049H31.25V24.9269H35.38V20.898H31.25V18.8747C31.25 17.7621 32.1827 16.8602 33.3333 16.8602H35.4167V12.8313H33.3333C29.8816 12.8313 27.0833 15.537 27.0833 18.8747V20.898H23.1939V24.9269Z" fill="currentcolor"/>
                </svg>
              </a>

              <a>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33332 4.77344H41.6667C43.9678 4.77344 45.8333 6.57725 45.8333 8.80237V41.0338C45.8333 43.2589 43.9678 45.0627 41.6667 45.0627H8.33332C6.03214 45.0627 4.16666 43.2589 4.16666 41.0338V8.80237C4.16666 6.57725 6.03214 4.77344 8.33332 4.77344ZM8.33332 8.80235V41.0338H41.6667V8.80235H8.33332ZM27.0833 18.8747C26.0047 18.8747 24.8651 19.1935 23.8586 19.7855L22.9167 18.8747H20.8333V32.976H25V24.9181C25 23.7583 26.2374 22.9036 27.0833 22.9036H29.1667C30.0126 22.9036 31.25 23.7583 31.25 24.9181V32.976H35.4167V24.9181C35.4167 21.1856 32.0707 18.8747 29.1667 18.8747H27.0833ZM16.6667 16.8602C17.8172 16.8602 18.75 15.9583 18.75 14.8458C18.75 13.7332 17.8172 12.8313 16.6667 12.8313C15.5161 12.8313 14.5833 13.7332 14.5833 14.8458C14.5833 15.9583 15.5161 16.8602 16.6667 16.8602ZM14.5833 18.8747V32.976H18.75V18.8747H14.5833Z" fill="currentcolor"/>
                </svg>
              </a>
              
              <a>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M45.8849 37.2624C47.3084 34.9034 47.9167 31.0996 47.9167 24.9118C47.9167 18.7487 47.3142 14.967 45.8755 12.5447C44.4336 10.0293 42.7236 9.2309 39.3298 9.03926C37.0129 8.88742 31.2547 8.80176 25.0056 8.80176C18.7429 8.80176 12.9822 8.88739 10.6479 9.04045C7.27317 9.23136 5.56274 10.0315 4.1082 12.5539C2.69039 14.9678 2.08334 18.7681 2.08334 24.9344C2.08334 31.0657 2.69333 34.885 4.12066 37.2911C5.55629 39.7809 7.23945 40.5715 10.6429 40.8026C13.0891 40.941 19.1759 41.0332 25.0056 41.0332C30.8222 41.0332 36.906 40.941 39.3298 40.8041C42.7646 40.5715 44.4474 39.7797 45.8849 37.2624ZM39.0675 13.0601C41.1904 13.1801 41.584 13.3646 42.2569 14.5422C43.2366 16.1827 43.75 19.3932 43.75 24.9344C43.75 30.4336 43.2338 33.6618 42.2615 35.2738C41.5863 36.4551 41.1954 36.639 39.0627 36.7836C36.7686 36.913 30.7438 37.0042 25.0056 37.0042C19.2544 37.0042 13.2266 36.913 10.9105 36.7821C8.8042 36.6389 8.40762 36.4526 7.74737 35.3077C6.76847 33.6573 6.25001 30.411 6.25001 24.9118C6.25001 19.4159 6.76571 16.1876 7.73938 14.5297C8.4099 13.3671 8.80926 13.1802 10.9106 13.0613C13.1356 12.9155 18.8422 12.8307 25.0056 12.8307C31.1557 12.8307 36.8596 12.9155 39.0675 13.0601ZM20.8333 18.8741L31.25 24.9175L20.8333 30.9609V18.8741Z" fill="currentcolor"/>
                </svg> 
              </a>               
            </div>
          </div>
          <div class="footer-info">
            <p>&copy; COPYRIGHT SITENAME. ALL RIGHTS RESERVED </p>
            <p>POWERED by CREATE ECOMMERCE</p>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
