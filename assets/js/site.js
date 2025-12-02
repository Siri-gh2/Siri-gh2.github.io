// assets/js/site.js
document.addEventListener('DOMContentLoaded', function(){
  const mobileToggle = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('sidebar');
  const darkToggle = document.getElementById('dark-toggle');
  const root = document.documentElement;

  // init theme from localStorage
  try {
    const theme = localStorage.getItem('site-theme');
    if(theme === 'dark') root.classList.add('theme-dark');
  } catch(e){}

  if(mobileToggle && sidebar){
    mobileToggle.addEventListener('click', function(){
      sidebar.classList.toggle('open');
      // simple open style: toggle class, CSS makes it responsive
      if(sidebar.classList.contains('open')){
        sidebar.style.left = '0';
      } else {
        sidebar.style.left = '';
      }
    });
  }

  if(darkToggle){
    darkToggle.addEventListener('click', function(){
      root.classList.toggle('theme-dark');
      try {
        localStorage.setItem('site-theme', root.classList.contains('theme-dark') ? 'dark' : 'light');
      } catch(e){}
    });
  }
});
