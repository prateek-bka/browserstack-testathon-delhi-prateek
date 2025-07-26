import { signinPage } from "../../pages/signin/signinPage.cy";
const signinPageObj = new signinPage();
import testData from "../../fixtures/testData.json";

describe("Sign In Flow", () => {
  const loginTestData = testData.signinUserData;

  it("TC-102 Sign in using correct email and password", () => {
    signinPageObj.visitPage();
    signinPageObj.clickedSignInButton();
    signinPageObj.checkUrl().should("include", "/");
    signinPageObj.typeUsername(loginTestData.valid.username);
    signinPageObj.typePassword(loginTestData.valid.password);
    signinPageObj.clickedLoginIn();
    signinPageObj.checkUrl().should("include", "/?signin=true");
  });

  it("TC-103 Attempt sign-in with locked user credentials", () => {
    signinPageObj.visitPage();
    signinPageObj.clickedSignInButton();
    signinPageObj.checkUrl().should("include", "/");
    signinPageObj.typeUsername(loginTestData.locked.username);
    signinPageObj.typePassword(loginTestData.locked.password);
    signinPageObj.clickedLoginIn();
    signinPageObj
      .checkErrorMessage()
      .should("contain", "Your account has been locked.");
  });
});
