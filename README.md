# Landing Page para Loja de Açaí 🍇

Template de landing page para lojas de açaí, desenvolvido com **HTML, CSS e JavaScript puro**.

O projeto foi criado para servir como base para pequenos negócios que desejam apresentar seus produtos, divulgar seus diferenciais e direcionar clientes para seus canais de atendimento e venda.

## 🔗 Demonstração

[Visualizar demonstração online]
(https://pietrodasilvaferreira.github.io/Landing-page-a-a-da-mika/)

## ✨ Funcionalidades

- Layout responsivo para desktop e dispositivos móveis.
- Menu de navegação adaptado para telas menores.
- Seção principal (Hero) com chamadas para ação.
- Apresentação dos diferenciais da loja.
- Carrossel de produtos com troca automática.
- Botões para navegar entre os produtos.
- Seção de avaliações e depoimentos.
- Seção final com chamada para ação.
- Links personalizáveis para WhatsApp, iFood, redes sociais e outros canais.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura e organização do conteúdo.
- **CSS3:** estilização, identidade visual, layouts, animações e responsividade.
- **JavaScript:** interações do menu mobile, funcionamento do carrossel e atualização dos produtos.
- **Google Fonts:** carregamento das fontes Poppins e SN Pro.
- **Bootstrap Icons:** biblioteca de ícones utilizada na interface.

## 📁 Estrutura dos arquivos

Landing-page-a-a-da-mika/
│
├── IMGs/
│   ├── icon-logo.ico
│   ├── copo-300ml.png
│   ├── copo-500ml.png
│   ├── copo-700ml.png
│   ├── combo-familia.png
│   └── ...
│
├── index.html
├── styles.css
├── responsive-geral.css
├── scripts.js
└── README.md

**Função de cada arquivo:**

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Estrutura e conteúdo da página. |
| `styles.css` | Estilos visuais e aparência dos elementos. |
| `responsive-geral.css` | Variáveis de personalização e ajustes responsivos. |
| `scripts.js` | Interações e funcionalidades em JavaScript. |
| `IMGs/` | Imagens, logos e ícones utilizados no projeto. |

## 🚀 Como utilizar

1. Baixe ou clone este repositório.
2. Extraia os arquivos, caso tenha baixado em ZIP.
3. Abra a pasta do projeto em um editor de código, como o Visual Studio Code.
4. Abra o arquivo `index.html` no navegador.
5. Siga as instruções abaixo para personalizar a página.

Não é necessário instalar frameworks ou ferramentas adicionais para executar o projeto localmente.

## 🎨 Personalização

### 1. Alterando o nome da loja

Abra o arquivo `index.html` e procure pelos textos:

- `[NOME DA SUA LOJA]`
- `[NOME DE SUA LOJA]`

Substitua pelas informações do seu negócio.

O nome aparece em diferentes partes da página, como no cabeçalho, na seção de diferenciais e no rodapé.

Também altere o conteúdo da tag `<title>` dentro do `<head>` para modificar o título exibido na aba do navegador.

### 2. Alterando as cores

Abra o arquivo `responsive-geral.css` e procure pelo bloco `:root`.

Nele estão as variáveis CSS responsáveis pelas principais cores e configurações visuais:

```css
:root {
    --color-0: #9d00ff;
    --color-1: #674080;
    --color-2: #f100ff;
    --neutral-color-0: #fcfbfc;
    --neutral-color-1: #0e0c01;
    --color-hover-btncta: rgba(157, 0, 255, 0.8);
}
```

Você pode substituir os códigos de cores para criar uma identidade visual diferente.

| Variável | Utilização |
|---|---|
| `--color-0` | Cor principal da identidade visual. |
| `--color-1` | Cor secundária, utilizada em elementos e fundos. |
| `--color-2` | Cor de destaque. |
| `--neutral-color-0` | Cor neutra clara. |
| `--neutral-color-1` | Cor neutra escura. |
| `--color-hover-btncta` | Cor de interação dos botões. |

**Dica:** procure manter uma boa combinação entre as cores de fundo, textos e botões para preservar a legibilidade.

### 3. Alterando fontes e tamanhos

No mesmo bloco `:root`, você encontrará:

```css
--font-padrao: "Poppins", arial, sans-serif;
--font-title: "SN Pro", arial, sans-serif;

--font-size-titles: 2.3em;
--font-size-medium-titles: 1.5rem;
--font-size-icons: 1.8rem;
```

- `--font-padrao`: fonte utilizada nos textos gerais.
- `--font-title`: fonte utilizada nos títulos.
- `--font-size-titles`: tamanho principal dos títulos.
- `--font-size-medium-titles`: tamanho de títulos secundários.
- `--font-size-icons`: tamanho de ícones.

As fontes são carregadas pelo Google Fonts no HTML. Se quiser utilizar outras fontes, será necessário alterar também os links de importação no `index.html`.

### 4. Alterando textos e conteúdos

A maior parte dos textos está no arquivo `index.html`.

Você pode editar:

- Título e descrição da seção principal.
- Textos dos botões.
- Título e descrição dos diferenciais.
- Títulos e descrições das seções.
- Conteúdo do rodapé.
- Informações de contato.
- Depoimentos e avaliações.

Procure as seções pelo nome ou pelos comentários presentes no código.

**Importante:** substitua os depoimentos de exemplo por avaliações reais e autorizadas antes de publicar a página para um negócio.

### 5. Alterando imagens e logos

As imagens utilizadas ficam dentro da pasta `IMGs`.

Para substituir uma imagem:

1. Adicione a nova imagem à pasta `IMGs`.
2. Abra o `index.html` ou `scripts.js`, dependendo de onde ela é utilizada.
3. Localize o caminho da imagem antiga.
4. Substitua pelo caminho da nova imagem.

Exemplo:

```html
<img src="IMGs/minha-imagem.png" alt="Descrição da imagem">
```

Mantenha os caminhos corretos e confira se o nome do arquivo corresponde exatamente ao arquivo salvo na pasta.

Se alterar o nome de uma imagem utilizada pelo JavaScript, lembre-se de atualizar também sua referência em `scripts.js`.

### 6. Alterando os links dos botões

Os botões de direcionamento estão no `index.html`.

Procure pelos atributos:

```html
<a href="#" target="_blank">Pedir Agora!</a>
```

Substitua o `#` pelo endereço desejado.

Exemplos de destinos:

- Link do WhatsApp.
- Página da loja no iFood.
- Instagram.
- Cardápio online.
- Outro canal de atendimento.

Confira todos os botões da página, incluindo os do cabeçalho, menu mobile, seção principal, carrossel e CTA final.

### 7. Personalizando os produtos do carrossel

A lista de produtos fica no arquivo `scripts.js`, dentro do array chamado `produtos`.

Cada produto é representado por um objeto:

```javascript
{
    favorit: true,
    nome: "Copo 500ML",
    img: "IMGs/copo-500ml.png",
    desc: "Copo de 500ml do nosso açaí cremoso.",
    features: [
        "Acompanhamentos grátis",
        "Frutas frescas",
        "Turbine com adicionais"
    ],
    linkCopo: "#"
}
```

**O que cada propriedade faz:**

| Propriedade | Função |
|---|---|
| `favorit` | Define se o selo de favorito será exibido. |
| `nome` | Nome do produto. |
| `img` | Caminho da imagem do produto. |
| `desc` | Descrição do produto. |
| `features` | Lista de três características do produto. |
| `linkCopo` | Link de destino do botão daquele produto. |

Para adicionar um produto, copie um objeto existente, cole dentro do array e altere suas informações.

Separe os objetos utilizando vírgulas.

**Atenção:** mantenha três características em cada lista `features`, pois o carrossel atualiza três elementos de texto na interface.

O carrossel troca os produtos automaticamente e também permite navegação pelos botões anterior e próximo.

### 8. Alterando a responsividade

O arquivo `responsive-geral.css` contém regras para adaptar a página a diferentes tamanhos de tela.

Ele utiliza media queries, como:

```css
@media (max-width: 768px) {
    /* Ajustes para telas menores */
}
```

Se quiser modificar o comportamento da página em celulares ou tablets, procure as media queries e altere as regras correspondentes.

O arquivo `styles.css` contém os estilos principais, enquanto `responsive-geral.css` complementa esses estilos com ajustes para diferentes larguras de tela.

**Recomendação:** depois de qualquer alteração, teste a página em desktop e celular para verificar se os elementos continuam bem posicionados.

## 📦 Publicação

O projeto pode ser publicado em serviços de hospedagem de páginas estáticas, como o GitHub Pages.

Para publicar pelo GitHub:

1. Envie os arquivos do projeto para um repositório.
2. Acesse as configurações do repositório.
3. Entre na seção **Pages**.
4. Configure a publicação a partir da branch desejada.
5. Aguarde a geração do endereço público.

Lembre-se de manter o `index.html` na raiz do diretório publicado.

## ⚠️ Observações importantes

- Este projeto é um template front-end estático.
- Não possui banco de dados ou painel administrativo.
- Os pedidos são direcionados para links externos configurados pelo usuário.
- O comprador é responsável por personalizar os textos, imagens, produtos e contatos.
- Serviços externos, como Google Fonts e Bootstrap Icons, dependem de conexão com a internet.
- Verifique as permissões de uso das imagens, fontes, ícones e demais recursos antes de utilizá-los comercialmente.

## 👨‍💻 Autor

Desenvolvido por **Pietro da Silva Ferreira**.

Projeto desenvolvido com HTML, CSS e JavaScript.

---

Se este template foi útil para você, considere dar uma estrela ao repositório! ⭐
