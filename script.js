function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDropdown(id) {
    var content = document.getElementById(id);
    var button = content.previousElementSibling.querySelector('.dropdown-btn');
    
    if (content.style.display === "block") {
      content.style.display = "none";
      button.classList.remove('open');
    } else {
      content.style.display = "block";
      button.classList.add('open');
    }
  }
  
  