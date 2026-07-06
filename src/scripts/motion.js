/* ============================================================
   CRIATIVO 92 — motion (Lenis + GSAP/ScrollTrigger)
   Catálogo: smooth scroll, reveal+stagger, headline por palavra,
   botão magnético, tilt 3D, counters, encontro das águas (scrub),
   scroll horizontal preso, vaga-lumes, cursor, draw-on, bloom.
   ============================================================ */
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const isMobile = window.matchMedia('(max-width: 760px)').matches;

/* ---------- helpers leves que rodam mesmo com reduced-motion ---------- */
function counters() {
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseFloat(el.dataset.counter || '0');
    if (reduce) { el.textContent = Math.round(target).toLocaleString('pt-BR'); return; }
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.to(obj, {
        v: target, duration: 2, ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('pt-BR'); },
      }),
    });
  });
}

function classOnView(selector, klass, start = 'top 80%') {
  document.querySelectorAll(selector).forEach((el) => {
    if (reduce) { el.classList.add(klass); return; }
    ScrollTrigger.create({ trigger: el, start, once: true, onEnter: () => el.classList.add(klass) });
  });
}

/* ---------- se o usuário pediu menos movimento, paramos por aqui ---------- */
if (reduce) {
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
  counters();
  classOnView('.vreg', 'bloom');
  classOnView('.mara', 'drawn');
} else {
  /* ---------- smooth scroll ---------- */
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // pausar/retomar via atributo data-lenis-stop (ex.: menu mobile aberto)
  window.__lenis = lenis;

  /* ---------- reveal on scroll + stagger + blur-in ---------- */
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 86%',
    onEnter: (batch) => batch.forEach((el, i) => setTimeout(() => el.classList.add('is-in'), i * 90)),
  });

  /* ---------- headline herói: palavra por palavra com máscara ---------- */
  const words = gsap.utils.toArray('.hero__title .word');
  if (words.length) {
    gsap.set(words, { yPercent: 120 });
    gsap.to(words, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07, delay: 0.25 });
  }
  // sub-itens do herói
  gsap.from('[data-hero-fade]', { opacity: 0, y: 24, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.7 });

  /* ---------- botões magnéticos + brilho ---------- */
  if (finePointer) {
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const strength = 0.35;
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * strength, y: (e.clientY - r.top - r.height / 2) * strength, duration: 0.4, ease: 'power3.out' });
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
      el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' }));
    });
  }

  /* ---------- tilt 3D nos cards ---------- */
  if (finePointer && !isMobile) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      const max = 9;
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, { rotateY: px * max, rotateX: -py * max, transformPerspective: 900, transformOrigin: 'center', duration: 0.4, ease: 'power2.out' });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.7, ease: 'power3.out' }));
    });
  }

  /* ---------- counters / bloom / draw-on ---------- */
  counters();
  classOnView('.vreg', 'bloom');
  classOnView('.mara', 'drawn');

  /* ---------- parallax genérico [data-parallax="0.2"] ---------- */
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    const depth = parseFloat(el.dataset.parallax || '0.2');
    gsap.to(el, {
      yPercent: -depth * 100, ease: 'none',
      scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  /* ---------- Encontro das Águas — sticky scrub ---------- */
  const enc = document.querySelector('[data-encontro]');
  if (enc) {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: enc, start: 'top top', end: '+=140%', scrub: 0.6, pin: true, anticipatePin: 1 },
    });
    tl.fromTo('.corrente--negro', { xPercent: -100 }, { xPercent: 0, ease: 'none' }, 0)
      .fromTo('.corrente--solimoes', { xPercent: 100 }, { xPercent: 0, ease: 'none' }, 0)
      .fromTo('.enc__seam', { opacity: 0, scaleX: 0.3 }, { opacity: 0.8, scaleX: 1, ease: 'power1.out' }, 0.3)
      .from('.encontro__line', { yPercent: 110, opacity: 0, stagger: 0.15, ease: 'power3.out' }, 0.15);
  }

  /* ---------- Portfólio — scroll horizontal preso ---------- */
  const hwrap = document.querySelector('[data-hscroll]');
  if (hwrap && !isMobile) {
    const inner = hwrap.querySelector('.hscroll__inner');
    const dist = () => Math.max(0, inner.scrollWidth - window.innerWidth);
    gsap.to(inner, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: hwrap, start: 'top top', end: () => `+=${dist()}`, scrub: 0.6, pin: true, invalidateOnRefresh: true },
    });
  }

  /* ---------- vaga-lumes ---------- */
  document.querySelectorAll('[data-fireflies]').forEach((box) => {
    const n = parseInt(box.dataset.fireflies || '14', 10);
    for (let i = 0; i < n; i++) {
      const f = document.createElement('span');
      const size = gsap.utils.random(2, 5);
      f.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:radial-gradient(circle,#ffe69a,rgba(255,195,43,0));pointer-events:none;`;
      gsap.set(f, { x: gsap.utils.random(0, box.offsetWidth), y: gsap.utils.random(0, box.offsetHeight) });
      box.appendChild(f);
      const drift = () => gsap.to(f, {
        x: `+=${gsap.utils.random(-90, 90)}`, y: `+=${gsap.utils.random(-70, 70)}`,
        opacity: gsap.utils.random(0.2, 1), duration: gsap.utils.random(2.5, 5),
        ease: 'sine.inOut', onComplete: drift,
      });
      drift();
    }
  });

  /* ---------- cursor customizado (gota / boto) ---------- */
  if (finePointer && !isMobile) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { ...pos };
    window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.18; pos.y += (mouse.y - pos.y) * 0.18;
      gsap.set(dot, { x: pos.x, y: pos.y });
    });
    document.querySelectorAll('a, button, [data-tilt]').forEach((el) => {
      el.addEventListener('pointerenter', () => dot.classList.add('is-hover'));
      el.addEventListener('pointerleave', () => dot.classList.remove('is-hover'));
    });
  }

  /* ---------- header encolhe no scroll ---------- */
  const header = document.querySelector('[data-header]');
  if (header) {
    ScrollTrigger.create({ start: 'top -80', onUpdate: (self) => header.classList.toggle('is-scrolled', self.scroll() > 80) });
  }

  /* ---------- recalcular após carregar fontes/imagens ---------- */
  window.addEventListener('load', () => ScrollTrigger.refresh());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
}
