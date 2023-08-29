/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AccessPage from "../pageObjects/accessPagePO";
import { accessPageConfig } from "../../config/accessPageConfig";

const accesPage = new AccessPage();

Given("que estou na página de acesso dos correios", () => {
  accesPage.navigate(accessPageConfig.urlAccessPage);
});

When("verifico os elementos da página", () => {});

Then("constato que todos os elementos estão presentes", () => {
  const signPageElement = accessPageConfig.signButton;
  const registerPageElement = accessPageConfig.registerButton;
  const recoveryPageElement = accessPageConfig.recoveryButton;

  accesPage.verifyElements(
    signPageElement,
    registerPageElement,
    recoveryPageElement
  );
});

When("clico no botão Entrar", () => {
  const signButton = accessPageConfig.signButton;

  accesPage.accessSignPage(signButton);
});

Then("sou direcionado à página de login dos correios", () => {
  const signPageUrl = accessPageConfig.signPageUrl;

  accesPage.verifySignPage(signPageUrl);
});

When("clico no botão Fazer cadastro", () => {
  const registerButton = accessPageConfig.registerButton;

  accesPage.accessRegisterPage(registerButton);
});

Then("sou direcionado à página de cadastro dos correios", () => {
  const registerPageUrl = accessPageConfig.registerPageUrl;

  accesPage.verifyRegisterPage(registerPageUrl);
});

When("clico no botão Esqueci minha senha", () => {
  const recoveryButton = accessPageConfig.recoveryButton;

  accesPage.accessRecoveryPage(recoveryButton);
});

Then("sou direcionado à página de recuperação de senha dos correios", () => {
  const recoveryPageUrl = accessPageConfig.recoveryPageUrl;

  accesPage.verifyRecoveryPage(recoveryPageUrl);
});
