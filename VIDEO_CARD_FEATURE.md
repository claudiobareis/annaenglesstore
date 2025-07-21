# Funcionalidade de Vídeo nos Cards de Produtos

## Visão Geral

A funcionalidade de vídeo nos cards de produtos foi implementada para permitir que vídeos sejam exibidos nos cards de produtos, tanto para a mídia principal quanto para a mídia secundária (hover).

## Como Funciona

### Detecção Automática
O sistema detecta automaticamente se a mídia principal ou secundária do produto é um vídeo (tipo `video` ou `external_video`) e renderiza o componente apropriado.

### Tipos de Vídeo Suportados
- **Vídeos nativos do Shopify** (`media_type: 'video'`)
- **Vídeos externos** (`media_type: 'external_video'`)
  - YouTube
  - Vimeo

### Comportamento
1. **Thumbnail**: Exibe a imagem de preview do vídeo
2. **Botão de Play**: Mostra um ícone de play sobre a thumbnail
3. **Reprodução**: Ao clicar, o vídeo é carregado e reproduzido
4. **Controles**: Vídeos nativos incluem controles de reprodução
5. **Autoplay**: Vídeos começam a reproduzir automaticamente quando carregados

## Implementação Técnica

### Arquivos Modificados
- `snippets/card-product.liquid`: Adicionada lógica para detectar e renderizar vídeos

### Dependências
- `component-deferred-media.css`: Estilos para o componente de vídeo
- `global.js`: JavaScript para funcionalidade de vídeo (já incluído no tema)

### Estrutura do Código
```liquid
{%- if card_product.featured_media.media_type == 'video' or card_product.featured_media.media_type == 'external_video' -%}
  <deferred-media class="deferred-media media media--transparent" data-media-id="{{ card_product.featured_media.id }}">
    <button class="deferred-media__poster" type="button">
      <span class="deferred-media__poster-button">
        <span class="svg-wrapper">{{ 'icon-play.svg' | inline_asset_content }}</span>
      </span>
      <img src="{{ card_product.featured_media.preview_image | image_url: width: 533 }}" alt="{{ card_product.featured_media.alt | escape }}">
    </button>
    <template>
      <!-- Conteúdo do vídeo baseado no tipo -->
    </template>
  </deferred-media>
{%- else -%}
  <!-- Renderização normal de imagem -->
{%- endif -%}
```

## Como Usar

### Para Produtos com Vídeo
1. Faça upload de um vídeo no produto no admin do Shopify
2. Defina o vídeo como mídia principal ou secundária
3. O card automaticamente detectará e exibirá o vídeo

### Configurações Disponíveis
- `show_secondary_image`: Controla se o vídeo secundário é exibido no hover
- `lazy_load`: Controla o carregamento lazy das thumbnails

## Compatibilidade

### Navegadores Suportados
- Chrome (versões recentes)
- Firefox (versões recentes)
- Safari (versões recentes)
- Edge (versões recentes)

### Dispositivos
- Desktop
- Tablet
- Mobile

## Performance

### Otimizações Implementadas
- **Lazy Loading**: Thumbnails são carregadas apenas quando necessárias
- **Deferred Loading**: Vídeos são carregados apenas quando o usuário clica
- **Responsive Images**: Thumbnails são otimizadas para diferentes tamanhos de tela

### Considerações
- Vídeos externos (YouTube/Vimeo) podem ter dependência de conectividade
- Vídeos nativos são servidos pelo CDN do Shopify

## Personalização

### CSS Customizável
Os estilos podem ser personalizados através das classes CSS:
- `.deferred-media__poster`: Container do botão de play
- `.deferred-media__poster-button`: Botão de play
- `.svg-wrapper`: Container do ícone

### Exemplo de Personalização
```css
.card__media .deferred-media__poster-button {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
```

## Troubleshooting

### Problemas Comuns
1. **Vídeo não aparece**: Verifique se o vídeo foi feito upload corretamente no produto
2. **Thumbnail não carrega**: Verifique se a imagem de preview está disponível
3. **Vídeo não reproduz**: Verifique se o JavaScript está carregado corretamente

### Debug
- Verifique o console do navegador para erros JavaScript
- Confirme se o arquivo `global.js` está sendo carregado
- Verifique se o `component-deferred-media.css` está incluído

## Exemplos de Uso

### Produto com Vídeo Principal
```liquid
{% render 'card-product', 
  card_product: product,
  show_secondary_image: true,
  lazy_load: true
%}
```

### Produto com Vídeo Secundário
```liquid
{% render 'card-product', 
  card_product: product,
  show_secondary_image: true,
  lazy_load: true
%}
```

## Changelog

### v1.0.0
- Implementação inicial da funcionalidade de vídeo
- Suporte para vídeos nativos e externos
- Integração com sistema de deferred-media existente
- Suporte para mídia principal e secundária 