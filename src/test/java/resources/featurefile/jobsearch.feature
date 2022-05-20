Feature: Job Search
  As a user I want to search job on cv library website.

  @smoke @regression
  Scenario Outline: User should successfully search job by filling all search options
    Given I am on homepage
    When  I enter JobTitle "<jobTitle>"
    And   I enterLocation "<location>"
    And   I select Distance "<distance>"
    And   I click on more search option link 'More Search Options'
    And   I enter min salary "<minSalary>"
    And   I enterMax Salary "<maxSalary>"
    And   I select salary type "<salaryType>"
    And   I select job type "<jobType>" String jobType
    And   I click on find jobs button
    Then  I should see the result in "<result>" text tsb.
    Examples:
      | jobTitle                  | location            | distance       | minSalary | maxSalary | salaryType | jobType   | result                                      |
      | Tester                    | Harrow              | up to 15 miles | 30000     | 50000     | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill |
      | Science Teacher           | Rugby, Warwickshire | up to 15 miles  | 30000     | 45000     | Per month  | Permanent | Permanent Science Teacher jobs in Rugby     |
      | Nurse                     | London              | up to 35 miles | 45000     | 70000     | Per month  | Any       | Nurse jobs in Glasgow                       |
      | Tester jobs in London     | Harrow Green        | up to 15 miles | 300       | 450       | Per day    | Contract  | Contract Tester jobs in London              |
      | Recruitment Administrator | Greater London      | up to 75 miles | 35000     | 70000     | Per month  | Permanent | Recruitment Administrator jobs in Norfolk   |
      | Internal Sales Executive  | Norfolk             | up to 35 miles | 20000     | 50000     | Per month  | Permanent | Internal Sales Executive jobs in Edmonton   |


