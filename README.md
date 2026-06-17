# SACHA · Site

Protótipo estático (HTML/CSS/JS puros — sem build).

## Páginas
- `index.html` — Landing page
- `login.html` — Entrar / Criar conta (abas; o submit leva para a tela de boas-vindas)
- `welcome.html` — Tela de boas-vindas (pós-login)
- `intro.html` — Tela de introdução (recursos + apoiadores)
- `chat.html` — Chat com a SACHA (demo roteirizada, sem backend)

## Fluxo
Landing → Entrar → Login/Cadastro → Welcome → Começar → Intro → "Começar agora" → Chat (respostas roteirizadas; integre o backend na função `reply()` em `chat.html`)

## Identidade
Tokens em `assets/styles.css` (`:root`): creme `#FBEEDB`, vermelho `#8C1D18`, verde `#2E4A38`, dourado `#C9A35C`, marrom `#3B2417`. Fontes: EB Garamond (display) + Nunito Sans (texto), via Google Fonts.

## Como rodar
Abra `index.html` direto no navegador, ou sirva a pasta (`npx serve` / `python -m http.server`).
