import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/homePagePO";
import { homePageConfig } from "../../config/homePageConfig";

const homePage = new HomePage();

Given("que estou na página inicial dos correios", () => {
  homePage.navigate(homePageConfig.urlHomePage);
});

When("clico no botao de acesso", () => {
  homePage.clickButtonAccess(homePageConfig.buttonAccess);
});

Then("sou direcionado à página de acesso dos correios", () => {
  homePage.verificationPageAccess(homePageConfig.urlAccess);
});
