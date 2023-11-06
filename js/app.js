const buttons = document.querySelectorAll(".btn");
const value = document.getElementById('value');
let count = 0;




buttons.forEach(button => button.addEventListener('click', (e) => {
  if (e.target.dataset.extraction == 'decrease') {
    count--
    value.style.color = 'red'
  } else if (e.target.dataset.extraction == 'increase') {
    count++
    value.style.color = 'green'
  } else if (e.target.dataset.extraction == 'reset') {
    count = 0
    value.style.color = '#222'
  }
  value.textContent = count
}))

