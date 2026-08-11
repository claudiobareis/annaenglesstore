# Customizações Anna Engles — referência rápida

Ler o doc completo na raiz antes de mudar comportamento. Este arquivo é só índice + essentials.

## Swatches com imagem / cor

**Arquivos:** `snippets/swatch.liquid`, `snippets/color-option.liquid`, `snippets/swatch-input.liquid`, `snippets/product-variant-options.liquid`, `assets/swatch-fallback.js`, `assets/component-swatch.css`, `assets/component-swatch-input.css`

**Prioridade de exibição (cor):**
1. `value.swatch.image` (nativo)
2. `variant.image` (só opção de COR)
3. `value.swatch.color` (nativo)
4. Arquivo por nome (`azul-marinho.png` etc. em Conteúdo → Arquivos)
5. Cores em **Theme settings → Color Swatches Custom**

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

## CSS / branding global

**Arquivo:** `assets/push.css` (linkado em `layout/theme.liquid`)

Usar para overrides de layout/marca sem forkar CSS base do Dawn desnecessariamente.

## Ao implementar mudanças nestas features

1. Abrir o `.md` da feature.
2. Localizar os arquivos listados acima.
3. Preservar prioridades/metafields/settings existentes.
4. Retestar mobile + desktop no `theme dev`.
5. Atualizar o `.md` da feature só se o comportamento documentado mudar de fato.
