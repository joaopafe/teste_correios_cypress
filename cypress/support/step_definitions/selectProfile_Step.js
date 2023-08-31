/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SelectProfile from "../pageObjects/selectProfilePO";
import { selectProfileConfig } from "../../config/selectProfileConfig";

const selectProfile = new SelectProfile();

Given("que estou na página de seleção de perfil dos correios", () => {
  selectProfile.navigate(
    "https://meucorreios.correios.com.br/app/fazer-cadastro.php"
  );
});

When("verifico os elementos da página de seleção de perfil", () => {});

Then("constato que os elementos estão presentes", () => {
  const physicalPerson = selectProfileConfig.physicalPersonElement;
  const legalPerson = selectProfileConfig.legalPersonElement;
  const foreignCompany = selectProfileConfig.foreignCompanyElement;
  const foreignOnBrazil = selectProfileConfig.foreignOnBrazilElement;
  const foreignOnOutside = selectProfileConfig.foreignOnOutsideElement;

  selectProfile.verifyElements(
    physicalPerson,
    legalPerson,
    foreignCompany,
    foreignOnBrazil,
    foreignOnOutside
  );
});

When("seleciono o perfil como pessoa física", () => {
  const physicalPersonButton = selectProfileConfig.physicalPersonElement;

  selectProfile.selectProfile(physicalPersonButton);
});

When("prossigo a operação", () => {
  const proceedButton = selectProfileConfig.continueOperationElement;

  selectProfile.continueOperation(proceedButton);
});

Then("sou direcionado à página de cadastro de pessoa física", () => {
  const physicalPersonUrl = selectProfileConfig.physicalPersonUrl;

  selectProfile.verifyPageUrl(physicalPersonUrl);
});

When("seleciono o perfil como pessoa jurídica", () => {
  const legalPersonButton = selectProfileConfig.legalPersonElement;

  selectProfile.selectProfile(legalPersonButton);
});

Then("sou direcionado à página de cadastro de pessoa jurídica", () => {
  const legalPersonUrl = selectProfileConfig.legalPersonUrl;

  selectProfile.verifyPageUrl(legalPersonUrl);
});

When("seleciono o perfil como empresa sediada fora do Brasil", () => {
  const foreignCompanyButton = selectProfileConfig.foreignCompanyElement;

  selectProfile.selectProfile(foreignCompanyButton);
});

Then(
  "sou direcionado à página de cadastro de empresa sediada fora do Brasil",
  () => {
    const foreignCompanyUrl = selectProfileConfig.foreignCompanyUrl;

    selectProfile.verifyPageUrl(foreignCompanyUrl);
  }
);

When("seleciono o perfil como estrangeiro residente no Brasil", () => {
  const foreignOnBrazilButton = selectProfileConfig.foreignOnBrazilElement;

  selectProfile.selectProfile(foreignOnBrazilButton);
});

Then(
  "sou direcionado à página de cadastro de entrangeiro residente no Brasil",
  () => {
    const foreignOnBrazilUrl = selectProfileConfig.foreignOnBrazilUrl;

    selectProfile.verifyPageUrl(foreignOnBrazilUrl);
  }
);

When("seleciono o perfil como estrangeiro residente no exterior", () => {
  const foreignOnOutsideButton = selectProfileConfig.foreignOnOutsideElement;

  selectProfile.selectProfile(foreignOnOutsideButton);
});

Then(
  "sou direcionado à página de cadastro de estrangeiro residente no exterior",
  () => {
    const foreignOnOutsideUrl = selectProfileConfig.foreignOnOutsideUrl;

    selectProfile.verifyPageUrl(foreignOnOutsideUrl);
  }
);
