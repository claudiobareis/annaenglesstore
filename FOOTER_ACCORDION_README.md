# Acordeão do Footer - Documentação

## Visão Geral
Este sistema implementa um acordeão responsivo no footer do tema Shopify, que funciona apenas em dispositivos móveis (telas menores que 750px). Em desktop, o footer mantém seu comportamento normal.

## Funcionalidades

### ✅ Características Principais
- **Responsivo**: Funciona apenas em mobile (< 750px)
- **Acessível**: Suporte completo para teclado e leitores de tela
- **Suave**: Animações CSS com transições suaves
- **Inteligente**: Fecha automaticamente outros acordeões ao abrir um novo
- **Persistente**: Newsletter sempre visível (não é afetada pelo acordeão)

### 🎯 Comportamento
- **Estado Inicial**: Todos os blocos fechados
- **Clique**: Abre o bloco clicado e fecha os outros
- **Teclado**: Suporte para Enter e Space
- **Responsivo**: Remove funcionalidade automaticamente em desktop

## Estrutura HTML

### Classes CSS Utilizadas
- `.footer-accordion-trigger`: Título clicável (h2)
- `.footer-accordion-content`: Conteúdo expansível
- `.accordion-open`: Estado ativo (aberto)

### Atributos de Acessibilidade
- `role="button"`: Define como botão para leitores de tela
- `tabindex="0"`: Permite navegação por teclado
- `aria-expanded`: Indica estado expandido/contraído

## Arquivos Modificados

### 1. `sections/footer.liquid`
- Adicionadas classes CSS para acordeão
- Incluído script JavaScript
- Estrutura HTML atualizada

### 2. `assets/footer-accordion.js` (Novo)
- Classe JavaScript para controlar o acordeão
- Event listeners para clique e teclado
- Gerenciamento de estado responsivo

### 3. `assets/section-footer.css`
- Estilos CSS para mobile e desktop
- Animações e transições
- Estados visuais do acordeão

## Como Funciona

### Mobile (< 750px)
1. **Títulos clicáveis**: Aparecem com ícone + à direita
2. **Conteúdo oculto**: Inicialmente com `max-height: 0` e `opacity: 0`
3. **Clique expande**: Adiciona classe `.accordion-open`
4. **Animações suaves**: Transições CSS para altura, opacidade e margem

### Desktop (≥ 750px)
1. **Comportamento normal**: Remove todas as funcionalidades do acordeão
2. **Conteúdo sempre visível**: `max-height: none` e `opacity: 1`
3. **Sem ícones**: Remove ícones + e - dos títulos

## Personalização

### Cores
As cores seguem as variáveis CSS do tema:
```css
color: rgba(var(--color-foreground), 0.75);
```

### Animações
Transições configuráveis:
```css
transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Breakpoints
- **Mobile**: < 750px (acordeão ativo)
- **Desktop**: ≥ 750px (acordeão desabilitado)

## Compatibilidade

### Navegadores Suportados
- ✅ Chrome/Edge (moderno)
- ✅ Firefox (moderno)
- ✅ Safari (moderno)
- ✅ Mobile browsers

### Funcionalidades
- ✅ Touch (mobile)
- ✅ Mouse (desktop)
- ✅ Teclado (acessibilidade)
- ✅ Screen readers (ARIA)

## Troubleshooting

### Problema: Acordeão não funciona
**Solução**: Verificar se o arquivo `footer-accordion.js` está sendo carregado

### Problema: Estilos não aplicados
**Solução**: Verificar se o CSS está sendo carregado corretamente

### Problema: Funciona em desktop
**Solução**: Verificar breakpoint CSS (750px)

## Manutenção

### Adicionar Novo Bloco
1. Adicionar classe `footer-accordion-trigger` ao título
2. Adicionar classe `footer-accordion-content` ao conteúdo
3. Adicionar `data-block-id` único

### Modificar Comportamento
1. Editar `footer-accordion.js` para lógica
2. Editar `section-footer.css` para estilos
3. Testar em mobile e desktop

## Performance

### Otimizações Implementadas
- **Event delegation**: Event listeners eficientes
- **CSS transitions**: Animações nativas do navegador
- **Lazy loading**: Só inicializa quando necessário
- **Cleanup**: Remove funcionalidade em desktop

### Monitoramento
- Console logs para debugging
- Performance em diferentes dispositivos
- Testes de acessibilidade
