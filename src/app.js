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
      document.querySelector('#enlaces-nav-link').classList.add("current-nav");
      break;
    case "WikiWeb: Ghost in the Shell (Presentación)":
      document.querySelector('#presentacion-nav-link').classList.add("current-nav");
      break;
    case "WikiWeb: Ghost in the Shell (Categoría)":
      document.querySelector('#categoria-nav-link').classList.add("current-nav");
      break;
  }
}




