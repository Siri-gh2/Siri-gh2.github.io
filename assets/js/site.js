// Mobile sidebar toggle + dark mode toggle
document.addEventListener('DOMContentLoaded', function(){
  const mobileToggle = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('sidebar');
  const darkToggle = document.getElementById('dark-toggle');

  if(mobileToggle && sidebar){
    mobileToggle.addEventListener('click', function(){
      sidebar.classList.toggle('open');
    });
    // close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if(window.innerWidth <= 980 && sidebar.classList.contains('open')){
        if(!sidebar.contains(e.target) && !mobileToggle.contains(e.target)){
          sidebar.classList.remove('open');
        }
      }
    });
  }

  if(darkToggle){
    darkToggle.addEventListener('click', function(){
      const root = document.documentElement;
      root.classList.toggle('theme-dark');
      try {
        localStorage.setItem('site-theme', root.classList.contains('theme-dark') ? 'dark' : 'light');
      } catch(e){}
    });
  }
});
