Feature: Reserva de hotel

  Scenario: Reservar um hotel 
    Given que eu estou no site PHP Travels
    When eu escolho um hotel disponível
    And informo os dados pessoais
    And informo os dados dos hospede
    And informo os dados das crianças
    And Escolho uma forma de pagamento
    And aceito os termos e condições
    And clico no botão "Booking Confirm"
    Then devo ser redirecionado para a pagina de chechout
    And devo validar os nomes dos viajantes
    And devo clicar no botão processo
    And validar o pagamento