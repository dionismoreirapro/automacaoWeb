/// <reference types="cypress" />

import LoginPage from "../pages/login_pages";
const loginPage = new LoginPage


Given(/^eu acesse a página home da aplicação$/, () => {
	loginPage.acessarHomePage()
});

When(/^eu preencher o campo "([^"]*)" válido e "([^"]*)" válida$/, (email,senha) => {
	
	loginPage.acessarLoginPage()
	loginPage.informarDadosDoLogin(email,senha)
});

When(/^clicar no botão Entrar$/, () => {
	loginPage.submitLogin()
});

Then(/^eu devo validar se estou logado$/, () => {
	cy.contains('Demo User')
});
