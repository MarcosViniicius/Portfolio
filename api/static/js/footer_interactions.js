// Footer Interactions and Animations
document.addEventListener("DOMContentLoaded", function () {
  // Atualizar ano automaticamente
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Animação de entrada para os elementos do footer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Aplicar animação aos elementos do footer
  const footerSections = document.querySelectorAll(".footer-section");
  footerSections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = `opacity 0.6s ease ${
      index * 0.2
    }s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(section);
  });

  // Efeito de ripple nos links sociais
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Tooltip para links de contato
  const contactLinks = document.querySelectorAll(".contact-link");
  contactLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = this.href.includes("mailto:")
        ? "Enviar e-mail"
        : "Abrir WhatsApp";
      document.body.appendChild(tooltip);

      const rect = this.getBoundingClientRect();
      tooltip.style.left =
        rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px";

      setTimeout(() => tooltip.classList.add("show"), 100);

      this.addEventListener(
        "mouseleave",
        function () {
          tooltip.remove();
        },
        { once: true }
      );
    });
  });

  // Adicionar efeito de partículas no footer (opcional)
  if (window.innerWidth > 768) {
    createFooterParticles();
  }
});

// Função para criar partículas decorativas (opcional)
function createFooterParticles() {
  const footer = document.querySelector(".portfolio-footer");
  if (!footer) return;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "footer-particle";
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
    footer.appendChild(particle);
  }
}

// Adicionar CSS para animações via JavaScript
const style = document.createElement("style");
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .tooltip {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        z-index: 1000;
    }

    .tooltip.show {
        opacity: 1;
    }

    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(120deg); }
        66% { transform: translateY(5px) rotate(240deg); }
    }

    .footer-particle {
        z-index: 1;
    }

    footer {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
