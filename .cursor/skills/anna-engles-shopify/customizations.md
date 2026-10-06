# Customizações Anna Engles — referência rápida

Ler o doc completo na raiz antes de mudar comportamento. Este arquivo é só índice + essentials.

## Swatches com imagem / cor

**Arquivos:** `snippets/swatch.liquid`, `snippets/product-variant-picker.liquid`, `snippets/product-variant-options.liquid`, `snippets/swatch-input.liquid`, `assets/swatch-fallback.js`, `assets/component-swatch.css`, `assets/component-swatch-input.css`, `assets/component-product-variant-picker.css`

**Comportamento:** opções `Cor/Color` viram retângulos arredondados (retrato 3:4) com imagem/cor; `Tamanho/Size` e demais opções viram pills com cantos arredondados (`border-radius: 0.6rem`) e o valor selecionado na legenda. Não depende de `picker_type: swatch` no template. Visual dos swatches/pills na PDP: `assets/push.css` + `swatch_shape: square` em `templates/product.json`.

**Carrossel de variantes:** opções de Cor e Tamanho (e demais opções em pill) ficam dentro de `<variant-option-slider>` (`assets/variant-option-slider.js`, CSS `.variant-slider*` em `assets/push.css`). Vira carrossel com setas quando a quantidade passa do limite do bloco `variant_picker` (`slider_colors_desktop`/`_mobile` default 6/5, `slider_sizes_desktop`/`_mobile` default 8/5; breakpoint 750px) ou quando os itens não cabem na largura. Desktop: o track mostra exatamente N itens no tamanho natural. Mobile (`is-fill`): o carrossel ocupa 100% da largura e os N itens dividem o espaço igualmente (swatch mantém 3:4). Como `product-info.js` substitui o HTML de `variant-selects` a cada troca, o elemento se re-mede no `connectedCallback` e centraliza o item selecionado. Selecionado: pill preenchida + negrito; swatch com outline 2px + sombra; valor na legenda em negrito.

**Prioridade de exibição (cor):**
1. `value.swatch.image` (nativo)
2. `variant.image` (só opção de COR)
3. `value.swatch.color` (nativo)
4. Cores/arquivos em **Theme settings → Color Swatches Custom**
5. Paleta automática (nomes em português: Preto, Off White, Rosa Candy, Verde Menta, Manteiga, Mocha Mousse, Areia, etc.)
6. Círculo com iniciais (mesmo tamanho; nome completo na legenda)

Arquivos `preto.png` em Conteúdo → Arquivos **não** são mais inferidos automaticamente (o `file_url` sempre gerava URL e quebrava o visual). Use o painel Color Swatches Custom se quiser arquivo por nome.

**Docs:** `VARIANT_IMAGE_SWATCHES.md`, `CONFIGURACAO_SWATCHES_IMAGEM.md`, `MELHORIAS_SWATCH_CORES.md`, `SOLUCAO_IMEDIATA_SWATCHES.md`, `SOLUCAO_SWATCHES_KITS.md`

Metafield opcional de variante: `custom.swatch` (File).

## Mega menu — banner por collection

**Arquivos:** `snippets/header-mega-menu.liquid`, `assets/component-mega-menu.css`, `sections/header.liquid`

**Metafields (Collection):**
| Metafield | Tipo | Uso |
|-----------|------|-----|
| `custom.banner_menu` | Single line text | URL da imagem |
| `custom.banner_menu_link` | Single line text | URL de destino |

Banner à direita do mega menu; imagem sugerida ~280×210 (4:3), ≤200KB.

**Docs:** `MEGA_MENU_BANNER_METAFIELDS.md`, `README_BANNER_MEGA_MENU.md`, `EXEMPLO_CONFIGURACAO_METAFIELDS.md`

## Vídeo nos cards de produto

**Arquivos:** `snippets/card-product.liquid`; settings nas sections `featured-collection`, `related-products`, `main-collection-product-grid`

**Settings típicos:**
- Exibir vídeos nos cards (default: on)
- Autoplay (default: off) — preferir off

Clique no vídeo não deve navegar para o PDP (comportamento já corrigido; não regredir).

