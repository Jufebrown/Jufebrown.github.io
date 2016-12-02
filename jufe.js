$('body').scrollspy({ target: '#navbar' })

var offset = 60;

$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

var customReveal = {
  origin: 'left',
  delay    : 200,
  duration: 1000,
  distance : '600px',
  easing   : 'ease-in-out',
  scale    : 1.1
};

window.sr = ScrollReveal();
sr.reveal('.projects-section', customReveal);
sr.reveal('.contact-wrapper', customReveal);
