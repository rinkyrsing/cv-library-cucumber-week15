package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitleField ;
    @FindBy(xpath = "//input[@id='location']")
    WebElement locationField ;
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;
    @FindBy (xpath = "//input[@id='salarymax']")
    WebElement salaryMax;
    @FindBy (xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @FindBy (xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;
    @FindBy (css ="#hp-search-btn")
    WebElement acceptPrivacy;
    WebElement ele = driver.findElement(By.xpath("//input[@id='hp-search-btn']"));
    @FindBy(xpath = "//iframe[@id='gdpr-consent-notice']")
    WebElement acceptIFrame;

    @FindBy(xpath = "//button[@id='save']")
    WebElement acceptCookiesButton;


    public void acceptCookies(){
       log.info("Click on accept cookies : " + acceptIFrame + acceptCookiesButton.toString());
        driver.switchTo().frame(acceptIFrame);
        clickOnElement(acceptCookiesButton);}

    public void clickOnFindJobsButton(){
       log.info("Click on find job button : " + findJobsBtn.getText());
        clickOnElement(findJobsBtn);
    }
    public void enterJobTitle(String jobTitle){
        log.info("Enter job title into the tab: " + jobTitleField.getText());
        sendTextToElement(jobTitleField,jobTitle);
    }
    public void enterLocation(String location){
       log.info("Enter your location into the tab : " + locationField.getText());
        sendTextToElement(locationField,location);
    }
    public void selectDistance(String distance){
        log.info("Select distance " + distance + " from distsance dropdown " + distanceDropDown.toString()+"<br>");
        selectByVisibleTextFromDropDown(distanceDropDown,distance);
    }
    public void clickOnMoreSearchOptionLink(){
        log.info("Click on more search option "  + moreSearchOptionsLink.toString()+"<br>");
        clickOnElement(moreSearchOptionsLink);
    }
    public void enterMinSalary(String minSalary){
        log.info("Enter min Salary " + minSalary + " to minimum salary field " + salaryMin.toString()+"<br>");
        sendTextToElement(salaryMin,minSalary);
    }
    public void enterMaxSalary(String maxSalary){
        log.info("Enter max Salary " + maxSalary + " to maximum salary field " + salaryMax.toString()+"<br>");
        sendTextToElement(salaryMax,maxSalary);
    }
    public void selectSalaryType(String salaryType){
        log.info("Select Salary Type " + salaryType + " from salary type dropdown " + salaryTypeDropDown.toString()+"<br>");
        selectByVisibleTextFromDropDown(salaryTypeDropDown,salaryType);
    }
    public void selectJobType(String jobType){
        log.info("Select Job Type " + jobType + " from job type dropdown " + jobTypeDropDown.toString()+"<br>");
        selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
    }



}
