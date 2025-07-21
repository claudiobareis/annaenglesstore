# Guia de Teste - Vídeo nos Cards de Produtos

## Pré-requisitos

1. **Produto com Vídeo**: Tenha um produto no Shopify com vídeo anexado
2. **Acesso ao Admin**: Acesso ao painel administrativo do Shopify
3. **Tema Atualizado**: Certifique-se de que as modificações foram aplicadas

## Passos para Testar

### 1. Preparar o Produto

#### Opção A: Vídeo Nativo do Shopify
1. Acesse o admin do Shopify
2. Vá para **Produtos** > Selecione um produto
3. Na seção **Mídia**, clique em **Adicionar arquivo**
4. Faça upload de um arquivo de vídeo (MP4, MOV, etc.)
5. Defina o vídeo como **Mídia principal** ou **Mídia secundária**
6. Salve o produto

#### Opção B: Vídeo Externo (YouTube/Vimeo)
1. Acesse o admin do Shopify
2. Vá para **Produtos** > Selecione um produto
3. Na seção **Mídia**, clique em **Adicionar URL**
4. Cole a URL do YouTube ou Vimeo
5. Defina o vídeo como **Mídia principal** ou **Mídia secundária**
6. Salve o produto

### 2. Verificar a Implementação

#### Verificar o Código
1. Abra o arquivo `snippets/card-product.liquid`
2. Confirme que as seguintes seções estão presentes:
   ```liquid
   {%- if card_product.featured_media.media_type == 'video' or card_product.featured_media.media_type == 'external_video' -%}
   ```

#### Verificar os Estilos
1. Confirme que `component-deferred-media.css` está incluído:
   ```liquid
   {{ 'component-deferred-media.css' | asset_url | stylesheet_tag }}
   ```

### 3. Testar no Frontend

#### Teste Básico
1. Acesse a página de coleção onde o produto aparece
2. Verifique se o card do produto mostra:
   - Thumbnail do vídeo
   - Ícone de play sobre a thumbnail
   - Comportamento de hover (se configurado)

#### Teste de Reprodução
1. Clique no ícone de play
2. Verifique se o vídeo carrega e reproduz
3. Teste os controles de reprodução (para vídeos nativos)

#### Teste Responsivo
1. Teste em diferentes tamanhos de tela
2. Verifique se o vídeo se adapta corretamente
3. Teste em dispositivos móveis

### 4. Testar Mídia Secundária

#### Configurar Mídia Secundária
1. Adicione uma segunda mídia (imagem ou vídeo) ao produto
2. Configure `show_secondary_image: true` na seção que usa o card

#### Testar Hover
1. Passe o mouse sobre o card do produto
2. Verifique se a mídia secundária aparece
3. Se for vídeo, teste a reprodução

## Casos de Teste

### ✅ Caso 1: Vídeo Principal
- **Configuração**: Produto com vídeo como mídia principal
- **Resultado Esperado**: Card mostra thumbnail com ícone de play
- **Ação**: Clique no ícone
- **Resultado Esperado**: Vídeo carrega e reproduz

### ✅ Caso 2: Vídeo Secundário
- **Configuração**: Produto com imagem principal e vídeo secundário
- **Resultado Esperado**: Card mostra imagem principal
- **Ação**: Hover sobre o card
- **Resultado Esperado**: Vídeo secundário aparece com ícone de play

### ✅ Caso 3: Vídeo Externo (YouTube)
- **Configuração**: Produto com vídeo do YouTube
- **Resultado Esperado**: Thumbnail do YouTube com ícone de play
- **Ação**: Clique no ícone
- **Resultado Esperado**: Vídeo do YouTube carrega em iframe

### ✅ Caso 4: Vídeo Externo (Vimeo)
- **Configuração**: Produto com vídeo do Vimeo
- **Resultado Esperado**: Thumbnail do Vimeo com ícone de play
- **Ação**: Clique no ícone
- **Resultado Esperado**: Vídeo do Vimeo carrega em iframe

### ✅ Caso 5: Produto sem Vídeo
- **Configuração**: Produto apenas com imagens
- **Resultado Esperado**: Comportamento normal do card (sem ícone de play)

## Verificações Técnicas

### Console do Navegador
1. Abra as ferramentas de desenvolvedor (F12)
2. Vá para a aba **Console**
3. Verifique se não há erros JavaScript
4. Confirme que `global.js` está carregado

### Network Tab
1. Vá para a aba **Network**
2. Recarregue a página
3. Verifique se os arquivos CSS e JS estão carregando
4. Confirme que as thumbnails dos vídeos estão sendo carregadas

### Elementos
1. Inspecione o card do produto
2. Verifique se a estrutura HTML está correta:
   ```html
   <deferred-media class="deferred-media media media--transparent" data-media-id="...">
     <button class="deferred-media__poster" type="button">
       <span class="deferred-media__poster-button">
         <span class="svg-wrapper">...</span>
       </span>
       <img src="..." alt="...">
     </button>
     <template>...</template>
   </deferred-media>
   ```

## Problemas Comuns e Soluções

### ❌ Vídeo não aparece
**Possíveis Causas:**
- Vídeo não foi feito upload corretamente
- Tipo de mídia não está sendo detectado

**Soluções:**
1. Verifique se o vídeo está anexado ao produto
2. Confirme se o tipo de mídia é `video` ou `external_video`
3. Verifique o console para erros

### ❌ Ícone de play não aparece
**Possíveis Causas:**
- CSS não está carregado
- Ícone SVG não está disponível

**Soluções:**
1. Confirme que `component-deferred-media.css` está incluído
2. Verifique se `icon-play.svg` existe em `assets/`
3. Inspecione os estilos CSS

### ❌ Vídeo não reproduz
**Possíveis Causas:**
- JavaScript não está carregado
- Erro no carregamento do vídeo

**Soluções:**
1. Confirme que `global.js` está carregado
2. Verifique o console para erros JavaScript
3. Teste com diferentes tipos de vídeo

### ❌ Problemas de Performance
**Possíveis Causas:**
- Vídeos muito grandes
- Muitos vídeos na mesma página

**Soluções:**
1. Otimize os vídeos antes do upload
2. Use lazy loading
3. Considere usar vídeos externos para arquivos grandes

## Checklist de Validação

- [ ] Vídeo aparece como thumbnail no card
- [ ] Ícone de play está visível sobre a thumbnail
- [ ] Clique no ícone carrega o vídeo
- [ ] Vídeo reproduz corretamente
- [ ] Controles funcionam (para vídeos nativos)
- [ ] Funciona em diferentes navegadores
- [ ] Funciona em dispositivos móveis
- [ ] Mídia secundária funciona no hover
- [ ] Não há erros no console
- [ ] Performance está adequada

## Próximos Passos

Após validar todos os testes:

1. **Deploy**: Faça o deploy das mudanças para produção
2. **Monitoramento**: Monitore o desempenho e uso
3. **Feedback**: Colete feedback dos usuários
4. **Otimizações**: Implemente melhorias baseadas no feedback 