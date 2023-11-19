import Glide from '@glidejs/glide'

if (document.querySelector('.glide')) {
  var glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    focusAt: 'center',
    autoplay: 3500,
    breakpoints: {
      1200: {
        perView: 2
      },
      599: {
        perView: 1
      }
    }
  })

  glide.mount();
}


const filenameURL = location.href.substring(location.href.lastIndexOf('/')+1);

switch (filenameURL) {
  case "enlaces.html":
    document.querySelector('nav a[href*="enlaces.html"]').classList.add("current-nav");
    break;
  case "presentacion.html":
    document.querySelector('nav a[href*="presentacion.html"]').classList.add("current-nav");
    break;
  case "categoria.html":
    document.querySelector('nav a[href*="categoria.html"]').classList.add("current-nav");
    break;
}




