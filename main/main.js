// alterar a aba ao clicar no botão
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-btn");
  const tabs = document.querySelectorAll(".tab-content");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      buttons.forEach((btn) => btn.classList.remove("active"));
      tabs.forEach((tab) => tab.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

  document.querySelector(".nav-btn").click();
});

// formulario de contato
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);

    contactForm.reset();
  });
}
