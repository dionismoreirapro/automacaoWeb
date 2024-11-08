Feature: Login 

  Scenario Outline: Realizar login "<cenario>"
    Given que clico no botão Sign in para efetuar o login
    When informo os dados de email "<email>" e "<senha>"
    And clico no botão Sign in
    Then devo ser redirecionado para a página de conta
    And devo ver a mensagem My account

  Examples:    
    |cenario           | email                      |  senha  |
    |com sucesso       |dionis.rodrigo2@gmail.com   | 193264  |

