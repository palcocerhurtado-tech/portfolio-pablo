(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const email = 'archon.consultancies@hotmail.com';
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionKey = 'pablo-archon-motion';
  let savedMotion = null;
  try { savedMotion = localStorage.getItem(motionKey); } catch { /* Storage is optional. */ }
  let motionPaused = motionPreference.matches || savedMotion === 'paused';

  const cases = {
    eqclypse: {
      title: 'EQCLYPSE · Dato 360',
      category: 'Estrategia · Branding · E-commerce',
      description: 'Proyecto de prácticas de marketing para conectar el sector del vino con un público joven a través de formato, marca, lenguaje y contexto de consumo.',
      image: 'assets/eqclypse-case.webp',
      alt: 'Campaña EQCLYPSE con botellines de vino joven en una escena nocturna',
      details: [
        ['El reto', 'Construir una propuesta de marca capaz de hacer que el vino resulte más espontáneo, contemporáneo y accesible para consumidores jóvenes.'],
        ['Mi trabajo', 'Investigación de mercado y competencia, buyer personas, naming, posicionamiento, identidad verbal, modelo económico, distribución, estrategia digital y plan de lanzamiento.'],
        ['La ejecución', 'Desarrollo de una web e-commerce funcional como extensión digital del concepto y preparación del proyecto para su presentación ante Dato 360.'],
      ],
      link: 'https://github.com/palcocerhurtado-tech/web-eqclypse',
      linkLabel: 'Ver web EQCLYPSE en GitHub',
    },
    archon: {
      title: 'Archon Consultancies',
      category: 'Estrategia · Identidad · IA aplicada',
      description: 'Una marca y un laboratorio de consultoría donde conecto marketing, operaciones de e-commerce y automatización.',
      image: 'assets/archon-temple-dark.webp',
      alt: 'Identidad Archon en una composición de arquitectura, mármol negro y oro',
      details: [
        ['La idea', 'Dar una forma reconocible a una propuesta que reúne criterio comercial, creatividad e inteligencia artificial.'],
        ['El lenguaje', 'Negro, marfil y oro. Una identidad de inspiración arquitectónica que se extiende del símbolo a la presencia digital.'],
        ['El sistema', 'Flujos de trabajo con IA aplicada a operaciones de e-commerce. Airtable, Make y n8n forman parte de las herramientas del proyecto.'],
      ],
      link: 'https://archonconsultancies.com',
      linkLabel: 'Visitar Archon Consultancies',
    },
    atelier: {
      title: 'Archon Atelier',
      category: 'Identidad visual · Exploración de marca',
      description: 'Una exploración del universo Archon a través del monograma, la tipografía y los materiales. Carácter clásico con una expresión contemporánea.',
      image: 'assets/atelier-metal.webp',
      alt: 'Monograma Archon con textura metálica oscura y bordes dorados',
      details: [
        ['El punto de partida', 'Trasladar el carácter de Archon a un lenguaje visual más cercano al diseño y a la expresión editorial.'],
        ['Las piezas', 'Monograma, firma tipográfica y aplicaciones sobre papel y metal. Variaciones que exploran la misma identidad desde distintos materiales.'],
        ['La dirección', 'Contraste, textura y espacio. El símbolo funciona como protagonista y la tipografía mantiene una presencia reconocible.'],
      ],
      link: 'https://archonconsultancies.com',
      linkLabel: 'Explorar el universo Archon',
    },
    adv: {
      title: 'ADV Archon',
      category: 'Producto digital · IA local',
      description: 'Un asistente de terminal para macOS que reúne memoria, contexto del sistema y conectores personales en el entorno de trabajo.',
      image: 'assets/archon-marble.webp',
      alt: 'Emblema Archon grabado en mármol claro con un detalle dorado',
      details: [
        ['La idea', 'Explorar cómo la inteligencia artificial puede acompañar el trabajo cotidiano desde un entorno local.'],
        ['La construcción', 'Python y una memoria en SQLite, con integración de modelos Gemini y Ollama y conectores personales.'],
        ['El enfoque', 'Un proyecto local-first orientado a reunir contexto y herramientas. El repositorio permite conocer su implementación.'],
      ],
      link: 'https://github.com/palcocerhurtado-tech/adv-archon',
      linkLabel: 'Ver ADV Archon en GitHub',
    },
    quantbot: {
      title: 'QuantBot',
      category: 'Python · Datos · Experimentación',
      description: 'Un bot de trading algorítmico para Binance Spot: transformar reglas de estrategia en un sistema que se pueda probar.',
      image: 'assets/archon-monument.webp',
      alt: 'Monumento de mármol Archon en un paisaje de montaña',
      details: [
        ['La exploración', 'Organizar señales y reglas de estrategia en un proceso programable, con una aproximación Elliott Wave Proxy.'],
        ['Las herramientas', 'Python, la API de Binance y backtesting para estudiar el comportamiento de las estrategias.'],
        ['El alcance', 'El proyecto incorpora gestión de riesgo y modos paper y live. Se presenta como desarrollo técnico, sin atribuirle resultados de rentabilidad.'],
      ],
      link: 'https://github.com/palcocerhurtado-tech/quantbot',
      linkLabel: 'Ver QuantBot en GitHub',
    },
    openstudio: {
      title: 'OpenStudio',
      category: 'IA creativa · Vídeo · Producción',
      description: 'Un proyecto para conectar la generación de recursos visuales, el vídeo y la sincronización labial dentro de un flujo de producción creativa.',
      image: 'assets/atelier-paper.webp',
      alt: 'Firma tipográfica Archon sobre papel de textura natural',
      details: [
        ['La idea', 'Explorar un espacio de trabajo que conecte distintas etapas de la creación audiovisual asistida por IA.'],
        ['El proceso', 'Generación de recursos, vídeo y sincronización labial como partes de una misma cadena de producción.'],
        ['La construcción', 'Un proyecto de experimentación creativa con Next.js, Python y Remotion. Su referencia pública es mi perfil de GitHub.'],
      ],
      link: 'https://github.com/palcocerhurtado-tech',
      linkLabel: 'Explorar GitHub',
    },
    contactcard: {
      title: 'Tarjeta de contacto',
      category: 'Web · Diseño de información',
      description: 'Una presencia digital sencilla de compartir: una plantilla que reúne los datos de contacto, un código QR y una vCard.',
      image: 'assets/contact-design.svg',
      alt: 'Diseño de una tarjeta de contacto digital Archon',
      details: [
        ['El objetivo', 'Reunir los puntos de contacto en una página clara que se pueda compartir desde cualquier dispositivo.'],
        ['La solución', 'Una plantilla en HTML y CSS con QR y vCard para facilitar el acceso a los datos y su guardado.'],
        ['La entrega', 'Un proyecto público pensado para adaptarse, clonarse y publicarse en GitHub Pages.'],
      ],
      link: 'https://github.com/palcocerhurtado-tech/tarjeta-contacto-plantilla',
      linkLabel: 'Ver la plantilla en GitHub',
    },
  };

  const identities = {
    consultancies: {
      title: 'Archon Consultancies',
      copy: 'Estrategia, identidad e inteligencia artificial. Una presencia que une el cuidado de una marca con la lógica de sus operaciones.',
      image: 'assets/archon-temple-dark.webp',
      logo: 'assets/consultancies-original.png',
      alt: 'Arquitectura Archon en mármol negro y oro',
      index: '01 / 03',
    },
    intelligence: {
      title: 'Inteligencia con estructura.',
      copy: 'El arco como idea de construcción. Un lenguaje visual preciso para asistentes, automatizaciones y productos digitales.',
      image: 'assets/archon-marble.webp',
      logo: 'assets/archon-outline-wordmark.png',
      alt: 'Arco y emblema Archon sobre mármol claro',
      index: '02 / 03',
    },
    atelier: {
      title: 'Archon Atelier',
      copy: 'Tipografía, textura y contraste. Una exploración más expresiva de Archon a través del monograma y sus materiales.',
      image: 'assets/atelier-metal.webp',
      logo: 'assets/atelier-wordmark.png',
      alt: 'Monograma Archon de metal oscuro con reflejos dorados',
      index: '03 / 03',
    },
  };

  function init() {
    document.documentElement.classList.add('js', 'js-reveal');

    const menuToggle = $('#menuToggle');
    const mainNav = $('#mainNav');
    const dialog = $('#caseDialog');
    const motionToggle = $('#motionToggle');
    const progress = $('#readingProgress');
    const header = $('#siteHeader');
    const parallaxElements = $$('[data-parallax]');
    let scrollFrame = 0;
    let lastCaseTrigger = null;
    let modalIsOpen = false;

    function setMenu(open, restoreFocus = false) {
      if (!menuToggle || !mainNav) return;
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      mainNav.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      if (restoreFocus) menuToggle.focus();
    }

    menuToggle?.addEventListener('click', () => {
      setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });
    if (mainNav) $$('a', mainNav).forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('click', (event) => {
      if (menuToggle?.getAttribute('aria-expanded') !== 'true') return;
      if (!mainNav?.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
    });

    function updateScroll() {
      scrollFrame = 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;
      if (progress) progress.style.transform = `scaleX(${ratio})`;
      header?.classList.toggle('scrolled', scrollTop > 24);

      parallaxElements.forEach((element) => {
        let shift = 0;
        if (!motionPaused) {
          const rect = element.getBoundingClientRect();
          if (rect.bottom > -80 && rect.top < window.innerHeight + 80) {
            const parsedSpeed = Number.parseFloat(element.dataset.parallax);
            const speed = Number.isFinite(parsedSpeed) ? Math.min(0.12, Math.max(0.01, parsedSpeed)) : 0.035;
            shift = Math.min(18, Math.max(-18, (window.innerHeight / 2 - rect.top - rect.height / 2) * speed));
          }
        }
        element.style.setProperty('--shift', `${shift.toFixed(2)}px`);
      });
    }

    function scheduleScroll() {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    }

    function applyMotion() {
      document.body.classList.toggle('motion-paused', motionPaused);
      if (motionToggle) {
        motionToggle.setAttribute('aria-pressed', String(motionPaused));
        const label = motionPaused ? 'Activar movimiento' : 'Pausar movimiento';
        motionToggle.setAttribute('aria-label', label);
        motionToggle.title = label;
        const visibleLabel = $('[data-motion-label]', motionToggle);
        if (visibleLabel) visibleLabel.textContent = label;
      }
      scheduleScroll();
    }

    motionToggle?.addEventListener('click', () => {
      motionPaused = !motionPaused;
      savedMotion = motionPaused ? 'paused' : 'running';
      try { localStorage.setItem(motionKey, savedMotion); } catch { /* Keep the setting for this page. */ }
      applyMotion();
    });
    const onMotionPreferenceChange = () => {
      motionPaused = motionPreference.matches || savedMotion === 'paused';
      applyMotion();
    };
    if (motionPreference.addEventListener) motionPreference.addEventListener('change', onMotionPreferenceChange);
    else motionPreference.addListener?.(onMotionPreferenceChange);
    applyMotion();

    const revealElements = $$('[data-reveal]');
    if ('IntersectionObserver' in window && !motionPaused) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
      revealElements.forEach((element) => observer.observe(element));
    } else revealElements.forEach((element) => element.classList.add('is-visible'));

    const filterButtons = $$('[data-filter]');
    const projects = $$('[data-category]');
    const projectCount = $('#projectCount');
    function filterProjects(filter) {
      let count = 0;
      projects.forEach((project) => {
        const visible = filter === 'all' || (project.dataset.category || '').split(/\s+/).includes(filter);
        project.hidden = !visible;
        if (visible) {
          count += 1;
          project.classList.add('is-visible');
        }
      });
      filterButtons.forEach((button) => {
        const active = button.dataset.filter === filter;
        button.setAttribute('aria-pressed', String(active));
        button.classList.toggle('is-active', active);
      });
      if (projectCount) projectCount.textContent = `${String(count).padStart(2, '0')} ${count === 1 ? 'proyecto' : 'proyectos'}`;
      scheduleScroll();
    }
    filterButtons.forEach((button) => button.addEventListener('click', () => filterProjects(button.dataset.filter || 'all')));
    if (filterButtons.length) filterProjects(filterButtons.find((button) => button.getAttribute('aria-pressed') === 'true')?.dataset.filter || 'all');

    function restoreCaseFocus() {
      if (!modalIsOpen) return;
      modalIsOpen = false;
      document.body.classList.remove('dialog-open');
      if (lastCaseTrigger?.isConnected) lastCaseTrigger.focus({ preventScroll: true });
    }

    function closeCase() {
      if (!dialog) return;
      if (typeof dialog.close === 'function' && dialog.open) dialog.close();
      else dialog.removeAttribute('open');
      restoreCaseFocus();
    }

    function openCase(name, trigger) {
      const entry = cases[name];
      if (!entry || !dialog) return;
      lastCaseTrigger = trigger;
      const fields = {
        '#caseTitle': entry.title,
        '#caseCategory': entry.category,
        '#caseDescription': entry.description,
      };
      Object.entries(fields).forEach(([selector, value]) => {
        const field = $(selector);
        if (field) field.textContent = value;
      });
      const caseImage = $('#caseImage');
      if (caseImage) {
        caseImage.src = entry.image;
        caseImage.alt = entry.alt;
      }
      const details = $('#caseDetails');
      if (details) {
        details.replaceChildren();
        entry.details.forEach(([heading, text]) => {
          const block = document.createElement('div');
          block.className = 'case-detail';
          const title = document.createElement('h3');
          title.textContent = heading;
          const paragraph = document.createElement('p');
          paragraph.textContent = text;
          block.append(title, paragraph);
          details.append(block);
        });
      }
      const link = $('#caseLink');
      if (link) {
        link.href = entry.link;
        link.textContent = entry.linkLabel;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      dialog.setAttribute('aria-labelledby', 'caseTitle');
      dialog.setAttribute('aria-describedby', 'caseDescription');
      setMenu(false);
      if (typeof dialog.showModal === 'function') {
        if (!dialog.open) dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
      }
      modalIsOpen = true;
      document.body.classList.add('dialog-open');
      dialog.scrollTop = 0;
      $('#caseClose')?.focus({ preventScroll: true });
    }

    $$('[data-case]').forEach((button) => button.addEventListener('click', () => openCase(button.dataset.case, button)));
    $('#caseClose')?.addEventListener('click', closeCase);
    dialog?.addEventListener('close', restoreCaseFocus);
    dialog?.addEventListener('cancel', (event) => { event.preventDefault(); closeCase(); });
    dialog?.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeCase();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (modalIsOpen) { event.preventDefault(); closeCase(); }
        else if (menuToggle?.getAttribute('aria-expanded') === 'true') setMenu(false, true);
      }
      if (event.key !== 'Tab' || !modalIsOpen || !dialog) return;
      const focusable = $$('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex="0"]', dialog)
        .filter((element) => !element.hidden && element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    });

    const identityButtons = $$('[data-identity]');
    function setIdentity(name) {
      const identity = identities[name];
      if (!identity) return;
      const art = $('#identityArt');
      const logo = $('#identityLogo');
      if (art) { art.src = identity.image; art.alt = identity.alt; }
      if (logo) { logo.src = identity.logo; logo.alt = name === 'intelligence' ? 'Logo Archon' : identity.title; }
      const title = $('#identityTitle');
      const copy = $('#identityCopy');
      const index = $('#identityIndex');
      if (title) title.textContent = identity.title;
      if (copy) copy.textContent = identity.copy;
      if (index) index.textContent = identity.index;
      identityButtons.forEach((button) => {
        const active = button.dataset.identity === name;
        button.setAttribute('aria-pressed', String(active));
        button.classList.toggle('is-active', active);
        if (button.getAttribute('role') === 'tab') {
          button.setAttribute('aria-selected', String(active));
          button.tabIndex = active ? 0 : -1;
        }
      });
    }
    identityButtons.forEach((button, index) => {
      button.addEventListener('click', () => setIdentity(button.dataset.identity));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % identityButtons.length;
        if (event.key === 'ArrowLeft') next = (index + identityButtons.length - 1) % identityButtons.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = identityButtons.length - 1;
        setIdentity(identityButtons[next].dataset.identity);
        identityButtons[next].focus();
      });
    });
    if (identityButtons.length) setIdentity(identityButtons.find((button) => button.getAttribute('aria-pressed') === 'true')?.dataset.identity || 'consultancies');

    $('#copyEmail')?.addEventListener('click', async () => {
      const status = $('#copyStatus');
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(email);
        if (status) status.textContent = 'Correo copiado.';
      } catch {
        if (!status) return;
        status.replaceChildren(document.createTextNode('Puedes seleccionar y copiar el correo: '));
        const selectableEmail = document.createElement('span');
        selectableEmail.className = 'email-fallback';
        selectableEmail.textContent = email;
        selectableEmail.tabIndex = 0;
        selectableEmail.style.userSelect = 'all';
        status.append(selectableEmail);
        const selectEmail = () => {
          const range = document.createRange();
          range.selectNodeContents(selectableEmail);
          const selection = window.getSelection();
          selection?.removeAllRanges();
          selection?.addRange(range);
        };
        selectableEmail.addEventListener('focus', selectEmail);
        selectableEmail.addEventListener('click', selectEmail);
        selectableEmail.focus();
      }
    });

    const contactForm = $('#contactForm');
    contactForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const values = new FormData(contactForm);
      const topicField = $('[name="topic"]', contactForm);
      const topic = (topicField?.selectedOptions?.[0]?.textContent || String(values.get('topic') || 'Un nuevo proyecto')).trim();
      const message = String(values.get('message') || '').trim();
      const draft = $('#mailDraft');
      const status = $('#draftStatus');
      if (!draft) {
        if (status) status.textContent = `Escríbeme a ${email} para contarme tu proyecto.`;
        return;
      }
      const subject = `Portfolio · ${topic}`;
      const body = `Hola Pablo,\n\n${message || `Me gustaría hablar contigo sobre ${topic.toLowerCase()}.`}\n\n`;
      draft.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      draft.hidden = false;
      draft.removeAttribute('aria-hidden');
      draft.textContent = 'Abrir borrador en mi correo';
      if (status) status.textContent = 'Borrador preparado. Abre tu aplicación de correo para revisarlo y enviarlo.';
      draft.focus({ preventScroll: true });
    });

    const year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());
    const localTime = $('#localTime');
    if (localTime) {
      const formatter = new Intl.DateTimeFormat('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', hour12: false });
      const updateTime = () => {
        localTime.textContent = formatter.format(new Date());
        localTime.setAttribute('aria-label', `Hora de Madrid: ${localTime.textContent}`);
      };
      updateTime();
      window.setInterval(updateTime, 60000);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) updateTime(); });
    }

    $$('a[target="_blank"]').forEach((link) => {
      link.relList.add('noopener', 'noreferrer');
    });
    window.addEventListener('scroll', scheduleScroll, { passive: true });
    window.addEventListener('resize', scheduleScroll, { passive: true });
    window.addEventListener('load', scheduleScroll, { once: true });
    scheduleScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
