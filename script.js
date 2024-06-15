// For menu button
if (window.innerWidth < 465) {
  document.querySelector(".menubtn").querySelector("p").hidden = true;
} else {
  document.querySelector(".menubtn").querySelector("p").hidden = false;
}

// For logo
if (window.innerWidth >= 930) {
  document.querySelector(
    ".logo"
  ).innerHTML = `<svg class="svgLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300" width="210" height="42">
<title>Porsche.com</title>
<path
    d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z">
</path>
</svg>`;
} else if (window.innerWidth < 930 && window.innerWidth >= 755) {
  document.querySelector(
    ".logo"
  ).innerHTML = `<svg class="svgLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300" width="180" height="42">
<title>Porsche.com</title>
<path
    d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z">
</path>
</svg>`;
} else if (window.innerWidth < 755) {
  document.querySelector(
    ".logo"
  ).innerHTML = `<img src="porsche_logo.png" alt="Porsche" width="30">
<title>Porsche.com</title> `;
}

// For carousel 2
if (window.innerWidth > 992) {
  var T = document.createElement("script");
  T.className = "js2";
  T.setAttribute("src", "/script2.js");
  document.querySelector("body").appendChild(T);

  document.querySelector(
    ".carousel2"
  ).innerHTML = `<h5>Find a Porsche near you</h5>
    <div class="carousel_Inner">
        <div class="controls prevbtn" onclick="prevslide()">
            <div class="btN1">
                <button class="btN prev"></button>
            </div>
        </div>
        <div class="Slide">
            <div class="Carousel">
                <div class="item i1">
                    <img src="p1.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib1">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find 718 Models</p>
                    </button>
                </div>
                <div class="item i2">
                    <img src="p2.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib2">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find 911 Models</p>
                    </button>
                </div>
                <div class="item i3">
                    <img src="p3.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib3">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Taycan Models</p>
                    </button>
                </div>
                <div class="item i4">
                    <img src="p6.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib4">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Panamera Models</p>
                    </button>
                </div>
                <div class="item i5">
                    <img src="p5.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib5">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Macan Models</p>
                    </button>
                </div>
                <div class="item i6">
                    <img src="p4.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib6">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Cayanne Models</p>
                    </button>
                </div>
            </div>
            <div class="indicators">
                <button type="button" class="indibtn indi0 activeindicator" onclick="toslide('0')"></button>
                <button type="button" class="indibtn indi1" onclick="toslide('1')"></button>
                <button type="button" class="indibtn indi2" onclick="toslide('2')"></button>
                <button type="button" class="indibtn indi3" onclick="toslide('3')"></button>
            </div>
        </div>
        <div class="controls nextbtn" onclick='nextslide()'>
            <div class="btN1">
                <button class="btN next"></button>
            </div>
        </div>
    </div>`;
} else if (window.innerWidth >= 480 && window.innerWidth < 992) {
  var T = document.createElement("script");
  T.className = "js3";
  T.setAttribute("src", "/script3.js");
  document.querySelector("body").appendChild(T);

  document.querySelector(
    ".carousel2"
  ).innerHTML = `<h5>Find a Porsche near you</h5>
    <div class="Carousel_Inner">
        <div class="sliDe">
            <div class="carouseL">
                <div class="Item I1">
                    <img src="p1.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib1">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find 718 Models</p>
                    </button>
                </div>
                <div class="Item I2">
                    <img src="p2.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib2">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find 911 Models</p>
                    </button>
                </div>
                <div class="Item I3">
                    <img src="p3.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib3">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Taycan Models</p>
                    </button>
                </div>
                <div class="Item I4">
                    <img src="p6.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib4">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Panamera Models</p>
                    </button>
                </div>
                <div class="Item I5">
                    <img src="p5.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib5">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Macan Models</p>
                    </button>
                </div>
                <div class="Item I6">
                    <img src="p4.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib6">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Cayanne Models</p>
                    </button>
                </div>
            </div>
            <div class="indicators">
                <button type="button" class="inDibtn inDi0 activeindicator" onclick="tosliDe('0')"></button>
                <button type="button" class="inDibtn inDi1" onclick="tosliDe('1')"></button>
                <button type="button" class="inDibtn inDi2" onclick="tosliDe('2')"></button>
                <button type="button" class="inDibtn inDi3" onclick="tosliDe('3')"></button>
                <button type="button" class="inDibtn inDi4" onclick="tosliDe('4')"></button>
            </div>
        </div>
    </div>`;
} else if (window.innerWidth < 480) {
  var T = document.createElement("script");
  T.className = "js4";
  T.setAttribute("src", "/script4.js");
  document.querySelector("body").appendChild(T);

  document.querySelector(
    ".carousel2"
  ).innerHTML = `<h5>Find a Porsche near you</h5>
    <div class="CarouSel_Inner">
      <div class="sliDE">
        <div class="carouSeL">
          <div class="ITem Ii1">
            <img src="p1.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib1">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://wwwIw3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find 718 Models</p>
            </button>
          </div>
          <div class="ITem Ii2">
            <img src="p2.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib2">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find 911 Models</p>
            </button>
          </div>
          <div class="ITem Ii3">
            <img src="p3.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib3">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find Taycan Models</p>
            </button>
          </div>
          <div class="ITem Ii4">
            <img src="p6.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib4">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find Panamera Models</p>
            </button>
          </div>
          <div class="ITem Ii5">
            <img src="p5.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib5">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find Macan Models</p>
            </button>
          </div>
          <div class="ITem Ii6">
            <img src="p4.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib6">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find Cayanne Models</p>
            </button>
          </div>
        </div>
        <div class="indicators">
          <button type="button" class="InDibtn InDi0 activeindicator" onclick="tosLiDe('0')"></button>
          <button type="button" class="InDibtn InDi1" onclick="tosLiDe('1')"></button>
          <button type="button" class="InDibtn InDi2" onclick="tosLiDe('2')"></button>
          <button type="button" class="InDibtn InDi3" onclick="tosLiDe('3')"></button>
          <button type="button" class="InDibtn InDi4" onclick="tosLiDe('4')"></button>
          <button type="button" class="InDibtn InDi5" onclick="tosLiDe('5')"></button>
        </div>
      </div>
    </div>`;
}

