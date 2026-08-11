---
name: anna-engles-shopify
description: >-
  Particularidades do tema Shopify Anna Engles: swatches, mega menu com
  metafields, vídeo nos cards, footer accordion, FAQ coleção/produto.
  Use ao trabalhar neste repositório, metafields ou essas features.
  Plataforma Shopify/Push: skill pessoal `shopify` (CLI, theme check, push.css, Liquid).
---

# Anna Engles — Tema Shopify

**Ler a skill plataforma `shopify` primeiro.** Aqui só o específico desta loja.

**Store:** `annaenglesstore.myshopify.com` (não documentar senhas/tokens)  
**Base:** Dawn · overrides em `assets/push.css`

Responder em **português (Brasil)**.

## Antes de tarefas de feature

Se a tarefa tocar swatches, mega menu, vídeo, footer accordion ou FAQ, ler também [customizations.md](customizations.md) e o `.md` correspondente na raiz.

## Customizações desta loja

1. **Swatches / cores** — `snippets/swatch.liquid`, `color-option.liquid`, `swatch-input.liquid`, `assets/swatch-fallback.js`, settings Color Swatches Custom. Prioridade típica: `value.swatch.image` → `variant.image` → …
2. **Mega menu + banner** — `snippets/header-mega-menu.liquid` + metafields de collection `custom.banner_menu` / `custom.banner_menu_link` (imagem sugerida ~280×210, 4:3).
3. **Vídeo nos cards** — `snippets/card-product.liquid` + settings em `featured-collection`, `related-products`, `main-collection-product-grid`.
4. **Footer accordion (mobile)** — `sections/footer.liquid` + `assets/footer-accordion.js` (< 750px).
5. **FAQ coleção/produto** — `snippets/faq-list.liquid`, `sections/collection-faq.liquid`, `sections/product-faq.liquid`. Metafields: coleção `custom.faq` (JSON); produto `custom.caracteristicas_faq` (JSON) + `custom.caracteristicas_titulo_faq` (texto). PDP: produto → coleção do URL → primeira collection com FAQ. Sem itens = seção oculta. JSON-LD FAQPage.

Ao alterar qualquer um: preservar o comportamento documentado em [customizations.md](customizations.md).

## CLI desta loja

Usar `--store=annaenglesstore.myshopify.com` em todos os comandos. Fluxo auth/dev/pull/push/theme check: skill `shopify`.

## Checklist extra (além da plataforma)

- [ ] Features tocadas retestadas (swatch / mega menu / vídeo / footer / FAQ se aplicável)

Ao mudar features, atualize esta skill. Se o padrão for reutilizável, alimentar o Brain — skill `shopify` → `compounding.md`.