**Docs:** `CONFIGURACOES_VIDEO.md`, `VIDEO_CARD_FEATURE.md`, `VIDEO_CUSTOM_CLASS_README.md`, `VIDEO_SECTION_FIX.md`, `TROUBLESHOOTING_VIDEO.md`

## Footer accordion (mobile)

**Arquivos:** `sections/footer.liquid`, `assets/footer-accordion.js`, estilos em `assets/section-footer.css`

- Ativo só em viewports **&lt; 750px**
- Um painel aberto por vez; newsletter permanece sempre visível
- Acessível: `aria-expanded`, teclado Enter/Space

**Doc:** `FOOTER_ACCORDION_README.md`

## FAQ coleção e produto

**Arquivos:** `snippets/faq-list.liquid`, `sections/collection-faq.liquid`, `sections/product-faq.liquid`, CSS em `assets/push.css`, templates `product.json` / `collection.json`

**Metafields:**
| Recurso | Metafield | Tipo |
|---------|-----------|------|
| Coleção | `custom.faq` | JSON |
| Produto | `custom.caracteristicas_titulo_faq` | Single line text |
| Produto | `custom.caracteristicas_faq` | JSON |

JSON: `[{"question":"...","answer":"..."}]`. `answer` pode ter HTML; o JSON-LD usa `strip_html`.

**Fallback no PDP:** `caracteristicas_faq` do produto → `custom.faq` da `collection` do URL → primeira de `product.collections` com FAQ. Sem itens = não renderiza. Título do PDP: metafield de título, senão setting da seção.

**SEO:** um bloco `FAQPage` por página (só se houver perguntas).

## Guia de medidas (PDP)

**Arquivos:** bloco `guia_medidas` em `sections/main-product.liquid`, `snippets/tabela-medidas.liquid`, CSS em `assets/push.css` (`.guia-medidas-box`, `.extra-tabela-medidas`, `.tabela-medidas`), bloco em `templates/product.json`.

**UI:** box limpo com ícone de régua abaixo do botão comprar (reordenável no editor do tema). Clique abre modal com a(s) tabela(s). Sem conteúdo no metafield = box oculto.

**Metafield (Produto):**

| Metafield | Tipo | Uso |
|-----------|------|-----|
| `custom.guia_de_medidas` | Multi-line text | Uma ou mais tabelas no formato planilha |

**Setup no admin:** Configurações → Dados personalizados → Produtos → criar **Guia de medidas** (`custom.guia_de_medidas`), Multi-line text. Colar na **descrição** do campo (dica para o lojista):

```
Uma ou mais tabelas. Separe tabelas com uma linha em branco.
1ª linha = título (opcional). Demais linhas = células separadas por ;
A 1ª linha com ; é o cabeçalho (ex.: Medidas;P;M;G).

Exemplo:
Medidas Blusa Tule
Medidas;P;M;G
Busto;64cm;68cm;72cm
Cintura;68cm;72cm;78cm
Comprimento;55cm;57cm;58cm

Medidas TOP
Medidas;P;M;G
Busto;60cm;64cm;68cm
Cintura;64cm;66cm;70cm
Comprimento;26cm;27cm;28cm
```

Separadores aceitos no tema: `;` (preferido), tab ou `,`. Settings do bloco: título e subtítulo. Independente de `habilitar_descricao_extra`. O metafield antigo `custom.tabela_de_medidas` (lista de metaobjetos) não é mais usado.

## Mini cart (gaveta lateral customizada)

**Arquivos:** `snippets/mini-cart.liquid` (markup + textos traduzidos em `data-*` + `<template>` dos ícones), `assets/mini-cart.js` (renderização e ações), CSS em `assets/push.css` (bloco "Mini cart"). Renderizado em `sections/header.liquid` via `{%- render 'mini-cart' -%}`.

**Atenção:** a loja **não** usa o `cart-drawer` do Dawn (`snippets/cart-drawer.liquid` fica intocado) nem a `cart-notification` como UI principal. O ícone do header chama `openCartNotification()`, e o `product-form.js` também chama `window.openCartNotification()` após adicionar ao carrinho. Esse nome global é definido em `mini-cart.js`; não redefinir em outro lugar.

