document.querySelector('.btn').addEventListener('click', () => {
  document.querySelector('.navbar-links').classList.toggle('active');
  document.querySelector('.btn').classList.toggle('click');
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let navbar = document.querySelector('.navbar');
  let logo = document.querySelector('.img-container');
  let ham = document.querySelector('#ham');
  let btn  = document.querySelector('.btn')
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add('bgcolor');
    logo.style.width = '30%';
    navbar.style.height = "10%"
    ham.style.fontSize = "1.5rem"
    btn.style.top = "1.7rem"
    logo.style.marginTop = "1.5rem"
  } else {
    navbar.classList.remove('bgcolor');
    navbar.style.height = "15%";
    logo.style.width = '40%';
    logo.style.padding = "0"
    ham.style.fontSize = "1.8rem"
    btn.style.top = "2.5rem"
    logo.style.marginTop = "2rem"
  }
}
