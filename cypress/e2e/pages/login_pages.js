
/// <reference types="cypress" />

import HomeElements from "../elements/home_elements";
import LoginElements from "../elements/login_elements";

// import LoginElements from "../elements/login_elements";

const homeElements = new HomeElements;
const loginElements= new LoginElements;

const url = Cypress.config('baseUrl')

class LoginPage {
  acessarHomePage() {
    cy.visit(url);
    cy.get(homeElements.btnHideCookie()).click()
  }

  acessarLoginPage() {
    cy.contains(homeElements.selectAccount()).click()
    cy.contains(homeElements.btnLogin()).click()
  }
  
  informarDadosDoLogin(email, senha){
    cy.wait(300)
    cy.get(loginElements.inputEmail()).type(email)
    cy.get(loginElements.inputPassword()).type(senha)
  }      

  submitLogin(){
    cy.get(loginElements.submitLogin()).click()
  }
 
} export default LoginPage
