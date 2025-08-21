# Banner do Mega Menu com Metafields - Documentação

## 🎯 Visão Geral
Este tema agora usa **metafields das collections** para exibir banners personalizados no mega menu. Cada coleção pode ter seu próprio banner com imagem e link.

## 🔧 Metafields Necessários

### 1. `custom.banner_menu`
- **Tipo**: Single line text
- **Namespace**: `custom`
- **Key**: `banner_menu`
- **Valor**: URL da imagem (ex: `https://cdn.shopify.com/.../banner.jpg`)

### 2. `custom.banner_menu_link`
- **Tipo**: Single line text  
- **Namespace**: `custom`
- **Key**: `banner_menu_link`
- **Valor**: URL de destino (ex: `/collections/novidades`)

## 📋 Como Configurar

### Passo 1: Acessar Metafields
1. **Admin Shopify** → **Settings** → **Custom data** → **Metafields**
2. **Collections** → **Add definition**

### Passo 2: Criar Metafield para Imagem
```
Name: Banner do Menu
Namespace: custom
Key: banner_menu
Type: Single line text
Description: URL da imagem para exibir no mega menu
```

### Passo 3: Criar Metafield para Link
```
Name: Link do Banner
Namespace: custom
Key: banner_menu_link
Type: Single line text
Description: URL para onde o banner redireciona
```

### Passo 4: Configurar nas Collections
1. **Products** → **Collections**
2. **Selecione uma collection**
3. **Metafields** → **custom.banner_menu**
4. **Adicione a URL da imagem**
5. **custom.banner_menu_link**
6. **Adicione a URL de destino**

## 🖼️ Como Funciona

### Estrutura Automática:
- **Menu "Novidades"** → Abre coleção "Novidades" → Lê metafields da coleção
- **Menu "Produtos"** → Abre coleção "Produtos" → Lê metafields da coleção
- **Menu "Sobre"** → Abre coleção "Sobre" → Lê metafields da coleção

### Exibição do Banner:
- **Posição**: Lado direito do mega menu
- **Conteúdo**: Imagem + título da coleção + botão "Ver Mais"
- **Link**: Redireciona para URL configurada em `custom.banner_menu_link`

## 📱 Exemplos de Configuração

### Collection "Novidades":
```
custom.banner_menu: https://cdn.shopify.com/.../banner-novidades.jpg
custom.banner_menu_link: /collections/novidades
```

### Collection "Produtos":
```
custom.banner_menu: https://cdn.shopify.com/.../banner-produtos.jpg
custom.banner_menu_link: /collections/todos-produtos
```

### Collection "Sobre":
```
custom.banner_menu: https://cdn.shopify.com/.../banner-sobre.jpg
custom.banner_menu_link: /pages/sobre-nos
```

## 🎨 Especificações da Imagem

### Dimensões Recomendadas:
- **Desktop**: 280x210px (proporção 4:3)
- **Mobile**: 16:9 (adaptação automática)
- **Formato**: JPG, PNG, WebP
- **Tamanho**: Máximo 200KB para performance

### Características:
- **Aspect Ratio**: 4:3 funciona melhor
- **Qualidade**: Otimizada para web
- **Conteúdo**: Visual atrativo relacionado à coleção

## 🔗 URLs de Destino

### Tipos de Link Recomendados:
- **Coleções**: `/collections/nome-da-colecao`
- **Páginas**: `/pages/nome-da-pagina`
- **Produtos**: `/products/nome-do-produto`
- **Blogs**: `/blogs/nome-do-blog`

### Exemplos:
```
/collections/verao-2024
/pages/promocoes
/products/destaque-semana
/blogs/novidades
```

## ✅ Verificação de Funcionamento

### 1. Banner Aparece:
- ✅ Metafield `custom.banner_menu` preenchido
- ✅ Imagem acessível via URL
- ✅ Collection vinculada ao menu

### 2. Link Funciona:
- ✅ Metafield `custom.banner_menu_link` preenchido
- ✅ URL válida e acessível
- ✅ Página de destino existe

### 3. Visual Correto:
- ✅ Imagem com proporção adequada
- ✅ Título da coleção exibido
- ✅ Botão "Ver Mais" visível

## 🚨 Solução de Problemas

### Banner não aparece:
1. Verifique se `custom.banner_menu` está preenchido
2. Confirme se a URL da imagem é válida
3. Verifique se a collection está vinculada ao menu

### Link não funciona:
1. Verifique se `custom.banner_menu_link` está preenchido
2. Confirme se a URL de destino é válida
3. Teste o link diretamente no navegador

### Imagem não carrega:
1. Verifique se a URL da imagem está correta
2. Confirme se a imagem está acessível publicamente
3. Verifique se o formato é suportado

## 💡 Dicas de Implementação

### 1. Organização:
- Use nomes descritivos para as collections
- Mantenha URLs consistentes
- Organize imagens por categoria

### 2. Performance:
- Otimize imagens para web
- Use CDN quando possível
- Mantenha tamanhos de arquivo baixos

### 3. UX:
- Imagens relacionadas ao conteúdo
- Links que fazem sentido
- Call-to-action claro

## 🔄 Atualizações

### Modificar Banner:
1. **Admin** → **Collections** → **Metafield**
2. **Altere a URL da imagem**
3. **Salve** → Banner atualiza automaticamente

### Modificar Link:
1. **Admin** → **Collections** → **Metafield**
2. **Altere a URL de destino**
3. **Salve** → Link atualiza automaticamente

---

**Versão**: 2.0 (Metafields)  
**Data**: Dezembro 2024  
**Compatibilidade**: Shopify 2.0+  
**Requisitos**: Metafields habilitados
