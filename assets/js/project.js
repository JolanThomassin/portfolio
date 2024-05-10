// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.col-md-4'); // Sélectionnez tous les éléments avec la classe "col-md-4"
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');
        projects.forEach(project => {
          if (filterValue === 'all' || project.classList.contains(filterValue)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  });
