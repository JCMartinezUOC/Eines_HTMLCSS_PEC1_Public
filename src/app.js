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



if (document.title) {
  switch (document.title) {
    case "WikiWeb: Ghost in the Shell (Enlaces)":
      document.querySelector('nav a[href*="enlaces.html"]').classList.add("current-nav");
      break;
    case "WikiWeb: Ghost in the Shell (Presentación)":
      document.querySelector('nav a[href*="presentacion.html"]').classList.add("current-nav");
      break;
    case "WikiWeb: Ghost in the Shell (Categoría)":
      document.querySelector('nav a[href*="categoria.html"]').classList.add("current-nav");
      break;
  }
}




