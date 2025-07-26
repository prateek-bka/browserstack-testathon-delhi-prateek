export class signinPage {
  webLocators = {
    singinBtn: "a[id='Sign In']",
    username: "#username input[type='text']",
    password: "#password input[id^='react-select'][type='text']",
    loginButton: "#login-btn",
    errorMessage: ".api-error",
  };

  visitPage(screenUrl = "/") {
    cy.visit(screenUrl);
  }

  clickedSignInButton() {
    return cy.get(this.webLocators.singinBtn).click();
  }

  checkUrl() {
    return cy.url();
  }

  checkErrorMessage() {
    return cy.get(this.webLocators.errorMessage);
  }

  typeUsername(value) {
    return cy
      .get(this.webLocators.username)
      .type(`${value}{enter}`, { delay: 100, force: true });
  }

  typePassword(value) {
    return cy
      .get(this.webLocators.password)
      .type(`${value}{enter}`, { delay: 100, force: true });
  }

  clickedLoginIn() {
    return cy.get(this.webLocators.loginButton).click({ force: true });
  }
}
