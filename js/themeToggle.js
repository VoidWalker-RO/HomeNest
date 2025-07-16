const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleBtn.textContent = 'Темна тема';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  if (body.classList.contains('light-theme')) {
    toggleBtn.textContent = 'Темна тема';
    localStorage.setItem('theme', 'light');
  } else {
    toggleBtn.textContent = 'Світла тема';
    localStorage.setItem('theme', 'dark');
  }
});
