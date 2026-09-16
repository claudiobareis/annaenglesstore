# Seletor de variantes — cor e tamanho

O PDP trata **Cor** e **Tamanho** como controles diferentes. Cores usam círculos visuais com o nome da opção selecionada na legenda (`Cor: PRETO`). Tamanhos usam pills (`Tamanho: P`). Funciona mesmo sem configuração no painel.

## Prioridade visual das cores

1. Imagem do swatch nativo (`value.swatch.image`)
2. Imagem da variante (`variant.image`, só em opção de cor)
3. Cor nativa (`value.swatch.color`)
4. **Theme settings → Color Swatches Custom** (`Nome:#hex` ou arquivo explícito)
5. Paleta automática (Preto, Off White, Rosa Candy, Rosa Claro, Areia, Azul Candy, Verde Menta, Manteiga, Mocha Mousse, Marrom, Caramelo, Chumbo, Bordô, Marinho e tons comuns)
6. Círculo com **iniciais** (mesmo tamanho dos demais; nome completo só na legenda `Cor: …`)

Não inferir `preto.png` / `areia.png` automaticamente: `file_url` no Liquid sempre gera URL, mesmo quando o arquivo não existe, e isso gerava círculos vazios com texto cortado (`ROS...`, `MA...`).

## Semântica das opções

- `Cor`, `Color`, `Colour` → swatch
- `Tamanho`, `Size` e qualquer outra opção → pills
- Dropdown continua dropdown; `swatch_shape: none` também força pills nas cores

## Arquivos

- `snippets/product-variant-picker.liquid`
- `snippets/swatch.liquid`
- `snippets/swatch-input.liquid`
- `assets/component-product-variant-picker.css`
- `assets/component-swatch.css`
- `assets/component-swatch-input.css`
- `assets/swatch-fallback.js` — só valida imagens realmente declaradas; se falhar, paleta e depois círculo com iniciais

## Configuração opcional

A paleta automática cobre os tons da loja. Se um nome novo não for reconhecido, o tema mostra um círculo com iniciais. Para forçar um hex ou arquivo:

**Personalizar tema → Color Swatches Custom → Colors**

```
Rosa Candy:#f3b6c4
Areia:#cbb89a
Verde Menta:#98d8c8
Mocha Mousse:#a47864
```

Ou `Areia: areia.png` (arquivo já enviado em Conteúdo → Arquivos).
