# 🎨 Configuração de Swatches com Imagens - Guia Completo

## ✅ O Problema Foi Identificado

Seu tema estava configurado para usar `"picker_type": "button"` ao invés de `"picker_type": "swatch"`. **Já corrigi isso!** 

## 🔧 Como Configurar Swatches com Imagens

### Método 1: Metafields de Swatch (Recomendado)

#### Passo 1: Criar Metafields de Swatch
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

#### Passo 2: Configurar Swatches por Produto
1. **Produtos** → **[Seu Produto]**
2. Role até **Metafields**
3. **Variantes** → Para cada variante:
   - Clique na variante (ex: "Bege", "Marrom")
   - Na seção **Metafields** da variante
   - **custom.swatch** → Faça upload da imagem da cor

### Método 2: Imagens de Arquivo (Alternativo)

#### Configuração por Nome de Arquivo:
1. **Conteúdo** → **Arquivos**
2. Faça upload de imagens com nomes específicos:
   - `bege.png` para variante "Bege"
   - `marrom.png` para variante "Marrom"
   - Use **minúsculas** e **hífens** ao invés de espaços

**Exemplo:**
- Variante: "Azul Marinho" → Arquivo: `azul-marinho.png`
- Variante: "Verde Claro" → Arquivo: `verde-claro.png`

## 🎯 Suas Configurações Atuais (Já Corrigidas)

### ✅ Configurações do Tema:
```json
"optionName": "Cor"           ← Nome da opção correto
"swatchType": "variantImage"  ← Tipo configurado para imagens
"swatchStyle": "square-round-corners" ← Estilo quadrado com cantos arredondados
"swatchSize": 82              ← Tamanho 82px
```

### ✅ Template do Produto:
```json
"picker_type": "swatch"       ← Corrigido de "button" para "swatch"
"swatch_shape": "circle"      ← Forma circular
```

## 🔍 Como Testar

### 1. Verificar se as Imagens Aparecem:
- Acesse seu produto no site
- As variantes de cor devem mostrar imagens ao invés de cores sólidas

### 2. Se Ainda Não Funcionar:
1. **Verifique os metafields** das variantes
2. **Confirme os nomes dos arquivos** (método alternativo)
3. **Limpe o cache** do navegador

## 📱 Exemplo de Configuração para Seu Produto

### Para o produto com variantes "Bege" e "Marrom":

#### Método Metafields:
```
Variante "Bege":
├── custom.swatch → Upload: imagem-bege.jpg

Variante "Marrom":  
├── custom.swatch → Upload: imagem-marrom.jpg
```

#### Método Arquivos:
```
Arquivos uploadados:
├── bege.png (64x64px ou maior)
├── marrom.png (64x64px ou maior)
```

## 🚀 Resultado Esperado

Com essas configurações, seus swatches devem mostrar:
- **🖼️ Imagem da variante** quando configurada via metafields
- **🎨 Imagem do arquivo** quando nomeada corretamente
- **📝 Nome da cor** como fallback (nossa implementação anterior)

## 🆘 Solução de Problemas

### Se as imagens ainda não aparecem:

1. **Verifique o nome da opção**: Deve ser exatamente "Cor" (com C maiúsculo)
2. **Confirme o tipo de swatch**: Deve estar "variantImage" nas configurações
3. **Teste com diferentes produtos**: Alguns produtos podem ter configurações específicas
4. **Verifique o console do navegador**: Pode haver erros de carregamento

---

**Status:** ✅ Configuração corrigida  
**Próximo passo:** Configurar metafields ou arquivos de imagem para suas variantes
