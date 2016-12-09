(function (){
  var body = document.getElementsByTagName('body')[0];
  var navbar = document.getElementById('legacy-nav');
  var videoContainer = document.getElementById('splash-video');
  var video = document.getElementById('video');

  function changeNavbarStyle() {
    if (body.scrollTop < 100) {
      navbar.className = 'row'
    } else {
      navbar.className = 'row show'
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

  window.addEventListener("scroll", changeNavbarStyle);
  window.addEventListener("resize", stretchVideo);

}
)();