if (window.innerWidth <= 992) {
  document.querySelector(".sho4").hidden = true;
} else {
  document.querySelector(".sho4").hidden = false;
}

// For social
if (window.innerWidth < 760) {
  document.querySelector(".socialIn").querySelector(".posts3").hidden = true;
} else {
  document.querySelector(".socialIn").querySelector(".posts3").hidden = false;
}

if (window.innerWidth < 480) {
  document.querySelector(".socialIn").querySelector(".posts2").hidden = true;
} else {
  document.querySelector(".socialIn").querySelector(".posts2").hidden = false;
}

if (window.innerWidth < 540) {
  document.querySelector(".footlinks").innerHTML = `<div class="footIN">

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <hr>
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Build & Find
              </button>
              <hr>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Build your Porsche</p>
                <p>Comapre Models</p>
                <p>Search Pre-Owned</p>
                <p>Find your Porsche Centre</p>
                <p>Download the model range catalogue</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Online Services
              </button>
              <hr>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Sign up for News</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Behind the Scenes
              </button>
              <hr>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Passion Motersports</p>
                <p>Porsche Experience</p>
                <p>Porsche Classic</p>
                <p>Visit Porsche Museum</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Porsche Comapany
              </button>
              <hr>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Latest news</p>
                <p>At a Glance</p>
                <p>Jobs & Careers</p>
                <p>Contacr & Information</p>
                <p>Cristophorus - The Porsche Magazine</p>
              </div>
            </div>
          </div>
        </div>

        <button class="share">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" height="26px"
            width="26px" version="1.1" id="Layer_1" viewBox="0 0 458.624 458.624" xml:space="preserve">
            <g>
              <g>
                <path
                  d="M339.588,314.529c-14.215,0-27.456,4.133-38.621,11.239l-112.682-78.67c1.809-6.315,2.798-12.976,2.798-19.871    c0-6.896-0.989-13.557-2.798-19.871l109.64-76.547c11.764,8.356,26.133,13.286,41.662,13.286c39.79,0,72.047-32.257,72.047-72.047    C411.634,32.258,379.378,0,339.588,0c-39.79,0-72.047,32.257-72.047,72.047c0,5.255,0.578,10.373,1.646,15.308l-112.424,78.491    c-10.974-6.759-23.892-10.666-37.727-10.666c-39.79,0-72.047,32.257-72.047,72.047s32.256,72.047,72.047,72.047    c13.834,0,26.753-3.907,37.727-10.666l113.292,79.097c-1.629,6.017-2.514,12.34-2.514,18.872c0,39.79,32.257,72.047,72.047,72.047    c39.79,0,72.047-32.257,72.047-72.047C411.635,346.787,379.378,314.529,339.588,314.529z" />
              </g>
            </g>
          </svg>
          <p style="padding: 0; margin: 0;">Share Page</p>
        </button>
        <div class="connect">
          <h5>Connect with Porsche</h5>
          <div class="sociallinks">
            <button class="socialbtn1"><svg fill="white" width="33px" height="33px" viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
              </svg></button>
            <button class="socialbtn2"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="white"
                class="bi bi-youtube" viewBox="0 0 16 16">
                <path
                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg></button>
            <button class="socialbtn3"><svg fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 97.672 97.672">
                <g>
                  <path d="M51.125,0C24.469,0,11.029,19.11,11.029,35.047c0,9.649,3.653,18.232,11.487,21.432c1.286,0.525,2.438,0.019,2.812-1.403
               c0.258-0.985,0.871-3.468,1.144-4.503c0.376-1.407,0.229-1.9-0.807-3.126c-2.259-2.665-3.703-6.115-3.703-11.002
               c0-14.178,10.608-26.87,27.624-26.87c15.064,0,23.342,9.206,23.342,21.5c0,16.176-7.159,29.828-17.786,29.828
               c-5.87,0-10.262-4.854-8.854-10.807c1.686-7.107,4.951-14.778,4.951-19.907c0-4.592-2.463-8.423-7.565-8.423
               c-6,0-10.819,6.207-10.819,14.521c0,5.296,1.789,8.878,1.789,8.878s-6.141,26.015-7.215,30.571
               c-2.145,9.072-0.322,20.195-0.168,21.318c0.089,0.666,0.944,0.824,1.332,0.322c0.555-0.723,7.7-9.544,10.129-18.359
               c0.687-2.496,3.944-15.42,3.944-15.42c1.95,3.717,7.647,6.992,13.706,6.992c18.034,0,30.271-16.441,30.271-38.45
               C86.644,15.498,72.547,0,51.125,0z" />
                </g>
              </svg></button>
            <button class="socialbtn4"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="white"
                class="bi bi-instagram" viewBox="0 0 16 16">
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg></button>
            <button class="socialbtn5"><svg fill="white" version="1.1" width="22px" height="22px" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-271 283.9 256 235.1" xml:space="preserve">
                <g>
                  <rect x="-264.4" y="359.3" width="49.9" height="159.7" />
                  <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
               C-210.8,295.8-222.1,283.9-240.5,283.9z" />
                  <path
                    d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
               c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z" />
                </g>
              </svg></button>
          </div>
        </div>

      </div>`;
} else {
  document.querySelector(".footlinks").innerHTML = ` <div class="footIn">
          <div class="links">
            <h5>Build & Find</h5>
            <p>Build your Porsche</p>
            <p>Comapre Models</p>
            <p>Search Pre-Owned</p>
            <p>Find your Porsche Centre</p>
            <p>Download the model range catalogue</p>
          </div>
          <div class="links">
            <h5>Online Services</h5>
            <p>Sign up for News</p>
          </div>
          <div class="links">
            <h5>Behind the Scenes</h5>
            <p>Passion Motersports</p>
            <p>Porsche Experience</p>
            <p>Porsche Classic</p>
            <p>Visit Porsche Museum</p>
          </div>
          <div class="links">
            <h5>Porsche Comapany</h5>
            <p>Latest news</p>
            <p>At a Glance</p>
            <p>Jobs & Careers</p>
            <p>Contacr & Information</p>
            <p>Cristophorus - The Porsche Magazine</p>
            <button class="share">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white"
                height="26px" width="26px" version="1.1" id="Layer_1" viewBox="0 0 458.624 458.624" xml:space="preserve">
                <g>
                  <g>
                    <path
                      d="M339.588,314.529c-14.215,0-27.456,4.133-38.621,11.239l-112.682-78.67c1.809-6.315,2.798-12.976,2.798-19.871    c0-6.896-0.989-13.557-2.798-19.871l109.64-76.547c11.764,8.356,26.133,13.286,41.662,13.286c39.79,0,72.047-32.257,72.047-72.047    C411.634,32.258,379.378,0,339.588,0c-39.79,0-72.047,32.257-72.047,72.047c0,5.255,0.578,10.373,1.646,15.308l-112.424,78.491    c-10.974-6.759-23.892-10.666-37.727-10.666c-39.79,0-72.047,32.257-72.047,72.047s32.256,72.047,72.047,72.047    c13.834,0,26.753-3.907,37.727-10.666l113.292,79.097c-1.629,6.017-2.514,12.34-2.514,18.872c0,39.79,32.257,72.047,72.047,72.047    c39.79,0,72.047-32.257,72.047-72.047C411.635,346.787,379.378,314.529,339.588,314.529z" />
                  </g>
                </g>
              </svg>
              <p style="padding: 0; margin: 0;">Share Page</p>
            </button>
            <div class="connect">
              <h5>Connect with Porsche</h5>
              <div class="sociallinks">
                <button class='socialbtn1'><svg fill="white" width="33px" height="33px" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
                  </svg></button>
                <button class='socialbtn2'><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="white"
                    class="bi bi-youtube" viewBox="0 0 16 16">
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg></button>
                <button class='socialbtn3'><svg fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 97.672 97.672">
                    <g>
                      <path d="M51.125,0C24.469,0,11.029,19.11,11.029,35.047c0,9.649,3.653,18.232,11.487,21.432c1.286,0.525,2.438,0.019,2.812-1.403
                   c0.258-0.985,0.871-3.468,1.144-4.503c0.376-1.407,0.229-1.9-0.807-3.126c-2.259-2.665-3.703-6.115-3.703-11.002
                   c0-14.178,10.608-26.87,27.624-26.87c15.064,0,23.342,9.206,23.342,21.5c0,16.176-7.159,29.828-17.786,29.828
                   c-5.87,0-10.262-4.854-8.854-10.807c1.686-7.107,4.951-14.778,4.951-19.907c0-4.592-2.463-8.423-7.565-8.423
                   c-6,0-10.819,6.207-10.819,14.521c0,5.296,1.789,8.878,1.789,8.878s-6.141,26.015-7.215,30.571
                   c-2.145,9.072-0.322,20.195-0.168,21.318c0.089,0.666,0.944,0.824,1.332,0.322c0.555-0.723,7.7-9.544,10.129-18.359
                   c0.687-2.496,3.944-15.42,3.944-15.42c1.95,3.717,7.647,6.992,13.706,6.992c18.034,0,30.271-16.441,30.271-38.45
                   C86.644,15.498,72.547,0,51.125,0z" />
                    </g>
                  </svg></button>
                <button class='socialbtn4'><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="white"
                    class="bi bi-instagram" viewBox="0 0 16 16">
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg></button>
                <button class='socialbtn5'><svg fill="white" version="1.1" width="22px" height="22px" id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-271 283.9 256 235.1" xml:space="preserve">
                    <g>
                      <rect x="-264.4" y="359.3" width="49.9" height="159.7" />
                      <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
                   C-210.8,295.8-222.1,283.9-240.5,283.9z" />
                      <path
                        d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
                   c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z" />
                    </g>
                  </svg></button>
              </div>
            </div>
          </div>
        </div>`;
}
window.addEventListener("resize", () => {
  // For logo
  if (window.innerWidth >= 930) {
    document.querySelector(
      ".logo"
    ).innerHTML = `<svg class="svgLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300" width="210" height="42">
  <title>Porsche.com</title>
  <path
      d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z">
  </path>
</svg>`;
  } else if (window.innerWidth < 930 && window.innerWidth >= 755) {
    document.querySelector(
      ".logo"
    ).innerHTML = `<svg class="svgLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300" width="180" height="42">
  <title>Porsche.com</title>
  <path
      d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z">
  </path>
</svg>`;
  } else if (window.innerWidth < 755) {
    document.querySelector(
      ".logo"
    ).innerHTML = `<img src="porsche_logo.png" alt="Porsche" width="30">
  <title>Porsche.com</title> `;
  }

  // For Menu button
  if (window.innerWidth < 465) {
    document.querySelector(".menubtn").querySelector("p").hidden = true;
  } else {
    document.querySelector(".menubtn").querySelector("p").hidden = false;
  }
});

