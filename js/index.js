(function (){
  var body = document.getElementsByTagName('body')[0];
  var navbar = document.getElementById('legacy-navbar');
  var navbarLinks = document.getElementsByClassName('legacy-navbar-links')[0];
  var mobileMenuButton = document.getElementsByClassName('legacy-mobile-menu')[0];
  var videoContainer = document.getElementById('splash-video');
  var video = document.getElementById('video');

  var mobileLinkActive = false;
  var currentScrollTop = 0;

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
    if(!mobileLinkActive) {
      body.className = 'stopScrolling';
      navbarLinks.className = "legacy-navbar-links active"
      mobileLinkActive = true;
    } else {
      body.className = '';
      navbarLinks.className = "legacy-navbar-links"
      mobileLinkActive = false;
    }
  };

  // video resize
  function stretchVideo() {
    if(window.innerWidth/window.innerHeight < 1.3){
      video.style.height = '100%';
      video.style.width = 'auto';
    } else {
      video.style.width = '100%';
      video.style.height = 'auto';
    }
  }

  stretchVideo();
  changeNavbarStyle();

  mobileMenuButton.addEventListener("click", openMobileNavigation);
  window.addEventListener("scroll", changeNavbarStyle);
  window.addEventListener("resize", stretchVideo);

}
)();
