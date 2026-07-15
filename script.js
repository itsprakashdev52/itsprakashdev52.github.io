document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const contactForm = document.getElementById("contactForm");

  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show");
    const icon = menuButton.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
      const icon = menuButton.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
    });
  });

  if (window.Typed) {
    new Typed("#typingText", {
      strings: [
        "C++ & DSA Learner",
        "Frontend Web Developer",
        "React Learner",
        "Problem Solver"
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1100,
      loop: true
    });
  } else {
    document.getElementById("typingText").textContent = "C++ & DSA Learner";
  }

  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "home";
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) current = section.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });

  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href =
      `mailto:itsprakashdev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