window.addEventListener("resize", () => {
  // For carousel 2
  if (window.innerWidth >= 992) {
    if (!document.body.contains(document.querySelector(".js2"))) {
      var T = document.createElement("script");
      T.className = "js2";
      T.setAttribute("src", "/script2.js");
      document.querySelector("body").appendChild(T);
    }
    if (document.body.contains(document.querySelector(".js3"))) {
      document.querySelector(".js3").remove();
    }
    if (document.body.contains(document.querySelector(".js4"))) {
      document.querySelector(".js4").remove();
    }

    document.querySelector(
      ".carousel2"
    ).innerHTML = `<h5>Find a Porsche near you</h5>
    <div class="carousel_Inner">
        <div class="controls prevbtn" onclick="prevslide()">
            <div class="btN1">
                <button class="btN prev"></button>
            </div>
        </div>
        <div class="Slide">
            <div class="Carousel">
                <div class="item i1">
                    <img src="p1.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib1">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find 718 Models</p>
                    </button>
                </div>
                <div class="item i2">
                    <img src="p2.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib2">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find 911 Models</p>
                    </button>
                </div>
                <div class="item i3">
                    <img src="p3.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib3">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Taycan Models</p>
                    </button>
                </div>
                <div class="item i4">
                    <img src="p6.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib4">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Panamera Models</p>
                    </button>
                </div>
                <div class="item i5">
                    <img src="p5.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib5">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Macan Models</p>
                    </button>
                </div>
                <div class="item i6">
                    <img src="p4.webp" alt="..." width="100%">
                    <button type="button" class="itembtn ib6">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Cayanne Models</p>
                    </button>
                </div>
            </div>
            <div class="indicators">
                <button type="button" class="indibtn indi0 activeindicator" onclick="toslide('0')"></button>
                <button type="button" class="indibtn indi1" onclick="toslide('1')"></button>
                <button type="button" class="indibtn indi2" onclick="toslide('2')"></button>
                <button type="button" class="indibtn indi3" onclick="toslide('3')"></button>
            </div>
        </div>
        <div class="controls nextbtn" onclick='nextslide()'>
            <div class="btN1">
                <button class="btN next"></button>
            </div>
        </div>
    </div>`;
  } else if (window.innerWidth < 992 && window.innerWidth >= 480) {
    if (!document.body.contains(document.querySelector(".js3"))) {
      var T = document.createElement("script");
      T.className = "js3";
      T.setAttribute("src", "/script3.js");
      document.querySelector("body").appendChild(T);
    }
    if (document.body.contains(document.querySelector(".js2"))) {
      document.querySelector(".js2").remove();
    }
    if (document.body.contains(document.querySelector(".js4"))) {
      document.querySelector(".js4").remove();
    }

    document.querySelector(
      ".carousel2"
    ).innerHTML = `<h5>Find a Porsche near you</h5>
        <div class="Carousel_Inner">
        <div class="sliDe">
            <div class="carouseL">
                <div class="Item I1">
                    <img src="p1.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib1">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find 718 Models</p>
                    </button>
                </div>
                <div class="Item I2">
                    <img src="p2.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib2">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find 911 Models</p>
                    </button>
                </div>
                <div class="Item I3">
                    <img src="p3.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib3">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Taycan Models</p>
                    </button>
                </div>
                <div class="Item I4">
                    <img src="p6.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib4">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Panamera Models</p>
                    </button>
                </div>
                <div class="Item I5">
                    <img src="p5.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib5">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Macan Models</p>
                    </button>
                </div>
                <div class="Item I6">
                    <img src="p4.webp" alt="..." width="100%" />
                    <button type="button" class="Itembtn Ib6">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="white"
                                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z">
                            </path>
                        </svg>
                        <p>Find Cayanne Models</p>
                    </button>
                </div>
            </div>
            <div class="indicators">
                <button type="button" class="inDibtn inDi0 activeindicator" onclick="tosliDe('0')"></button>
                <button type="button" class="inDibtn inDi1" onclick="tosliDe('1')"></button>
                <button type="button" class="inDibtn inDi2" onclick="tosliDe('2')"></button>
                <button type="button" class="inDibtn inDi3" onclick="tosliDe('3')"></button>
                <button type="button" class="inDibtn inDi4" onclick="tosliDe('4')"></button>
            </div>
        </div>
    </div>`;
  } else if (window.innerWidth < 480) {
    if (!document.body.contains(document.querySelector(".js4"))) {
      var T = document.createElement("script");
      T.className = "js4";
      T.setAttribute("src", "/script4.js");
      document.querySelector("body").appendChild(T);
    }
    if (document.body.contains(document.querySelector(".js3"))) {
      document.querySelector(".js3").remove();
    }
    if (document.body.contains(document.querySelector(".js2"))) {
      document.querySelector(".js2").remove();
    }

    document.querySelector(
      ".carousel2"
    ).innerHTML = `<h5>Find a Porsche near you</h5>
    <div class="CarouSel_Inner">
      <div class="sliDE">
        <div class="carouSeL">
          <div class="ITem Ii1">
            <img src="p1.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib1">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://wwwIw3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find 718 Models</p>
            </button>
          </div>
          <div class="ITem Ii2">
            <img src="p2.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib2">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find 911 Models</p>
            </button>
          </div>
          <div class="ITem Ii3">
            <img src="p3.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib3">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find Taycan Models</p>
            </button>
          </div>
          <div class="ITem Ii4">
            <img src="p6.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib4">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find Panamera Models</p>
            </button>
          </div>
          <div class="ITem Ii5">
            <img src="p5.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib5">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find Macan Models</p>
            </button>
          </div>
          <div class="ITem Ii6">
            <img src="p4.webp" alt="..." width="100%" />
            <button type="button" class="Itembtn Ib6">
              <svg width="16" height="16" viewBox="0 0 1024 1024" class="Icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
              </svg>
              <p>Find Cayanne Models</p>
            </button>
          </div>
        </div>
        <div class="indicators">
          <button type="button" class="InDibtn InDi0 activeindicator" onclick="tosLiDe('0')"></button>
          <button type="button" class="InDibtn InDi1" onclick="tosLiDe('1')"></button>
          <button type="button" class="InDibtn InDi2" onclick="tosLiDe('2')"></button>
          <button type="button" class="InDibtn InDi3" onclick="tosLiDe('3')"></button>
          <button type="button" class="InDibtn InDi4" onclick="tosLiDe('4')"></button>
          <button type="button" class="InDibtn InDi5" onclick="tosLiDe('5')"></button>
        </div>
      </div>
    </div>`;
  }

  if (window.innerWidth <= 992) {
    document.querySelector(".sho4").hidden = true;
  } else {
    document.querySelector(".sho4").hidden = false;
  }

  if (window.innerWidth < 760) {
    document.querySelector(".socialIn").querySelector(".posts3").hidden = true;
  } else {
    document.querySelector(".socialIn").querySelector(".posts3").hidden = false;
  }

  if (window.innerWidth < 480) {
    document.querySelector(".socialIn").querySelector(".posts2").hidden = true;
  } else {
    document.querySelector(".socialIn").querySelector(".posts2").hidden = false;
  }

  if (window.innerWidth < 540) {
    document.querySelector(".footlinks").innerHTML = `<div class="footIN">
  
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <hr>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Build & Find
                </button>
                <hr>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Build your Porsche</p>
                  <p>Comapre Models</p>
                  <p>Search Pre-Owned</p>
                  <p>Find your Porsche Centre</p>
                  <p>Download the model range catalogue</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Online Services
                </button>
                <hr>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Sign up for News</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Behind the Scenes
                </button>
                <hr>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Passion Motersports</p>
                  <p>Porsche Experience</p>
                  <p>Porsche Classic</p>
                  <p>Visit Porsche Museum</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Porsche Comapany
                </button>
                <hr>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Latest news</p>
                  <p>At a Glance</p>
                  <p>Jobs & Careers</p>
                  <p>Contacr & Information</p>
                  <p>Cristophorus - The Porsche Magazine</p>
                </div>
              </div>
            </div>
          </div>
  
          <button class="share">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" height="26px"
              width="26px" version="1.1" id="Layer_1" viewBox="0 0 458.624 458.624" xml:space="preserve">
              <g>
                <g>
                  <path
                    d="M339.588,314.529c-14.215,0-27.456,4.133-38.621,11.239l-112.682-78.67c1.809-6.315,2.798-12.976,2.798-19.871    c0-6.896-0.989-13.557-2.798-19.871l109.64-76.547c11.764,8.356,26.133,13.286,41.662,13.286c39.79,0,72.047-32.257,72.047-72.047    C411.634,32.258,379.378,0,339.588,0c-39.79,0-72.047,32.257-72.047,72.047c0,5.255,0.578,10.373,1.646,15.308l-112.424,78.491    c-10.974-6.759-23.892-10.666-37.727-10.666c-39.79,0-72.047,32.257-72.047,72.047s32.256,72.047,72.047,72.047    c13.834,0,26.753-3.907,37.727-10.666l113.292,79.097c-1.629,6.017-2.514,12.34-2.514,18.872c0,39.79,32.257,72.047,72.047,72.047    c39.79,0,72.047-32.257,72.047-72.047C411.635,346.787,379.378,314.529,339.588,314.529z" />
                </g>
              </g>
            </svg>
            <p style="padding: 0; margin: 0;">Share Page</p>
          </button>
          <div class="connect">
            <h5>Connect with Porsche</h5>
            <div class="sociallinks">
              <button class="socialbtn1"><svg fill="white" width="33px" height="33px" viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
                </svg></button>
              <button class="socialbtn2"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="white"
                  class="bi bi-youtube" viewBox="0 0 16 16">
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg></button>
              <button class="socialbtn3"><svg fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 97.672 97.672">
                  <g>
                    <path d="M51.125,0C24.469,0,11.029,19.11,11.029,35.047c0,9.649,3.653,18.232,11.487,21.432c1.286,0.525,2.438,0.019,2.812-1.403
                 c0.258-0.985,0.871-3.468,1.144-4.503c0.376-1.407,0.229-1.9-0.807-3.126c-2.259-2.665-3.703-6.115-3.703-11.002
                 c0-14.178,10.608-26.87,27.624-26.87c15.064,0,23.342,9.206,23.342,21.5c0,16.176-7.159,29.828-17.786,29.828
                 c-5.87,0-10.262-4.854-8.854-10.807c1.686-7.107,4.951-14.778,4.951-19.907c0-4.592-2.463-8.423-7.565-8.423
                 c-6,0-10.819,6.207-10.819,14.521c0,5.296,1.789,8.878,1.789,8.878s-6.141,26.015-7.215,30.571
                 c-2.145,9.072-0.322,20.195-0.168,21.318c0.089,0.666,0.944,0.824,1.332,0.322c0.555-0.723,7.7-9.544,10.129-18.359
                 c0.687-2.496,3.944-15.42,3.944-15.42c1.95,3.717,7.647,6.992,13.706,6.992c18.034,0,30.271-16.441,30.271-38.45
                 C86.644,15.498,72.547,0,51.125,0z" />
                  </g>
                </svg></button>
              <button class="socialbtn4"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="white"
                  class="bi bi-instagram" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg></button>
              <button class="socialbtn5"><svg fill="white" version="1.1" width="22px" height="22px" id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-271 283.9 256 235.1" xml:space="preserve">
                  <g>
                    <rect x="-264.4" y="359.3" width="49.9" height="159.7" />
                    <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
                 C-210.8,295.8-222.1,283.9-240.5,283.9z" />
                    <path
                      d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
                 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z" />
                  </g>
                </svg></button>
            </div>
          </div>
  
        </div>`;
  } else {
    document.querySelector(".footlinks").innerHTML = ` <div class="footIn">
          <div class="links">
            <h5>Build & Find</h5>
            <p>Build your Porsche</p>
            <p>Comapre Models</p>
            <p>Search Pre-Owned</p>
            <p>Find your Porsche Centre</p>
            <p>Download the model range catalogue</p>
          </div>
          <div class="links">
            <h5>Online Services</h5>
            <p>Sign up for News</p>
          </div>
          <div class="links">
            <h5>Behind the Scenes</h5>
            <p>Passion Motersports</p>
            <p>Porsche Experience</p>
            <p>Porsche Classic</p>
            <p>Visit Porsche Museum</p>
          </div>
          <div class="links">
            <h5>Porsche Comapany</h5>
            <p>Latest news</p>
            <p>At a Glance</p>
            <p>Jobs & Careers</p>
            <p>Contacr & Information</p>
            <p>Cristophorus - The Porsche Magazine</p>
            <button class="share">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white"
                height="26px" width="26px" version="1.1" id="Layer_1" viewBox="0 0 458.624 458.624" xml:space="preserve">
                <g>
                  <g>
                    <path
                      d="M339.588,314.529c-14.215,0-27.456,4.133-38.621,11.239l-112.682-78.67c1.809-6.315,2.798-12.976,2.798-19.871    c0-6.896-0.989-13.557-2.798-19.871l109.64-76.547c11.764,8.356,26.133,13.286,41.662,13.286c39.79,0,72.047-32.257,72.047-72.047    C411.634,32.258,379.378,0,339.588,0c-39.79,0-72.047,32.257-72.047,72.047c0,5.255,0.578,10.373,1.646,15.308l-112.424,78.491    c-10.974-6.759-23.892-10.666-37.727-10.666c-39.79,0-72.047,32.257-72.047,72.047s32.256,72.047,72.047,72.047    c13.834,0,26.753-3.907,37.727-10.666l113.292,79.097c-1.629,6.017-2.514,12.34-2.514,18.872c0,39.79,32.257,72.047,72.047,72.047    c39.79,0,72.047-32.257,72.047-72.047C411.635,346.787,379.378,314.529,339.588,314.529z" />
                  </g>
                </g>
              </svg>
              <p style="padding: 0; margin: 0;">Share Page</p>
            </button>
            <div class="connect">
              <h5>Connect with Porsche</h5>
              <div class="sociallinks">
                <button class='socialbtn1'><svg fill="white" width="33px" height="33px" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
                  </svg></button>
                <button class='socialbtn2'><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="white"
                    class="bi bi-youtube" viewBox="0 0 16 16">
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg></button>
                <button class='socialbtn3'><svg fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 97.672 97.672">
                    <g>
                      <path d="M51.125,0C24.469,0,11.029,19.11,11.029,35.047c0,9.649,3.653,18.232,11.487,21.432c1.286,0.525,2.438,0.019,2.812-1.403
                   c0.258-0.985,0.871-3.468,1.144-4.503c0.376-1.407,0.229-1.9-0.807-3.126c-2.259-2.665-3.703-6.115-3.703-11.002
                   c0-14.178,10.608-26.87,27.624-26.87c15.064,0,23.342,9.206,23.342,21.5c0,16.176-7.159,29.828-17.786,29.828
                   c-5.87,0-10.262-4.854-8.854-10.807c1.686-7.107,4.951-14.778,4.951-19.907c0-4.592-2.463-8.423-7.565-8.423
                   c-6,0-10.819,6.207-10.819,14.521c0,5.296,1.789,8.878,1.789,8.878s-6.141,26.015-7.215,30.571
                   c-2.145,9.072-0.322,20.195-0.168,21.318c0.089,0.666,0.944,0.824,1.332,0.322c0.555-0.723,7.7-9.544,10.129-18.359
                   c0.687-2.496,3.944-15.42,3.944-15.42c1.95,3.717,7.647,6.992,13.706,6.992c18.034,0,30.271-16.441,30.271-38.45
                   C86.644,15.498,72.547,0,51.125,0z" />
                    </g>
                  </svg></button>
                <button class='socialbtn4'><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="white"
                    class="bi bi-instagram" viewBox="0 0 16 16">
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg></button>
                <button class='socialbtn5'><svg fill="white" version="1.1" width="22px" height="22px" id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-271 283.9 256 235.1" xml:space="preserve">
                    <g>
                      <rect x="-264.4" y="359.3" width="49.9" height="159.7" />
                      <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
                   C-210.8,295.8-222.1,283.9-240.5,283.9z" />
                      <path
                        d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
                   c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z" />
                    </g>
                  </svg></button>
              </div>
            </div>
          </div>
        </div>`;
  }
});
