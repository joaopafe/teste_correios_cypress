/// <reference types="cypress" />

class AccessPage {
  navigate(accessPage) {
    cy.visit(accessPage);
  }

  verifyElements(signPageElement, registerPageElement, recoveryPageElement) {
    cy.get(signPageElement).should("have.text", "Entrar");
    cy.get(registerPageElement).should("have.text", "Fazer cadastro");
    cy.get(recoveryPageElement).should("have.text", "Esqueci minha senha");
  }

  accessSignPage(signAccessButton) {
    cy.get(signAccessButton).click();
  }

  accessRegisterPage(registerAccessButton) {
    cy.get(registerAccessButton).click();
  }

  accessRecoveryPage(recoveryAccessButton) {
    cy.get(recoveryAccessButton).click();
  }

  verifySignPage(signPageUrl) {
    cy.url().should("eq", signPageUrl);
  }

  verifyRegisterPage(registerPageUrl) {
    cy.url().should("eq", registerPageUrl);
  }

  verifyRecoveryPage(recoveryPageUrl) {
    cy.url().should("eq", recoveryPageUrl);
  }
}

export default AccessPage;
