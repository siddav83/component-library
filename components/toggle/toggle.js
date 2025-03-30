const button = document.getElementsByTagName('button')[0];

console.log('Button text:', button.textContent);

const toggle = document.getElementById('toggle-handle');

const handleToggle = (e) => {
  e.preventDefault();
  toggle.classList.toggle('active');
  if (toggle.classList.contains('active')) {
    console.log('Toggle handle is now active');
  } else {
    console.log('Toggle handle is now inactive');
  }
};

button.addEventListener('click', handleToggle);
