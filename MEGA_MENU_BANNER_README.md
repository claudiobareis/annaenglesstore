# Banner do Mega Menu - Documentação

## Visão Geral
Este tema agora inclui suporte para exibir um banner personalizado no mega menu do header. O banner pode conter uma imagem, título, texto e um link opcional.

## Configuração

### 1. Acesse o Editor de Temas
- Vá para **Online Store > Themes**
- Clique em **Customize** no tema ativo

### 2. Configure o Header
- No editor, clique na seção **Header**
- Role até encontrar a seção **"Banner do Mega Menu"**

### 3. Configurações Disponíveis

#### Configurações Básicas:
- **Mostrar banner no mega menu**: Checkbox para ativar/desativar o banner
- **Imagem do banner**: Seletor de imagem para o banner
- **Texto alternativo da imagem**: Texto descritivo para acessibilidade

#### Configurações de Conteúdo:
- **URL do banner**: Link para onde o banner redireciona (opcional)
- **Título do banner**: Título principal do banner
- **Texto do banner**: Descrição ou texto adicional
- **Texto do botão**: Texto do botão de ação (opcional)

## Como Funciona

### Estrutura do Banner
O banner é exibido no lado direito do mega menu, abaixo da lista de links. Ele inclui:

1. **Imagem**: A imagem principal do banner
2. **Conteúdo**: Título, texto e botão (se configurados)
3. **Link**: O banner inteiro se torna clicável se uma URL for configurada

### Comportamento Responsivo
- **Desktop**: Banner exibido com largura máxima de 300px
- **Mobile**: Banner ocupa toda a largura disponível
- **Hover**: Efeitos de transição suaves na imagem e botão

## Exemplos de Uso

### Banner Promocional
- **Imagem**: Produto em destaque
- **Título**: "Oferta Especial"
- **Texto**: "20% de desconto em toda a coleção"
- **URL**: Link para a coleção

### Banner Informativo
- **Imagem**: Ícone ou ilustração
- **Título**: "Novidades"
- **Texto**: "Confira nossos lançamentos"
- **URL**: Link para a página de novidades

### Banner de Marca
- **Imagem**: Logo ou imagem da marca
- **Título**: "Nossa História"
- **Texto**: "Conheça mais sobre nós"
- **URL**: Link para página institucional

## Personalização CSS

### Classes CSS Disponíveis
```css
.mega-menu__banner          /* Container principal do banner */
.mega-menu__banner-image    /* Container da imagem */
.mega-menu__banner-img      /* Imagem do banner */
.mega-menu__banner-content  /* Container do conteúdo */
.mega-menu__banner-title    /* Título do banner */
.mega-menu__banner-text     /* Texto do banner */
.mega-menu__banner-button   /* Botão do banner */
.mega-menu__banner-link     /* Link do banner */
```

### Variáveis CSS Personalizáveis
```css
--color-foreground          /* Cor do texto */
--color-background          /* Cor de fundo */
```

## Dicas de Implementação

### 1. Otimização de Imagens
- Use imagens com proporção 16:9 ou 4:3 para melhor visualização
- Tamanho recomendado: 400x300px
- Formato: JPG ou PNG com compressão adequada

### 2. Conteúdo do Banner
- Mantenha o título curto (máximo 3-4 palavras)
- Use texto descritivo mas conciso
- Considere o contexto do menu onde o banner aparece

### 3. Performance
- O banner é carregado apenas quando o mega menu é aberto
- Imagens usam `loading="lazy"` para otimização
- CSS e JavaScript são carregados apenas quando necessário

## Solução de Problemas

### Banner não aparece
1. Verifique se "Mostrar banner no mega menu" está ativado
2. Confirme se uma imagem foi selecionada
3. Verifique se o mega menu está configurado no header

### Imagem não carrega
1. Verifique se a imagem foi enviada corretamente
2. Confirme se o formato da imagem é suportado
3. Verifique as permissões de acesso à imagem

### Estilos não aplicados
1. Limpe o cache do navegador
2. Verifique se o arquivo CSS foi atualizado
3. Confirme se não há conflitos com outros estilos

## Suporte

Para dúvidas ou problemas com o banner do mega menu, consulte:
- Documentação do Shopify
- Fóruns da comunidade
- Suporte técnico do tema

---

**Versão**: 1.0  
**Data**: Dezembro 2024  
**Compatibilidade**: Shopify 2.0+
