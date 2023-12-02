# Sprint 8 project

Project 8

For my project, I was tasked to complete 1 automated test with 8 tasks working with Urban Routes:
    1. Set the address
    2. Select the "Supportive Plan"
    3. Fill in the phone number
    4. Add a credit card
    5. Write a message to the driver
    6. Order a blanket and handkerchiefs
    7. Order 2 orders of ice cream
    8. Wait for the car search modal to appear
    
Clone the repo to my computer:
    I will have to clone the repository name, "hm08-qa-us" to my computer.
        1. cd ~ in the terminal to go to the home directory
        2. mkdir projects to create a folder name "projects"
        3. cd projects to change directories into the "projects" folder

To clone the repository, I will have to copy my code from GitHub using ssh "git@github.com:eelagdon1" and enter command "git clone git@github.com:eelagdon1/hm08-qa-us.git" in the terminal.

After the repository has been clone, I go to the terminal and enter the command, "npm install."
The "npm install" will download files.
When the install is finish, enter command "npx jest".  It will run all the tests in the folder.

On my computer, I must find the folder "hm08-qa-us" to access the repository folder.
    1. Open a folder
    2. Select: "Locations"
    3. Select: "Users"
    4. Select: // your name - emmanuelelagdon
    5. Select: "projects" folder
    6. Select: "hm08-qa-us" folder

Once I'm in the "hm08-qa-us" folder, I need to configure the "wdio.config.js" file.
    1. Right click on the "wdio.config.js"
    2. Select: Open with
    3. Select: Visual Studio Code

This will open Visual Studio Code and the template for the "wdio.config.js" file will appear.

Go back to the Project 8 task page and find the "Start Server" button.  It may take a while, but the server will provide an API URL.
When the API URL appears, copy and paste the new  baseURL to the "wdio.config.js" template.

The "wdio.config.js" template:
baseURL: "https://e94ffcb5-0d8f-47ef-915d-47e88a409621.serverhub.tripleten-services.com"

Make sure to save to the "wdio.config.js" file.  This is necessary, so I do not need to copy and paste the API URL every time I need to test my requests.

For this project, I will be using DevTools, Terminal, and Visual Code Studios to help me complete my task.

The instruction to how to run the project:
    1. launch the Urban Grocers server to get a URL
    2. open folder hm08-qa-us
    3. open the wdio.config.js file
    4. replace the API URL
    5. "save" the wdio.config.js
    6. Write a syntax in JavaScript to set an address
    7. Write a syntax in JavaScript to click on the "Supportive" plan
    8. Write a syntax in JavaScript to fill in the phone number
    9. Write a syntax in JavaScript to add a credit card
    10. Write a syntax in JavaScript to write a message to the driver
    11. Write a syntax in JavaScript to order a blanet and handkerchief
    12. Write a syntax in JavaScript to order 2 orders of ice cream
    13. Write a syntax in JavaScript to wait for the car search modal to appear
    14. To run the test, write command "npm run wdio" in the terminal in the "hm08-qa-us" directory

Please advise, my WebdriverIO does not work with Chrome.