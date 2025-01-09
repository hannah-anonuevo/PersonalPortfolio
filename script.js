function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDropdown(id) {
  const allDropdowns = document.querySelectorAll(".dropdown-content");
  allDropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.classList.remove("show");
    }
  });

  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("show");
}

  

  