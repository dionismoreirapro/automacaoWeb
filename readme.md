# Projeto de automação Web
Esse é um projeto de automação de testes end-to-end com Cypress e Cucumber para o e-commerce de testes http://automationpractice.com. Escrito em JavaScript e Gherkin (para definição de cenários no padrão BDD), arquitetura foi baseada no design pattern Page Objects Model.

## Pré-requisitos

Para executar esse projeto é necessário:

- git
- Node.js
- NPM

## Execução do projeto

`npm i ` - para instalar as dependências

`npx cypress run` - executa o Cypress em modo headless

`npm run cy:open`- executa o modo interativo do Cypress


## Integração contínua

Foi implementada a integração contínua com GitHub Actions no projeto. O arquivo de configuração do CI é o `.github/workflows/ci.yml`. Em todo push ou pull_request no branch `main` o pipeline é executado.


## Relatórios de Teste
![Relatorio de teste ](https://github.com/dionismoreirapro/automacaoWeb/blob/main/report.png)
