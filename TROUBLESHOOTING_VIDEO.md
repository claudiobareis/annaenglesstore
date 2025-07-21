# Troubleshooting - Vídeo não Reproduz

## Problema Identificado

O vídeo está sendo renderizado corretamente no HTML, mas não está reproduzindo quando clicado. Vamos resolver isso passo a passo.

## Análise do Código Renderizado

Baseado no HTML que você forneceu:

```html
<deferred-media class="deferred-media media media--transparent" data-media-id="34217925574716">
  <button id="Deferred-Poster-Card-34217925574716" class="deferred-media__poster" type="button">
    <!-- Botão com ícone de play -->
  </button>
  <template>
    <video playsinline="playsinline" controls="controls" autoplay="autoplay" preload="none" muted="muted">
      <source src="/cdn/shop/videos/c/vp/6aa7dad5fc154a269d65e41471f981ee/6aa7dad5fc154a269d65e41471f981ee.HD-1080p-2.5Mbps-51629149.mp4?v=0" type="video/mp4">
    </video>
  </template>
</deferred-media>
```

## Passos para Resolver

### 1. Verificar JavaScript

Abra o console do navegador (F12) e verifique:

```javascript
// Verificar se a classe DeferredMedia existe
console.log(typeof DeferredMedia);

// Verificar se os elementos estão sendo encontrados
const deferredElements = document.querySelectorAll('deferred-media');
console.log('Elementos encontrados:', deferredElements.length);

// Verificar se o botão está sendo encontrado
const posterButtons = document.querySelectorAll('[id^="Deferred-Poster-"]');
console.log('Botões encontrados:', posterButtons.length);
```

### 2. Testar Manualmente

Adicione este código no console para testar manualmente:

```javascript
// Encontrar o primeiro elemento deferred-media
const deferredMedia = document.querySelector('deferred-media');
if (deferredMedia) {
  console.log('Elemento encontrado:', deferredMedia);
  
  // Simular clique no botão
  const posterButton = deferredMedia.querySelector('[id^="Deferred-Poster-"]');
  if (posterButton) {
    console.log('Botão encontrado, simulando clique...');
    posterButton.click();
  }
}
```

### 3. Verificar se o Template está Funcionando

```javascript
// Verificar conteúdo do template
const template = document.querySelector('deferred-media template');
if (template) {
  console.log('Template encontrado:', template.innerHTML);
} else {
  console.log('Template NÃO encontrado');
}
```

### 4. Testar Reprodução Manual

```javascript
// Tentar reproduzir o vídeo manualmente
const video = document.querySelector('deferred-media video');
if (video) {
  console.log('Vídeo encontrado, tentando reproduzir...');
  video.play().then(() => {
    console.log('Vídeo iniciado com sucesso');
  }).catch((error) => {
    console.log('Erro ao reproduzir vídeo:', error);
  });
}
```

## Possíveis Causas e Soluções

### ❌ Problema 1: JavaScript não carregado

**Sintomas:**
- Não há erros no console
- Clique no botão não faz nada

**Solução:**
1. Verifique se `global.js` está sendo carregado
2. Confirme que não há erros de JavaScript

### ❌ Problema 2: Conflito de IDs

**Sintomas:**
- Múltiplos elementos com o mesmo ID
- JavaScript não encontra o botão correto

**Solução:**
1. Verifique se há IDs duplicados
2. Use IDs únicos para cada elemento

### ❌ Problema 3: Vídeo não carrega

**Sintomas:**
- Template está vazio
- URL do vídeo não é válida

**Solução:**
1. Verifique se a URL do vídeo está acessível
2. Confirme se o formato do vídeo é suportado

### ❌ Problema 4: Política de Autoplay

**Sintomas:**
- Vídeo carrega mas não reproduz
- Erro no console sobre autoplay

**Solução:**
1. Adicione `muted: true` ao vídeo
2. Use `user interaction` para iniciar reprodução

## Código de Teste Temporário

Adicione este código temporariamente para debug:

```javascript
// Adicionar ao final da página ou no console
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DEBUG VÍDEO ===');
  
  // Encontrar todos os elementos deferred-media
  const elements = document.querySelectorAll('deferred-media');
  console.log('Elementos deferred-media encontrados:', elements.length);
  
  elements.forEach((element, index) => {
    console.log(`Elemento ${index + 1}:`, {
      id: element.getAttribute('data-media-id'),
      hasButton: !!element.querySelector('[id^="Deferred-Poster-"]'),
      hasTemplate: !!element.querySelector('template'),
      templateContent: element.querySelector('template')?.innerHTML
    });
    
    // Adicionar listener manual
    const button = element.querySelector('[id^="Deferred-Poster-"]');
    if (button) {
      button.addEventListener('click', function(e) {
        console.log('Botão clicado!', e);
        
        // Tentar carregar conteúdo manualmente
        const template = element.querySelector('template');
        if (template && !element.getAttribute('loaded')) {
          console.log('Carregando conteúdo...');
          
          const content = document.createElement('div');
          content.appendChild(template.content.firstElementChild.cloneNode(true));
          
          element.setAttribute('loaded', true);
          const video = content.querySelector('video');
          
          if (video) {
            element.appendChild(video);
            console.log('Vídeo adicionado, tentando reproduzir...');
            video.play().then(() => {
              console.log('Vídeo reproduzindo!');
            }).catch((error) => {
              console.log('Erro ao reproduzir:', error);
            });
          }
        }
      });
    }
  });
});
```

## Verificações Finais

### ✅ Checklist de Validação

- [ ] JavaScript está carregado sem erros
- [ ] Elementos `deferred-media` estão sendo encontrados
- [ ] Botões com ID correto estão presentes
- [ ] Templates contêm o vídeo correto
- [ ] URLs dos vídeos são acessíveis
- [ ] Não há conflitos de ID
- [ ] Política de autoplay está sendo respeitada

### 🔧 Próximos Passos

1. **Execute os testes** acima no console
2. **Verifique os logs** para identificar o problema
3. **Teste manualmente** a reprodução do vídeo
4. **Reporte os resultados** para ajustes finais

## Solução Alternativa

Se o problema persistir, podemos implementar uma solução mais simples:

```javascript
// Solução alternativa - reproduzir vídeo diretamente
document.querySelectorAll('.deferred-media__poster').forEach(button => {
  button.addEventListener('click', function() {
    const deferredMedia = this.closest('deferred-media');
    const template = deferredMedia.querySelector('template');
    const video = template.content.querySelector('video');
    
    if (video && !deferredMedia.getAttribute('loaded')) {
      const videoClone = video.cloneNode(true);
      deferredMedia.appendChild(videoClone);
      deferredMedia.setAttribute('loaded', true);
      videoClone.play();
    }
  });
});
``` 