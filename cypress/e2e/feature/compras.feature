Feature: Comprar um vestido online

  Scenario: Realizar a compra de um vestido
    Given que clico no menu Vestidos
    And escolho o modelo de vestido que desejo
    And escolho o tamanho M
    And escolho a cor Branco
    Then clico no botão Add to Cart
    And valido as informações no checkout
    And clico em Proceed to Checkout
    And valido se estou na aba Summary