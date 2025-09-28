# 🖼️ Swatches com Imagens de Variantes - Guia Completo

## ✅ Nova Funcionalidade Implementada

Agora o sistema de swatches suporta **mostrar a imagem da variante** quando disponível, ao invés de apenas cores ou textos. Esta funcionalidade funciona **especificamente para opções de COR** e automaticamente quando uma variante possui uma imagem associada.

## 🎯 Como Funciona

### Sistema de Prioridades (Atualizado)

O sistema agora funciona com **5 níveis de prioridade**:

1. **🏆 Prioridade 1: Imagem do Swatch Nativo**
   - Usa `value.swatch.image` quando configurado via metafields
   - Funciona com swatches nativos do Shopify

2. **🥈 Prioridade 2: Imagem da Variante** ⭐ **NOVO**
   - Usa `variant.image` quando a variante possui imagem associada
   - **Funciona APENAS para opções de COR** (não para tamanhos)
   - Funciona automaticamente sem configuração adicional

3. **🥉 Prioridade 3: Cor do Swatch Nativo**
   - Usa `value.swatch.color` quando configurado
   - Funciona com cores configuradas no admin

4. **🏅 Prioridade 4: Arquivo de Imagem por Nome**
   - Busca arquivo `{nome-da-cor}.png` ou `.jpg`
   - Converte automaticamente nomes: "Azul Marinho" → `azul-marinho.png`

5. **🏆 Prioridade 5: Cores Pré-definidas no Tema**
   - Usa cores configuradas em **Configurações do Tema** > **Color Swatches Custom**

## 🔧 Como Configurar

### Método 1: Imagens de Variantes (Recomendado)

1. **Admin Shopify** → **Produtos** → **[Seu Produto]**
2. **Variantes** → Para cada variante:
   - Clique na variante (ex: "P / Marrom", "M / Bege")
   - Na seção **Imagem da variante**
   - Faça upload da imagem específica daquela variante

### Método 2: Metafields de Swatch (Alternativo)

1. **Admin Shopify** → **Configurações** → **Metafields**
2. **Produtos** → **Adicionar definição**

**Configuração do Metafield:**
```
Nome: Swatch
Namespace: custom
Key: swatch
Tipo: Arquivo (File)
Descrição: Imagem para swatch da variante
```

3. Configure o metafield para cada variante

### Método 3: Arquivos de Imagem (Para casos específicos)

1. **Conteúdo** → **Arquivos**
2. Faça upload de imagens com nomes específicos:
   - `bege.png` para variante "Bege"
   - `marrom.png` para variante "Marrom"

## 🎨 Exemplos de Uso

### Cenário 1: Produto com Imagens de Variantes
```
Variante "P / Marrom" → [🖼️ Imagem da variante Marrom]
Variante "M / Bege"   → [🖼️ Imagem da variante Bege]
```

### Cenário 2: Produto com Swatches Nativos
```
Variante "Azul" → [🖼️ Imagem do swatch nativo]
Variante "Verde" → [🖼️ Imagem do swatch nativo]
```

### Cenário 3: Produto Misto
```
Variante "P / Marrom" → [🖼️ Imagem da variante] (Prioridade 2)
Variante "M / Azul"   → [🔵 Cor do swatch] (Prioridade 3)
```

## 🚀 Benefícios

- **✅ Automático**: Funciona sem configuração adicional
- **✅ Flexível**: Suporta múltiplos métodos de configuração
- **✅ Compatível**: Funciona com produtos existentes
- **✅ Responsivo**: Adapta-se a diferentes tamanhos de swatch
- **✅ Acessível**: Mantém textos alternativos e estrutura semântica

## 📱 Compatibilidade

- ✅ Produtos simples
- ✅ Produtos com variantes
- ✅ Kits criados via app Bundles
- ✅ Todos os tipos de seletor (botão, dropdown, swatch)
- ✅ Temas responsivos
- ✅ Swatches circulares e quadrados

## 🔍 Como Testar

1. **Acesse um produto** que tenha variantes com imagens
2. **Verifique se os swatches** mostram as imagens das variantes
3. **Teste a seleção** de diferentes variantes
4. **Verifique se a imagem principal** muda conforme a variante selecionada

## 🛠️ Arquivos Modificados

- `snippets/swatch.liquid` - Lógica principal de prioridades
- `snippets/swatch-input.liquid` - Componente de input atualizado
- `snippets/product-variant-options.liquid` - Integração com o sistema

## 💡 Dicas Importantes

1. **Qualidade das Imagens**: Use imagens de boa qualidade (mínimo 64x64px)
2. **Consistência**: Mantenha o mesmo estilo visual entre as imagens das variantes
3. **Performance**: As imagens são otimizadas automaticamente pelo Shopify
4. **Fallback**: O sistema sempre tem um fallback visual (cor ou texto)

## 🎯 Casos de Uso Ideais

- **Roupas**: Mostrar diferentes cores/estampas
- **Acessórios**: Mostrar diferentes materiais/texturas
- **Produtos personalizados**: Mostrar diferentes opções visuais
- **Kits**: Mostrar componentes diferentes

---

**✨ Agora seus produtos podem mostrar imagens reais das variantes nos swatches, proporcionando uma experiência visual muito mais rica para seus clientes!**
