class FooterAccordion {
  constructor() {
    this.init();
  }

  init() {
    // Só inicializar no mobile
    if (window.innerWidth > 749) {
      return;
    }

    this.bindEvents();
    this.setInitialState();
    console.log('Footer Accordion inicializado para mobile');
  }

  bindEvents() {
    // Adicionar event listeners para os triggers do acordeão
    const triggers = document.querySelectorAll('.footer-accordion-trigger');
    
    if (triggers.length === 0) {
      console.log('Nenhum trigger de acordeão encontrado');
      return;
    }
    
    console.log(`Encontrados ${triggers.length} triggers de acordeão`);
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAccordion(trigger);
      });

      // Adicionar suporte para teclado (Enter e Space)
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleAccordion(trigger);
        }
      });
    });

    // Re-inicializar quando a tela for redimensionada
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  toggleAccordion(trigger) {
    const blockId = trigger.getAttribute('data-block-id');
    const content = document.querySelector(`.footer-accordion-content[data-block-id="${blockId}"]`);
    
    if (!content) {
      console.log(`Conteúdo não encontrado para o bloco ${blockId}`);
      return;
    }

    const isOpen = trigger.classList.contains('accordion-open');
    console.log(`Alternando acordeão ${blockId}: ${isOpen ? 'fechando' : 'abrindo'}`);

    if (isOpen) {
      // Fechar o acordeão
      this.closeAccordion(trigger, content);
    } else {
      // Abrir o acordeão
      this.openAccordion(trigger, content);
    }
  }

  openAccordion(trigger, content) {
    // Fechar todos os outros acordeões primeiro
    this.closeAllAccordions();
    
    // Abrir o acordeão atual
    trigger.classList.add('accordion-open');
    content.classList.add('accordion-open');
    
    // Adicionar aria-expanded para acessibilidade
    trigger.setAttribute('aria-expanded', 'true');
    
    // Focar no conteúdo para melhor acessibilidade
    setTimeout(() => {
      content.focus();
    }, 300);
  }

  closeAccordion(trigger, content) {
    trigger.classList.remove('accordion-open');
    content.classList.remove('accordion-open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  closeAllAccordions() {
    const openTriggers = document.querySelectorAll('.footer-accordion-trigger.accordion-open');
    const openContents = document.querySelectorAll('.footer-accordion-content.accordion-open');
    
    openTriggers.forEach(trigger => {
      trigger.classList.remove('accordion-open');
      trigger.setAttribute('aria-expanded', 'false');
    });
    
    openContents.forEach(content => {
      content.classList.remove('accordion-open');
    });
  }

  setInitialState() {
    // Definir estado inicial: todos fechados
    const triggers = document.querySelectorAll('.footer-accordion-trigger');
    const contents = document.querySelectorAll('.footer-accordion-content');
    
    triggers.forEach(trigger => {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('role', 'button');
      trigger.setAttribute('tabindex', '0');
    });
    
    contents.forEach(content => {
      content.classList.remove('accordion-open');
    });
  }

  handleResize() {
    // Se mudou para desktop, remover funcionalidade do acordeão
    if (window.innerWidth > 749) {
      this.closeAllAccordions();
      this.removeMobileStyles();
      console.log('Footer Accordion desabilitado para desktop');
    } else {
      // Se voltou para mobile, reaplicar funcionalidade
      this.applyMobileStyles();
      console.log('Footer Accordion reativado para mobile');
    }
  }

  removeMobileStyles() {
    const triggers = document.querySelectorAll('.footer-accordion-trigger');
    const contents = document.querySelectorAll('.footer-accordion-content');
    
    triggers.forEach(trigger => {
      trigger.classList.remove('accordion-open');
      trigger.removeAttribute('aria-expanded');
      trigger.removeAttribute('role');
      trigger.removeAttribute('tabindex');
    });
    
    contents.forEach(content => {
      content.classList.remove('accordion-open');
    });
  }

  applyMobileStyles() {
    this.setInitialState();
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new FooterAccordion();
});

// Inicializar também para mudanças dinâmicas do Shopify
document.addEventListener('shopify:section:load', () => {
  new FooterAccordion();
});

// Inicializar também para mudanças de tema
document.addEventListener('shopify:theme:change', () => {
  new FooterAccordion();
});
