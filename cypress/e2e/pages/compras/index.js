/// <reference types="cypress" />

const url = Cypress.config("baseUrl");

const elementos = require("./elements").ELEMENTS;
class PageCompras {
  clicarMenuVestido() {
    cy.get(elementos.menuVestido).click({ multiple: true });
  }

  escolharModeloVestido() {
    cy.get(elementos.modeloVestido).click();
  }

  selecionandoTamanhoVestido() {
    cy.get(elementos.tamanhoVestido).select("M").should("have.value", "2");
  }

  selecionarCorVestido() {
    cy.get(elementos.corVestido, { timeout: 10000 }) 
      .should("exist") 
      .and("have.class", "color_pick") 
      .and("have.css", "background-color", "rgb(255, 255, 255)")

  }

  clicarBotaoAddCar() {
    cy.get(elementos.btnAddCar, { timeout: 10000 }).click();
  }

  clicarBotaoProcessarChecout(){
    cy.get(elementos.btnProceed).click();
  
  }
  clicarBtnContinuarComprando(){
    cy.get(elementos.btnContinuarComprando).click();
  }

}
export default new PageCompras();
