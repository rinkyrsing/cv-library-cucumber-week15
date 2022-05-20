package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

public class ResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());
    public ResultPage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(tagName = "h1")
    WebElement resultText;



    public String getText() throws InterruptedException {
        Thread.sleep(2000);
       // waitUntilVisibilityOfElementLocated(By.tagName("h1"),20);
        log.info("Get text of find job result"  + resultText.toString()+"<br>");
         return     getTextFromElement(resultText);
    }
}
