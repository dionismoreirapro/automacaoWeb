/// <reference types="cypress" />

import HomeElements from "../elements/home_elements";
import HotelElements from "../elements/hotel_elements";

const hotelElements= new HotelElements
const homeElements= new HomeElements

const url = Cypress.config('baseUrl')

class HotelPage {

  acessarPagina(){
    cy.visit(url)
    cy.get(homeElements.btnHideCookie()).click()    
    cy.get(hotelElements.btnNomeHotel()).click()
  }


}export default HotelPage