/// <reference types="cypress" />

import HotelPage from "../pages/hotel_pages";

const hotelPage = new HotelPage


Given(/^que eu estou no site PHP Travels$/, () => {
	hotelPage.acessarPagina()
});

When(/^eu escolho um hotel disponível$/, () => {
	return true;
});
