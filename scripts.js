//  Menu Icon Function  //


const menuicon = document.querySelector('#menuicon')
const line1 = document.querySelector('#one');
const line2 = document.querySelector('#two');
const options = document.getElementById('mobile-menu');

function toggleOptions() {
  line1.classList.toggle('clicked');
  line2.classList.toggle('clicked');
  options.classList.toggle('active');
}

menuicon.addEventListener('click', () => {
  toggleOptions()
})