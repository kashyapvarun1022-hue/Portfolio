// Navbar shadow
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('nav-scrolled', window.scrollY > 50);
  });
  
  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Dark mode toggle
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  
  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    root.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
  
  // Contact form
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Message sent successfully!');
    e.target.reset();
  });
  
  // Cursor glow animation
  const cursorGlow = document.getElementById('cursor-glow');
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.transform = `translate(${e.clientX - 64}px, ${e.clientY - 64}px)`;
  });
  
  // Cursor color adapts to theme
  const updateCursorColor = () => {
    cursorGlow.style.backgroundColor = root.classList.contains('dark')
      ? 'rgba(255, 100, 255, 0.25)' // pink glow on dark
      : 'rgba(56, 189, 248, 0.25)'; // cyan glow on light
  };
  updateCursorColor();
  themeToggle.addEventListener('click', updateCursorColor);
  
  // Initialize AOS animations
  AOS.init({
    duration: 1100,
    easing: 'ease-in-out-back',
    once: true,
    offset: 100,
  });
  