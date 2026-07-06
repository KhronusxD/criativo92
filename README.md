# Criativo 92 — Landing Page

Agência de marketing manauara (DDD 92). Conceito **Encontro das Águas**: fusão de
criatividade (Rio Negro) e estratégia/dados (Solimões).

Stack: **Astro** + **GSAP/ScrollTrigger** + **Lenis** (smooth scroll). Todas as
ilustrações amazônicas são **SVG vetorial autoral animado** (boto, vitória-régia,
arara, peixe-boi, grafismo marajoara, rio). Sem imagens externas.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera /dist
npm run preview
```

## Motion implementado (referência: showcase Framer)

- Smooth scroll com inércia (Lenis sincronizado ao GSAP ticker)
- Reveal on scroll com stagger + blur-in (`[data-reveal]`)
- Headline com reveal palavra-por-palavra com máscara
- Botões magnéticos (`[data-magnetic]`) com brilho que segue o cursor
- Cards com tilt 3D (`[data-tilt]`)
- Counters animados (`[data-counter]`)
- Seção "Encontro das Águas" sticky com scroll-scrub (fusão das correntes)
- Portfólio com scroll horizontal preso (pin + scrub)
- Marquee infinito bidirecional
- Vaga-lumes / partículas, rio em loop, cursor customizado
- Tudo respeita `prefers-reduced-motion`

## Acessibilidade / performance

- HTML semântico, foco visível, contraste alto.
- Motion pesado desligado em `prefers-reduced-motion` e simplificado no mobile.
- Apenas GSAP + Lenis como libs.