**Comportamento:** dados de `/cart.js`; quantidade (+/-) e lixeira via `/cart/change.js` por `line`, re-renderizando com a resposta. Dinheiro formatado com `Intl.NumberFormat` na moeda/locale do carrinho (sem "R$" fixo); usa `final_line_price`/`original_line_price` (respeita descontos). Erros da Shopify (ex.: estoque) aparecem em `#mini-cart-error`. Atualiza/cria/remove o `.cart-count-bubble` do header. Fecha com overlay, X ou Esc; trava o scroll com `body.mini-cart-open`.

**Visual:** título uppercase 1.5rem com contador; item em grid (imagem 9rem 3:4 arredondada / 8rem no mobile); nome 1.4rem 500 (fonte do corpo); variante e preço unitário 1.2rem cinza; lixeira no canto superior direito; quantidade em pill + total da linha à direita; rodapé com "Total estimado" 1.8rem, nota de frete/tributos, botão Finalizar e link "Ver carrinho". Produto sem imagem mantém o quadro (Dawn esconde `a:empty`, por isso o override `.mini-cart-item__media:empty`). Overlay escuro discreto (`rgba(0,0,0,.35)`, fade) atrás da gaveta; clicar nele fecha. Ele precisa do override `.mini-cart__overlay:empty { display: block }`, porque o Dawn esconde `div:empty`.

## Etiquetas de produto (tags com cor)

**Arquivos:** `snippets/product-tags.liquid` (renderizado em `snippets/card-product.liquid` com `context: 'card'` e no bloco `text` de `sections/main-product.liquid` com `context: 'pdp'`), CSS em `assets/push.css` (`.product-tags`, `.product-tag`, `.product-tags-product-page`, `.product-tag-product`).

**Metaobjeto `etiqueta_produto`** (Configurações → Dados personalizados → Metaobjetos, com acesso da vitrine ativo):

| Campo | Tipo | Uso |
|-------|------|-----|
| `tag` | Single line text (obrigatório) | Nome da tag no produto (ex.: Black Friday) |
| `cor_fundo` | Color | Fundo do badge |
| `cor_texto` | Color | Texto do badge |
| `rotulo` | Single line text (opcional) | Texto exibido no lugar do nome da tag |

**Regras:** só tags cadastradas no metaobjeto aparecem; tags internas (coleções automáticas etc.) ficam ocultas. A comparação é por `handleize` (ignora maiúsculas e acentos). A ordem de exibição segue a ordem das entradas no admin. As cores vão como `--tag-bg` / `--tag-color` inline; sem cor, o card usa fundo preto e texto branco e a PDP usa fundo branco com contorno preto. Sem entradas no metaobjeto = nenhuma etiqueta.

## Slideshow (banner da home)

**Arquivos:** `sections/slideshow.liquid`, `assets/component-slideshow.css`, overrides em `assets/push.css` (bloco `.page-home slideshow-component .slideshow__controls`).

**Na home:** as setas seguem o padrão dos carrosséis de produtos: quadrado preto 44px, ícone branco, `position: absolute` nas laterais e centralizadas verticalmente na imagem (desktop e mobile). O contador (`.slider-counter`) fica oculto via CSS, e a barra `.slideshow__controls` fica `static` e sem borda (altura zero). O `z-index: 4` das setas fica acima do overlay `.slideshow__link` (z-index 3). O seletor exige `.slideshow__controls` porque a barra de anúncios também é um `slideshow-component` e não pode ser afetada.

## CSS / branding global

**Arquivo:** `assets/push.css` (linkado em `layout/theme.liquid`)

Usar para overrides de layout/marca sem forkar CSS base do Dawn desnecessariamente.

## Ao implementar mudanças nestas features

1. Abrir o `.md` da feature.
2. Localizar os arquivos listados acima.
3. Preservar prioridades/metafields/settings existentes.
4. Retestar mobile + desktop no `theme dev`.
5. Atualizar o `.md` da feature só se o comportamento documentado mudar de fato.
