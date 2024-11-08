/// <reference types="cypress" />

const url = Cypress.config('baseUrl')

 const elementos = require('./elements').ELEMENTS
class PageLogin {
    
    acessarLogin(){
        cy.visit(url)
    }

    clicarBtnSignHome(){
        cy.get(elementos.btnSign).click()
    }

    preencherDadosLogin(email, senha){
        cy.get(elementos.email).type(email)
        cy.get(elementos.login).type(senha)
    }
    
    clicarBtnSignCadastro(){
        cy.get(elementos.btnLogin).click()
    }

    validarContaAcessada(){
        cy.contains(elementos.account,'Sign out').should('be.visible')
    }

    
} export default new PageLogin()