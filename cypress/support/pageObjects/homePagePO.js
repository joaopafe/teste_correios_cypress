/// <reference types="cypress" />

class HomePage {
  navigate(homePageUrl) {
    cy.visit(homePageUrl);
  }

  clickButtonAccess(buttonAccess) {
    cy.get(buttonAccess).click();
  }

  verificationAccessPage(accessPageUrl) {
    cy.url().should("eq", accessPageUrl);
  }
}

export default HomePage;
