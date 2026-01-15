function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

function toggleAccordion(header) {
  const body = header.nextElementSibling;
  body.style.display = body.style.display === "block" ? "none" : "block";
}

<<<<<<< HEAD

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

function toggleAccordion(header) {
  const body = header.nextElementSibling;
  body.style.display = body.style.display === "block" ? "none" : "block";
}
function toggleMenu() {
        document.querySelector(".navbar").classList.toggle("show");
    }
=======
function toggleMenu() {
        document.querySelector(".navbar").classList.toggle("show");
}
>>>>>>> 67943b8c75243cab5571fc82358a0737281011f0

