# Validador de CPF em JavaScript

Este é um projeto simples em JavaScript que valida números de CPF e exibe uma mensagem indicando se o CPF é válido ou inválido. Ele também fornece feedback visual ao usuário.

## Funcionalidades

- Valida números de CPF no formato "xxx.xxx.xxx-xx".
- Fornece feedback visual imediato ao usuário.
- Limpa o campo de entrada após a validação.

## Uso

1. Abra o arquivo HTML em um navegador da web.
2. Insira um número de CPF no campo de entrada.
3. Clique no botão "Validar".
4. O programa exibirá uma mensagem indicando se o CPF é válido ou inválido.
5. O campo de entrada será limpo após a validação.

# Contribuições

Contribuições são bem-vindas!

# Autor

- Este projeto foi desenvolvido por [Innovate Codes]
- Para entrar em contato, envie um e-mail para [contato@innovatecodes.com]

# Exemplo adicional de regex para cpf

```javascript
// Remove todos os caracteres não numéricos do cpf
cpf = cpf.replace(/\D/g, "");

// Adiciona os pontos e traço ao cpf
cpf = cpf.replace(/^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/, "$1.$2.$3-$4");
```

# Npm comandos essenciais

1. Instala o typescript em modo de desenvolvedor (npm install typescript -D)
2. Cria um arquivo de configuração package.json (npm init -y)
3. Cria um arquivo de configuração tsconfig.json (tsc --init)
4. Script de execução automático ("scripts": {"start": "npx tsc && node src/index.js})
5. Script de execução automático ("scripts": {"start": "npx tsc -w})

