# Lancheira Saudável - Landing Page

Este projeto foi desenvolvido com React, Vite e Tailwind CSS.

## Como hospedar na Hostinger (via GitHub)

Se você está usando a Hostinger e quer publicar este site usando o seu repositório do GitHub, siga estas opções:

### Opção 1: Via GitHub Actions (Recomendado)
Esta é a melhor forma. Sempre que você fizer um `push` para o GitHub, o site será compilado e enviado automaticamente para a Hostinger.

1. No repositório, vá em **Actions** > **New workflow**.
2. Configure um workflow para fazer o build (`npm install && npm run build`).
3. Use uma action de FTP (como `SamKirkland/FTP-Deploy-Action`) para enviar a pasta `dist/` para a sua `public_html` na Hostinger.

### Opção 2: Manual via ZIP (Mais simples)
1. No seu computador, execute `npm install` e depois `npm run build`.
2. Uma pasta `dist` será criada.
3. Compacte o conteúdo da pasta `dist` (não a pasta em si, mas os arquivos dentro dela).
4. Suba o arquivo ZIP para a pasta `public_html` pelo Gerenciador de Arquivos da Hostinger e extraia lá.

### Configurações Importantes já aplicadas:
- **Routing**: O arquivo `.htaccess` na pasta `public` garante que os links funcionem corretamente no servidor Apache da Hostinger.
- **Base Path**: O projeto está configurado para rodar na raiz do domínio (`base: '/'`).

---
Desenvolvido com ❤️
