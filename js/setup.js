$('.owl-carousel').owlCarousel({
  loop:true,  //responsável pelo o loop do carrossel 
  margin:10, //responsável pela margem entre os elementos
  nav:false, //responsável pelos botões de navegação
  responsive:{ //cuida da responsividade 
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})