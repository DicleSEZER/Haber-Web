document.querySelectorAll('.element').forEach(item => {
    item.addEventListener('click', function() {
      const target = document.getElementById(this.getAttribute('data-target'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });