class HomePage {
  navigate(homePageUrl) {
    cy.visit(homePageUrl);
  }

  clickButtonAccess(buttonAccess) {
    cy.get(buttonAccess).click();
  }

  verificationPageAccess(accessPageUrl) {
    cy.url(accessPageUrl).should("eq", accessPageUrl);
  }
}

export default HomePage;
