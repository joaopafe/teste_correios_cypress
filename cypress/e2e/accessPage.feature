Feature: Access Page - Correios

  Scenario: Verificação de elementos da página
    Given que estou na página de acesso dos correios
    When verifico os elementos da página
    Then constato que todos os elementos estão presentes

  Scenario: Acesso válido ao menu de login
    Given que estou na página de acesso dos correios
    When clico no botão Entrar
    Then sou direcionado à página de login dos correios

  Scenario: Acesso válido ao menu de cadastro
    Given que estou na página de acesso dos correios
    When clico no botão Fazer cadastro
    Then sou direcionado à página de cadastro dos correios

  Scenario: Acesso válido ao menu de recuperação de senha
    Given que estou na página de acesso dos correios
    When clico no botão Esqueci minha senha
    Then sou direcionado à página de recuperação de senha dos correios