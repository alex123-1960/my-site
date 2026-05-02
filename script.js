console.log("Сайт завантажено успішно!");
alert("Документи інваліда ІІ групи Калачикова Олександра Васильовича");
// Плавний скрол до секцій
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

