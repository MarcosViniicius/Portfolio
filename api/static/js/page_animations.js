// Page Animations and Interactions
document.addEventListener("DOMContentLoaded", function () {
  // Animação de entrada para seções da página
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

  // Aplicar animação às seções principais
  const pageSections = document.querySelectorAll(
    ".infos, .about, .skills, .project"
  );
  pageSections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = `opacity 0.6s ease ${
      index * 0.2
    }s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(section);
  });

  // Efeito de ripple em botões e links
  const interactiveElements = document.querySelectorAll(
    "a, button, .social-link, .contact-link"
  );
  interactiveElements.forEach((element) => {
    element.addEventListener("click", function (e) {
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

  // Tooltip para links externos
  const externalLinks = document.querySelectorAll("a[href^='http']");
  externalLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = "Abrir link externo";
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

  // Animação de entrada para ícones de skills
  const skillIcons = document.querySelectorAll("#code_icon, #favicon");
  skillIcons.forEach((icon, index) => {
    icon.style.opacity = "0";
    icon.style.transform = "scale(0.8)";
    icon.style.transition = `opacity 0.5s ease ${
      index * 0.1
    }s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(icon);
  });

  // Adicionar efeito de partículas na página (opcional, leve)
  if (window.innerWidth > 768) {
    createPageParticles();
  }
});

// Função para criar partículas decorativas na página
function createPageParticles() {
  const main = document.querySelector(".portfolio-main");
  if (!main) return;

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "page-particle";
    particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${4 + Math.random() * 3}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 3}s;
            z-index: 0;
        `;
    main.appendChild(particle);
  }
}

// Adicionar CSS para animações via JavaScript
const pageStyle = document.createElement("style");
pageStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
        z-index: 10;
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

    .page-particle {
        z-index: 0;
    }

    main {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(pageStyle);
