/// <reference types="cypress" />

class SelectProfile {
  navigate(selectProfilePage) {
    cy.visit(selectProfilePage);
  }

  verifyElements(
    physicalPerson,
    legalPerson,
    foreignCompany,
    foreignOnBrazil,
    foreignOnOutside
  ) {
    cy.get(physicalPerson).should("contain.text", "Pessoa física");
    cy.get(legalPerson).should("contain.text", "Pessoa Jurídica");
    cy.get(foreignCompany).should(
      "contain.text",
      "Empresa sediada fora do Brasil"
    );
    cy.get(foreignOnBrazil).should(
      "contain.text",
      "Estrangeiro residente no Brasil"
    );
    cy.get(foreignOnOutside).should(
      "contain.text",
      "Estrangeiro residente no exterior"
    );
  }

  selectProfile(profileSelected) {
    cy.get(profileSelected).click();
  }

  continueOperation(proceedButton) {
    cy.get(proceedButton).click();
  }

  verifyPageUrl(expectedUrl) {
    cy.url().should("eq", expectedUrl);
  }
}

export default SelectProfile;
