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


// Selected Button Function

const select = document.querySelectorAll(".select");

select.forEach(function(button) {
  button.addEventListener("click", function() {
    if (button.textContent !== "Selected") {
      button.textContent = "Selected";
    } else {
      button.textContent = "Select";
    }
    button.classList.toggle('active')
  });
});

// Cancelled Button Function

const cancel = document.querySelectorAll(".cancel");

cancel.forEach(function(button) {
  button.addEventListener("click", function() {
    button.textContent = "Cancelled"
    button.classList.add('active')
  });
});