SpendWise - Personal Budget & Expense Tracker
Project Description

SpendWise is a responsive personal budget and expense tracker. Users enter a monthly budget, add expenses with a name, amount, category and date, and see their totals, remaining balance and per-category spending update instantly. Expenses can be removed with a Delete button, and the page includes a "How to Use" guide and an embedded budgeting-tips video.

This project was built over several weeks and then published to the internet as part of the Web Hosting and Deployment module.

Technologies Used
HTML5 - page structure
CSS3 - styling and responsive layout
JavaScript (ES6) - budget calculations and expense management
Google Fonts - Inter and Poppins typography
Git & GitHub - version control and source of truth
Netlify - cloud hosting with continuous deployment
GitHub Repository Information
Repository: https://github.com/abdikafimohamud/plp-budget-tracker
Visibility: Public
Branch: main

Project structure:

plp-budget-tracker/
├── index.html
├── style.css
├── script.js
├── screenshots/
└── README.md
Live Website

Live Netlify URL: https://abdikafi-spendwise.netlify.app

Deployment Process Summary
Deployment readiness check - Confirmed index.html is in the project root, style.css and script.js are linked with relative paths, and all file names match exactly (lowercase) to avoid case-sensitivity problems on Linux servers.
GitHub repository - Created a public repository and pushed the SpendWise project using Git (git add, git commit, git push).
Netlify deployment - Signed in to Netlify with GitHub, imported the repository, used the main branch, and left the build command and publish directory blank because SpendWise is a static site.
Custom site name - Changed the auto-generated Netlify subdomain (splendorous-kitten-70095e) to abdikafi-spendwise.
Continuous deployment test - Updated the footer text in index.html to "Deployed with GitHub & Netlify", committed and pushed the change, watched the new deploy run in the Netlify Deploys tab, and confirmed the change appeared on the live site automatically.
Final testing - Opened the live site and verified that styles, scripts, the expense form, budget calculations, navigation links and the embedded YouTube video all load and work correctly.
Challenges Encountered During Deployment
Random site name: Netlify generated a hard-to-remember URL, so I had to find the site-name setting and rename it to something meaningful.
File path and naming rules: I had to double-check that every file path was relative and that file names matched exactly, because hosting servers are case-sensitive.
Verifying automatic deployment: I had to confirm that pushing to GitHub really triggered a new Netlify build, by watching the Deploys page and checking the live site afterwards.
Lessons Learned
Deployment is a workflow, not a single step: build locally, push to GitHub, and let Netlify publish.
GitHub acts as the master copy of the project, and Netlify keeps the live site in sync with it.
Relative paths and consistent, case-correct file names prevent most "works on my computer" problems.
Continuous deployment makes updates fast, but mistakes are published just as quickly, so changes should be tested locally first.
Deploy logs and live-site testing are the best tools for finding problems after publishing.
Author

Abdikafi Mohamud