/// <reference types="cypress" />

import PageLogin from "../pages/login/";

beforeEach(() => {
  PageLogin.acessarLogin();
});

Given(/^que clico no botão Sign in para efetuar o login$/, () => {
  PageLogin.clicarBtnSignHome()
});

When(/^informo os dados de email "([^"]*)" e "([^"]*)"$/, (email, senha) => {
  PageLogin.preencherDadosLogin(email, senha)
});

When(/^clico no botão Sign in$/, () => {
  PageLogin.clicarBtnSignCadastro();
});

Then(/^devo ser redirecionado para a página de conta$/, () => {
    PageLogin.validarContaAcessada()
});

Then(/^devo ver a mensagem My account$/, () => {
    cy.contains('h1','My account').should('be.visible')
});
