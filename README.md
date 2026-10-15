# INSAVE — Combo de E-books

Landing page estática e responsiva do combo **Gestão Financeira Essencial**, construída com HTML, CSS e JavaScript puros.

## Estrutura

```text
INSAVE-Combo-Ebooks/
├── .openai/hosting.json
├── dist/
│   ├── assets/images/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── robots.txt
│   └── sitemap.xml
└── README.md
```

## Como executar

Abra um terminal na pasta `dist`, execute `python -m http.server 4177` e acesse `http://127.0.0.1:4177/`.

## Como editar

- Textos e estrutura: `dist/index.html`
- Cores, tipografia, espaçamentos e responsividade: variáveis no início de `dist/style.css`
- Checkout, Analytics e eventos: `SITE_CONFIG` no início de `dist/script.js`
- Imagens: substitua os arquivos em `dist/assets/images/` mantendo os nomes ou ajuste os caminhos no HTML

## Pendências antes da campanha

1. Inserir os IDs de GA4, Meta Pixel ou GTM em `SITE_CONFIG` e os respectivos scripts oficiais no HTML, se forem utilizados.
2. URL definitiva configurada: `https://educacao.insave.net.br/combo-de-ebooks/`.

## Publicação

O conteúdo público está inteiramente na pasta `dist`, pronta para hospedagem estática. Envie essa pasta para o servidor ou use o ZIP entregue com o projeto.
