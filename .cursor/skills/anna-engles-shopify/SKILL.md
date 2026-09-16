---
name: anna-engles-shopify
description: >-
  Particularidades do tema Shopify Anna Engles: swatches, mega menu com
  metafields, vídeo nos cards, footer accordion, FAQ coleção/produto,
  guia de medidas (texto multilinha), slideshow (link no slide + imagem mobile).
  Use ao trabalhar neste repositório, metafields ou essas features.
  Plataforma Shopify/Push: skill pessoal `shopify` (CLI, theme check, push.css, Liquid).
---

# Anna Engles — Tema Shopify

**Ler a skill plataforma `shopify` primeiro.** Aqui só o específico desta loja.

**Store:** `annaenglesstore.myshopify.com` (não documentar senhas/tokens)  
**Base:** Dawn · overrides em `assets/push.css`

Responder em **português (Brasil)**.

## Antes de tarefas de feature

Se a tarefa tocar swatches, mega menu, vídeo, footer accordion, FAQ, guia de medidas ou slideshow, ler também [customizations.md](customizations.md) e o `.md` correspondente na raiz.

## Customizações desta loja

1. **Swatches / cores** — `snippets/swatch.liquid`, `product-variant-picker.liquid`, `swatch-input.liquid`, `assets/swatch-fallback.js`, estilos em `assets/push.css`. Cor = retângulos arredondados (retrato 3:4); tamanho = pills com cantos arredondados (`border-radius: 0.6rem`). Prioridade: swatch nativo → imagem da variante → cor nativa → Color Swatches Custom → paleta automática PT → retângulo com iniciais. Sem inferir `nome.png` automaticamente.
2. **Mega menu + banner** — `snippets/header-mega-menu.liquid` + metafields de collection `custom.banner_menu` / `custom.banner_menu_link` (imagem sugerida ~280×210, 4:3).
3. **Vídeo nos cards** — `snippets/card-product.liquid` + settings em `featured-collection`, `related-products`, `main-collection-product-grid`.
4. **Footer accordion (mobile)** — `sections/footer.liquid` + `assets/footer-accordion.js` (< 750px).
5. **FAQ coleção/produto** — `snippets/faq-list.liquid`, `sections/collection-faq.liquid`, `sections/product-faq.liquid`. Metafields: coleção `custom.faq` (JSON); produto `custom.caracteristicas_faq` (JSON) + `custom.caracteristicas_titulo_faq` (texto). PDP: produto → coleção do URL → primeira collection com FAQ. Sem itens = seção oculta. JSON-LD FAQPage.
6. **Slideshow** — `sections/slideshow.liquid` + `assets/component-slideshow.css`. Link sem `button_label` → overlay `.slideshow__link` no slide inteiro; com botão → só o botão clica. `image_mobile` opcional (fallback = imagem desktop); `adapt_image` no mobile usa aspect ratio da imagem mobile quando existir.
7. **Posição da Descrição do Produto** — `sections/main-product.liquid` + `assets/push.css` (`.product__description-below`). Setting `description_layout` no tema: `sidebar` (coluna lateral) ou `below_media` (aberta abaixo da seção de fotos/produto).
8. **Guia de medidas** — bloco `guia_medidas` em `sections/main-product.liquid` (box com ícone → modal) + `snippets/tabela-medidas.liquid` + CSS em `assets/push.css`. Metafield produto `custom.guia_de_medidas` (Multi-line text). Posição editável no editor do tema (default: após comprar). Sem metafield = bloco oculto. Antigo `custom.tabela_de_medidas` (metaobjeto) não é mais lido.

Ao alterar qualquer um: preservar o comportamento documentado em [customizations.md](customizations.md).

## CLI desta loja

Usar `--store=annaenglesstore.myshopify.com` em todos os comandos. Fluxo auth/dev/pull/push/theme check: skill `shopify`.

## Checklist extra (além da plataforma)

- [ ] Features tocadas retestadas (swatch / mega menu / vídeo / footer / FAQ / guia de medidas / slideshow se aplicável)

Ao mudar features, atualize esta skill. Se o padrão for reutilizável, alimentar o Brain — skill `shopify` → `compounding.md`.
