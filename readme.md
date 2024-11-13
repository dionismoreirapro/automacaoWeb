# Projeto de automação Web
Esse é um projeto de automação de testes end-to-end com Cypress e Cucumber para o e-commerce de testes http://automationpractice.com. Escrito em JavaScript e Gherkin (para definição de cenários no padrão BDD), arquitetura foi baseada no design pattern Page Objects Model.

## Pré-requisitos

Para executar esse projeto é necessário:

- git
- Node.js
- NPM

## Clonando o Repositório

Clone o repositório em sua máquina local usando o comando abaixo:

```bash
    git clone https://github.com/dionismoreirapro/automacaoWeb.git
```
Depois de clonar, acesse o diretório do projeto:

```bash
    cd automacaoWeb
```
## Instalando Dependências
Após clonar o repositório, instale as dependências do projeto (incluindo o Cypress) executando o comando:
```bash
   npm install
```
## Como Executar os Testes  
Com todas as dependências instaladas, você pode executar os testes de duas formas:

1. Executar os Testes em Modo Interativo
Para abrir o Cypress em modo interativo e visualizar a execução dos testes em tempo real, utilize o comando:
```bash
   npx cypress open
```
Isso abrirá o Cypress Test Runner, onde você poderá selecionar e executar os testes manualmente.

2. Executar os Testes em Modo Headless
Para executar os testes automaticamente no modo headless (sem interface gráfica), use o comando:
```bash
   npx cypress run
```

## Integração contínua

Foi implementada a integração contínua com GitHub Actions no projeto. O arquivo de configuração do CI é o `.github/workflows/ci.yml`. Em todo push ou pull_request no branch `main` o pipeline é executado.


## Relatório dos testes
Gerando relatório
```bash
   npx cypress run --reporter mochawesome
```
## Relatórios de Teste
![Relatorio de teste ](https://github.com/dionismoreirapro/automacaoWeb/blob/main/report.png)
