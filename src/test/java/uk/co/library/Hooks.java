package uk.co.library;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.library.pages.HomePage;
import uk.co.library.propertiyreader.PropertyReader;
import uk.co.library.utility.Utility;

import java.io.IOException;


/**
 * Created by Jay Vaghani
 */
public class Hooks extends Utility {

    @Before
    public void setup() {
      selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        new HomePage().acceptCookies();
    }
    @After
        public void tearDown(Scenario scenario) {
            if (scenario.isFailed()) {
                String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
                try {
                    Reporter.addScreenCaptureFromPath(screenShotPath);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            closeBrowser();
    }
}
