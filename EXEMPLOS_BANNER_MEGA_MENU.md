# Exemplos de Configuração do Banner do Mega Menu

## Exemplo 1: Banner Promocional

### Configurações:
- **Mostrar banner no mega menu**: ✅ Ativado
- **Imagem do banner**: `promo-banner.jpg` (400x300px)
- **Texto alternativo da imagem**: "Oferta especial de verão"
- **URL do banner**: `/collections/verao-2024`
- **Título do banner**: "Oferta Especial"
- **Texto do banner**: "Até 50% de desconto em toda a coleção de verão. Aproveite as melhores peças com preços imperdíveis!"
- **Texto do botão**: "Ver Ofertas"

### Resultado:
Um banner atrativo que aparece no mega menu, destacando a promoção de verão com uma imagem chamativa e call-to-action claro.

---

## Exemplo 2: Banner de Lançamento

### Configurações:
- **Mostrar banner no mega menu**: ✅ Ativado
- **Imagem do banner**: `new-collection.jpg` (400x300px)
- **Texto alternativo da imagem**: "Nova coleção outono"
- **URL do banner**: `/collections/outono-2024`
- **Título do banner**: "Nova Coleção"
- **Texto do banner**: "Descubra as tendências do outono com peças exclusivas e elegantes. Seja a primeira a experimentar!"
- **Texto do botão**: "Descobrir"

### Resultado:
Banner elegante para anunciar novas coleções, criando expectativa e urgência para os clientes.

---

## Exemplo 3: Banner Institucional

### Configurações:
- **Mostrar banner no mega menu**: ✅ Ativado
- **Imagem do banner**: `brand-story.jpg` (400x300px)
- **Texto alternativo da imagem**: "Nossa história e valores"
- **URL do banner**: `/pages/sobre-nos`
- **Título do banner**: "Nossa História"
- **Texto do banner**: "Conheça a trajetória da nossa marca e os valores que nos tornam únicos no mercado."
- **Texto do botão**: "Saiba Mais"

### Resultado:
Banner que fortalece a conexão emocional com a marca, contando a história da empresa.

---

## Exemplo 4: Banner de Serviço

### Configurações:
- **Mostrar banner no mega menu**: ✅ Ativado
- **Imagem do banner**: `shipping-icon.png` (400x300px)
- **Texto alternativo da imagem**: "Frete grátis e rápido"
- **URL do banner**: `/pages/frete-gratis`
- **Título do banner**: "Frete Grátis"
- **Texto do banner**: "Em compras acima de R$ 99,90. Entrega em todo o Brasil em até 3 dias úteis."
- **Texto do botão**: "Ver Condições"

### Resultado:
Banner informativo sobre benefícios de compra, incentivando pedidos maiores.

---

## Exemplo 5: Banner de Newsletter

### Configurações:
- **Mostrar banner no mega menu**: ✅ Ativado
- **Imagem do banner**: `newsletter-icon.svg` (400x300px)
- **Texto alternativo da imagem**: "Inscreva-se na newsletter"
- **URL do banner**: `/pages/newsletter`
- **Título do banner**: "Fique por Dentro"
- **Texto do banner**: "Receba em primeira mão nossas novidades, ofertas exclusivas e dicas de estilo."
- **Texto do botão**: "Inscrever"

### Resultado:
Banner para captura de leads, incentivando inscrições na newsletter.

---

## Exemplo 6: Banner de Garantia

### Configurações:
- **Mostrar banner no mega menu**: ✅ Ativado
- **Imagem do banner**: `warranty-badge.png` (400x300px)
- **Texto alternativo da imagem**: "Garantia de qualidade"
- **URL do banner**: `/pages/garantia`
- **Título do banner**: "Garantia Total"
- **Texto do banner**: "Todos os nossos produtos têm garantia de 30 dias. Compre com segurança e confiança."
- **Texto do botão**: "Ver Garantia"

### Resultado:
Banner que transmite confiança e segurança, reduzindo objeções de compra.

---

## Dicas para Otimização

### 1. Imagens
- **Formato**: JPG para fotografias, PNG para ícones/ilustrações
- **Tamanho**: 400x300px é ideal, mas pode variar
- **Qualidade**: Otimize para web (máximo 100KB)
- **Proporção**: 4:3 funciona melhor para o layout

### 2. Textos
- **Título**: Máximo 3-4 palavras
- **Descrição**: Máximo 2 linhas
- **Botão**: 1-3 palavras de ação

### 3. Cores e Contraste
- Use cores que contrastem com o fundo
- Mantenha a legibilidade em mente
- Considere o esquema de cores do tema

### 4. Performance
- Imagens otimizadas para carregamento rápido
- Textos concisos para leitura rápida
- Call-to-action claro e visível

---

## Configurações Avançadas

### Personalização CSS
Você pode personalizar ainda mais o banner editando o arquivo `assets/component-mega-menu.css`:

```css
/* Exemplo de personalização */
.mega-menu__banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.mega-menu__banner-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
}
```

### Condicionais Liquid
O banner pode ser exibido condicionalmente baseado em:
- Tipo de página
- Produtos em destaque
- Promoções ativas
- Estação do ano

---

## Monitoramento e Analytics

### Métricas Importantes:
- **Taxa de clique**: Quantas pessoas clicam no banner
- **Conversão**: Quantas compras vêm do banner
- **Engajamento**: Tempo gasto visualizando o banner

### Ferramentas Recomendadas:
- Google Analytics
- Shopify Analytics
- Hotjar (para heatmaps)

---

**Nota**: Estes exemplos são sugestões baseadas em melhores práticas de UX. Adapte conforme a identidade visual e objetivos da sua marca.
