Feature: Select Profile - Correios

  Scenario: Verificação de elementos - Seleção de perfil
    Given que estou na página de seleção de perfil dos correios
    When verifico os elementos da página de seleção de perfil
    Then constato que os elementos estão presentes

  Scenario: Seleção de perfil como pessoa física
    Given que estou na página de seleção de perfil dos correios
    When seleciono o perfil como pessoa física
    And prossigo a operação
    Then sou direcionado à página de cadastro de pessoa física

  Scenario: Seleção de perfil como pessoa jurídica
    Given que estou na página de seleção de perfil dos correios
    When seleciono o perfil como pessoa jurídica
    And prossigo a operação
    Then sou direcionado à página de cadastro de pessoa jurídica

  Scenario: Seleção de perfil como empresa sediada fora do Brasil
    Given que estou na página de seleção de perfil dos correios
    When seleciono o perfil como empresa sediada fora do Brasil
    And prossigo a operação
    Then sou direcionado à página de cadastro de empresa sediada fora do Brasil

  Scenario: Seleção de perfil como estrangeiro residente no Brasil
    Given que estou na página de seleção de perfil dos correios
    When seleciono o perfil como estrangeiro residente no Brasil
    And prossigo a operação
    Then sou direcionado à página de cadastro de entrangeiro residente no Brasil

  Scenario: Seleção de perfil como estrangeiro residente no exterior
    Given que estou na página de seleção de perfil dos correios
    When seleciono o perfil como estrangeiro residente no exterior
    And prossigo a operação
    Then sou direcionado à página de cadastro de estrangeiro residente no exterior