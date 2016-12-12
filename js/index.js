(function (){
  var body = document.getElementsByTagName('body')[0];
  var navbar = document.getElementById('legacy-navbar');
  var navbarLinks = document.getElementsByClassName('legacy-navbar-links')[0];
  var mobileMenuOnButton = document.getElementsByClassName('legacy-mobile-on-button')[0];
  var mobileMenuOffButton = document.getElementsByClassName('legacy-mobile-off-button')[0];
  var videoContainer = document.getElementById('splash-video');
  var video = document.getElementById('video');

  var mobileNavigationActive = false;
  var currentScrollTop = 0;
  var lastScrollTop = 0;

  function changeNavbarStyle() {
    currentScrollTop = body.scrollTop;
    if (body.scrollTop < 100) { // if scroll less than 100px nav fades away
      navbar.className = '' // navbar fades
    } else {
      navbar.className = 'show' // creates new class
    }

    if (body.scrollTop > 600 && currentScrollTop > lastScrollTop) {
      navbar.className = 'show slide-up'
    }
    lastScrollTop = currentScrollTop;
  };

  function openMobileNavigation() {
    if(!mobileNavigationActive) {
      body.className = 'stopScrolling';
      navbarLinks.className = "legacy-navbar-links active"
      mobileNavigationActive = true;
    } else {
      body.className = '';
      navbarLinks.className = "legacy-navbar-links"
      mobileNavigationActive = false;
    }
  };

  function closeMobileNavigation() {
    if(mobileNavigationActive) {
      body.className = '';
      navbarLinks.className = "legacy-navbar-links"
      mobileNavigationActive = false;
    } else {
      body.className = 'stopScrolling';
      navbarLinks.className = "legacy-navbar-links active"
      mobileNavigationActive = true;
    }
  }

  // video resize
  function stretchVideo() {
    if(window.innerWidth/window.innerHeight < 1.7 ){
      video.style.height = '100%';
      video.style.width = 'auto';
    } else {
      video.style.width = '100%';
      video.style.height = 'auto';
    }
  }

  stretchVideo();
  changeNavbarStyle();

  mobileMenuOnButton.addEventListener("click", openMobileNavigation);
  mobileMenuOffButton.addEventListener("click", closeMobileNavigation);
  window.addEventListener("scroll", changeNavbarStyle);
  window.addEventListener("resize", stretchVideo);

}
)();
