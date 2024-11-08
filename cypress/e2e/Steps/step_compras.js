/// <reference types="cypress" />

import PageLogin from "../pages/login/";
import PageCompras from "../pages/compras";

const email = "dionis.rodrigo2@gmail.com";
const senha = "193264";
beforeEach(() => {
  PageLogin.acessarLogin();
});

Given(/^que clico no menu Vestidos$/, () => {
  PageCompras.clicarMenuVestido();
});

Then(/^escolho o modelo de vestido que desejo$/, () => {
  PageCompras.escolharModeloVestido();
});

When(/^escolho o tamanho M$/, () => {
  PageCompras.selecionandoTamanhoVestido();
});

And(/^escolho a cor Branco$/, () => {
  PageCompras.selecionarCorVestido();
});

Then(/^clico no botão Add to Cart$/, () => {
  PageCompras.clicarBotaoAddCar();
});

Then(/^valido as informações no checkout$/, () => {
  cy.contains("h2", "Product successfully added to your shopping cart").should(
    "be.visible"
  );
});

Then(/^clico em Proceed to Checkout$/, () => {
  PageCompras.clicarBotaoProcessarChecout();
});

Then(/^valido se estou na aba Summary$/, () => {
  cy.contains("h1", "Shopping-cart summary").should("be.visible");
});
