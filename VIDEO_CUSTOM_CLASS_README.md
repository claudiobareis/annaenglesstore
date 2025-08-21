# Seção de Vídeo - Classe CSS Personalizada

## Visão Geral

A seção de vídeo agora inclui um campo para adicionar classes CSS personalizadas, permitindo que os desenvolvedores e designers apliquem estilos adicionais sem modificar o código do tema.

## Funcionalidades

### Campo de Classe Personalizada

- **Localização**: Configurações da seção → Estilo → Classe CSS Personalizada
- **Tipo**: Campo de texto
- **Uso**: Adicione classes CSS separadas por espaço

### Como Funciona

1. **Aplicação Automática**: A classe personalizada é aplicada automaticamente ao elemento principal da seção
2. **Localização**: A classe é adicionada ao elemento `<div>` principal com as classes `color-{scheme} gradient`
3. **Flexibilidade**: Permite múltiplas classes separadas por espaço

## Exemplos de Uso

### Classe Única
```
minha-classe-personalizada
```

### Múltiplas Classes
```
minha-classe-personalizada classe-adicional outra-classe
```

### Classes com Modificadores
```
video-destaque video-fullscreen video-overlay
```

## Casos de Uso Comuns

### 1. Estilização Específica
```css
.video-destaque {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
```

### 2. Responsividade Personalizada
```css
.video-mobile-otimizado {
  margin: 0 -20px;
}

@media (min-width: 768px) {
  .video-mobile-otimizado {
    margin: 0;
  }
}
```

### 3. Animações Personalizadas
```css
.video-com-animacao {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Estrutura HTML Gerada

```html
<div class="color-scheme-1 gradient minha-classe-personalizada">
  <div class="video-section isolate page-width section-{id}-padding">
    <!-- Conteúdo da seção -->
  </div>
</div>
```

## Benefícios

1. **Flexibilidade**: Aplique estilos sem modificar o código do tema
2. **Manutenibilidade**: Mantenha personalizações organizadas
3. **Reutilização**: Use as mesmas classes em diferentes seções
4. **Performance**: Não adiciona JavaScript desnecessário
5. **Compatibilidade**: Funciona com todos os navegadores modernos

## Limitações

- **Classes CSS**: Apenas classes CSS são suportadas (não IDs ou estilos inline)
- **Escopo**: A classe é aplicada apenas ao elemento principal da seção
- **Validação**: Não há validação automática das classes inseridas

## Dicas de Desenvolvimento

1. **Nomenclatura**: Use nomes descritivos e consistentes
2. **Organização**: Agrupe classes relacionadas
3. **Documentação**: Mantenha um registro das classes personalizadas usadas
4. **Testes**: Sempre teste em diferentes dispositivos e navegadores

## Suporte

Para dúvidas ou problemas com esta funcionalidade, consulte:
- Documentação do tema
- Suporte técnico
- Comunidade de desenvolvedores
