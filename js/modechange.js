const body = document.querySelector('body');
const modechange = document.getElementById('modechange');

var mode = localStorage.getItem('mode');
if (mode === 'dark') {
  body.classList.add('dark');
}
if (mode === 'normal') {
    body.classList.toggle('dark');
}


modechange.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (mode === 'normal') {
    localStorage.setItem('mode', 'dark');
    mode = 'dark';
  } 
  else {
    localStorage.setItem('mode', 'normal');
    mode = 'normal';
  }
});