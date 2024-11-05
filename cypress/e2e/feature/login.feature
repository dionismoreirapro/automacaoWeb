Feature: Login 

  Scenario Outline: login com sucesso
    Given eu acesse a página home da aplicação
    When eu preencher o campo "<email>" válido e "<senha>" válida
    And clicar no botão Entrar
    Then eu devo validar se estou logado

    Examples:
    |cenario           | email             |  senha  |
    |Login com sucesso |user@phptravels.com| demouser|