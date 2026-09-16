# Customizações Anna Engles — referência rápida

Ler o doc completo na raiz antes de mudar comportamento. Este arquivo é só índice + essentials.

## Swatches com imagem / cor

**Arquivos:** `snippets/swatch.liquid`, `snippets/product-variant-picker.liquid`, `snippets/product-variant-options.liquid`, `snippets/swatch-input.liquid`, `assets/swatch-fallback.js`, `assets/component-swatch.css`, `assets/component-swatch-input.css`, `assets/component-product-variant-picker.css`

**Comportamento:** opções `Cor/Color` viram retângulos arredondados (retrato 3:4) com imagem/cor; `Tamanho/Size` e demais opções viram pills com cantos arredondados (`border-radius: 0.6rem`) e o valor selecionado na legenda. Não depende de `picker_type: swatch` no template. Visual dos swatches/pills na PDP: `assets/push.css` + `swatch_shape: square` em `templates/product.json`.

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

## CSS / branding global

**Arquivo:** `assets/push.css` (linkado em `layout/theme.liquid`)

Usar para overrides de layout/marca sem forkar CSS base do Dawn desnecessariamente.

## Ao implementar mudanças nestas features

1. Abrir o `.md` da feature.
2. Localizar os arquivos listados acima.
3. Preservar prioridades/metafields/settings existentes.
4. Retestar mobile + desktop no `theme dev`.
5. Atualizar o `.md` da feature só se o comportamento documentado mudar de fato.
