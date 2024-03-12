const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="./css/main.css" />
<link rel="stylesheet" href="./css/buttons.css" />

<header>
<div class="wrapper">
  <div class="wrapper">
    <nav class="navbar">
      <!-- menu responsive -->
      <div class="menu">
        <svg
          width="57"
          height="57"
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.25 16.625V11.875H4.75V16.625H52.25ZM52.25 26.125V30.875H4.75V26.125H52.25ZM52.25 40.375V45.125H4.75V40.375H52.25Z"
            fill="currentcolor"
          />
        </svg>
      </div>
      <!-- logo -->
      <img class="logo" src="./assets/imgs/logo.png" />
      <!-- navbar -->
      <div class="navbar-items">
        <div class="navbar-wrapper">
          <a class="menu-button" onclick="window.location='homepage.html'">Trang Chủ</a>
          <a class="menu-button" onclick="window.location='aboutpage.html'">Giới Thiệu</a>
          <a class="menu-button" onclick="window.location='contactpage.html'">Liên Hệ</a>
          <a class="menu-button" onclick="window.location='storepage.html'">Cửa Hàng</a>
        </div>
        <div class="user-toggle">
          <!-- User -->
          <a class="icon" onclick="window.location='loginpage.html'">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="24 / basic / user">
                <path
                  id="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.5 54.625C14.0716 54.625 2.375 42.9284 2.375 28.5C2.375 14.0716 14.0716 2.375 28.5 2.375C42.9284 2.375 54.625 14.0716 54.625 28.5C54.625 42.9284 42.9284 54.625 28.5 54.625ZM46.0738 40.671C48.4705 37.217 49.875 33.0225 49.875 28.5C49.875 16.6949 40.3051 7.125 28.5 7.125C16.6949 7.125 7.125 16.6949 7.125 28.5C7.125 33.0225 8.52953 37.217 10.9262 40.671C13.5991 37.1404 19.8802 35.625 28.5 35.625C37.1198 35.625 43.4009 37.1404 46.0738 40.671ZM42.6661 44.5069C41.971 42.0075 36.9773 40.375 28.5 40.375C20.0227 40.375 15.029 42.0075 14.3339 44.5069C18.1053 47.8472 23.0659 49.875 28.5 49.875C33.9341 49.875 38.8947 47.8472 42.6661 44.5069ZM28.5 14.25C22.7504 14.25 19 18.4199 19 23.75C19 31.89 23.1821 35.625 28.5 35.625C33.768 35.625 38 32.0141 38 24.225C38 18.8137 34.2337 14.25 28.5 14.25ZM23.75 23.75C23.75 29.1395 25.6933 30.875 28.5 30.875C31.2971 30.875 33.25 29.2087 33.25 24.225C33.25 21.2572 31.3872 19 28.5 19C25.4926 19 23.75 20.9376 23.75 23.75Z"
                  fill="currentcolor"
                />
              </g>
            </svg>
          </a>

          <!-- cart -->
          <a class="icon" onclick="window.location='cartpage.html'">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="24 / shopping / cart">
                <path
                  id="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4192 9.50604C13.9974 9.50512 13.5908 9.55287 13.2044 9.64363C12.6748 8.47622 11.9751 7.42886 11.1794 6.63312C9.82878 5.28252 7.69869 4.75 4.75 4.75V9.5C6.55131 9.5 7.58789 9.75914 7.82062 9.99188C8.7183 10.8896 9.5 12.7135 9.5 14.25L9.52387 14.5859L11.8511 30.8762C7.95709 31.0782 4.94047 34.1022 4.75292 37.8823L4.75 40.375C4.97995 44.2793 7.98654 47.2828 11.7402 47.4962L12.2794 47.497C13.2566 50.2659 15.8966 52.25 19 52.25C22.1023 52.25 24.7415 50.2673 25.7196 47.5H31.2804C32.2585 50.2673 34.8977 52.25 38 52.25C41.935 52.25 45.125 49.06 45.125 45.125C45.125 41.19 41.935 38 38 38C34.8977 38 32.2585 39.9827 31.2804 42.75H25.7196C24.7415 39.9827 22.1023 38 19 38C15.8977 38 13.2585 39.9827 12.2804 42.75H11.875C10.6638 42.6773 9.57727 41.5919 9.49574 40.2328L9.5 38C9.56404 36.7681 10.6431 35.689 11.9927 35.6221L16.6813 35.6232L16.7153 35.625H40.6525L41.0031 35.5138C42.8039 34.9423 44.2454 33.5864 44.9279 31.831L45.1781 31.3358L45.4804 30.7371L45.9911 29.7252C46.8321 28.0581 47.6731 26.388 48.4927 24.7565C50.5001 20.76 51.7626 18.2202 52.0422 17.5965C53.478 14.3936 50.5695 11.9283 47.5967 11.8759L14.4192 9.50604ZM39.8274 30.875H16.8931C16.7406 30.8326 16.6244 30.7034 16.6016 30.5425L14.2744 14.2517L47.2468 16.6129C46.6698 17.7895 45.6211 19.891 44.2481 22.6245L44.2137 22.693C43.4299 24.2532 42.59 25.9209 41.7501 27.5858L41.2401 28.5965L40.9382 29.1943L40.6304 29.8035L40.5146 30.0728C40.3905 30.4184 40.1442 30.7025 39.8274 30.875ZM38 47.5C39.3117 47.5 40.375 46.4367 40.375 45.125C40.375 43.8133 39.3117 42.75 38 42.75C36.6883 42.75 35.625 43.8133 35.625 45.125C35.625 46.4367 36.6883 47.5 38 47.5ZM21.375 45.125C21.375 46.4367 20.3117 47.5 19 47.5C17.6883 47.5 16.625 46.4367 16.625 45.125C16.625 43.8133 17.6883 42.75 19 42.75C20.3117 42.75 21.375 43.8133 21.375 45.125Z"
                  fill="currentcolor"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </div>
</div>
</header>
<script src="./main.js"></script>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
