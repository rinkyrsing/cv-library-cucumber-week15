$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search",
  "description": "As a user I want to search job on cv library website.",
  "id": "job-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should successfully search job by filling all search options",
  "description": "",
  "id": "job-search;user-should-successfully-search-job-by-filling-all-search-options",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter JobTitle \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enterLocation \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link \u0027More Search Options\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter min salary \"\u003cminSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enterMax Salary \"\u003cmaxSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"\u003cjobType\u003e\" String jobType",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the result in \"\u003cresult\u003e\" text tsb.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "job-search;user-should-successfully-search-job-by-filling-all-search-options;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "minSalary",
        "maxSalary",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 18,
      "id": "job-search;user-should-successfully-search-job-by-filling-all-search-options;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 15 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 19,
      "id": "job-search;user-should-successfully-search-job-by-filling-all-search-options;;2"
    },
    {
      "cells": [
        "Science Teacher",
        "Rugby, Warwickshire",
        "up to 5 miles",
        "30000",
        "45000",
        "Per month",
        "Permanent",
        "Permanent Science Teacher jobs in Rugby"
      ],
      "line": 20,
      "id": "job-search;user-should-successfully-search-job-by-filling-all-search-options;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25580912100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should successfully search job by filling all search options",
  "description": "",
  "id": "job-search;user-should-successfully-search-job-by-filling-all-search-options;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter JobTitle \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enterLocation \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link \u0027More Search Options\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter min salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enterMax Salary \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\" String jobType",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the result in \"Permanent Tester jobs in Harrow on the Hill\" text tsb.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 120372999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 151252600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 468542899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 104172501,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLinkMoreSearchOptions()"
});
formatter.result({
  "duration": 282864700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 333115700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 163626600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 108253400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobTypeStringJobType(String)"
});
formatter.result({
  "duration": 117396000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 135075799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 28
    }
  ],
  "location": "JobSearchSteps.iShouldSeeTheResultInTextTsb(String)"
});
formatter.result({
  "duration": 8630808200,
  "status": "passed"
});
formatter.after({
  "duration": 1468773601,
  "status": "passed"
});
formatter.before({
  "duration": 24895988600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should successfully search job by filling all search options",
  "description": "",
  "id": "job-search;user-should-successfully-search-job-by-filling-all-search-options;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter JobTitle \"Science Teacher\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enterLocation \"Rugby, Warwickshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link \u0027More Search Options\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter min salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enterMax Salary \"45000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\" String jobType",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the result in \"Permanent Science Teacher jobs in Rugby\" text tsb.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Science Teacher",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 354888001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rugby, Warwickshire",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 349905900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 303607900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLinkMoreSearchOptions()"
});
formatter.result({
  "duration": 240617301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 245819799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 119377500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 151772901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobTypeStringJobType(String)"
});
formatter.result({
  "duration": 137446399,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 201057901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Science Teacher jobs in Rugby",
      "offset": 28
    }
  ],
  "location": "JobSearchSteps.iShouldSeeTheResultInTextTsb(String)"
});
formatter.result({
  "duration": 7923639200,
  "status": "passed"
});
formatter.after({
  "duration": 1101056999,
  "status": "passed"
});
});