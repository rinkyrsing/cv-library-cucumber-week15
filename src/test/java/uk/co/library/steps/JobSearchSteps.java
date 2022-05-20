package uk.co.library.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
       // new HomePage().acceptCookies();
    }

    @When("^I enter JobTitle \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle) {

        new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I enterLocation \"([^\"]*)\"$")
    public void iEnterLocation(String location ) {
        new HomePage().enterLocation(location);
    }

    @And("^I select Distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance) {
        new HomePage().selectDistance(distance);
    }

    @And("^I click on more search option link 'More Search Options'$")
    public void iClickOnMoreSearchOptionLinkMoreSearchOptions() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter min salary \"([^\"]*)\"$")
    public void iEnterMinSalary(String minSalary) {
        new HomePage().enterMinSalary(minSalary);
    }

    @And("^I enterMax Salary \"([^\"]*)\"$")
    public void iEnterMaxSalary(String maxSalary) {
        new HomePage().enterMaxSalary(maxSalary);
    }

    @And("^I select salary type \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType) {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I select job type \"([^\"]*)\" String jobType$")
    public void iSelectJobTypeStringJobType(String jobType) {
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on find jobs button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I should see the result in \"([^\"]*)\" text tsb\\.$")
    public void iShouldSeeTheResultInTextTsb(String result) throws InterruptedException {
        String actual =  new ResultPage().getText();
        String expected = result;
        Assert.assertEquals(actual,expected);
    }
}
