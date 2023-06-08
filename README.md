Scenario Vehicle Management System :<br/>
The scenario is a vehicle management system is web application which is built on reactjs, That allow users to create , diplay , update , delete scenarios and vehicles. The application provides a button to initiate vehicle movement based on the selected scenario and vehicle parameters. Once activated, vehicles will move according to their respective speeds and directions. Users can observe the real-time movement of vehicles on the screen.<br/>
FEATURES : <br/>
=> Create, display, update, and delete scenarios.
=> Create, display, update, and delete vehicles.
=> Assign multiple vehicles to a scenario.
=> Vehicles can be moved based on the scenario and vehicle parameters.
=> Real-time updates of vehicle positions.<br/>
TECHNOLOGIES USED<br/>
=> React.js: A JavaScript library for building user interfaces.
=> Json-server: A simple JSON-based database for development and prototyping.<br/>
PREREQUISITES<br/>
=> Node.js: Make sure you have Node.js installed on your pc.<br/>
GETTING STARTED<br/>
1. Clone the repository git clone {repository url}
2. Navigate to folder cd project_Name
3. Install the dependencies npm install
4. start the react application npm start<br/>

FOLDER STRUCTURE

├── public
│   ├── index.html
│   └── ...
├── src
│   ├── api
│   │   └── apiCall.js
│   ├── atoms
│   │   ├── buttons
│   │   │   ├── PrimaryButton.js
│   │   │   ├── SecondaryButton.js
│   │   │   └── ...
│   │   ├── inputs
│   │   │   ├── TextInput.js
│   │   │   ├── NumberInput.js
│   │   │   └── ...
│   │   ├── icons
│   │   │   ├── ArrowIcon.js
│   │   │   ├── StarIcon.js
│   │   │   └── ...
│   │   └── ...
│   ├── components
│   │   ├── sidebar
│   │   │   ├── Sidebar.js
│   │   │   └── ...
│   │   ├── drivingVehicle
│   │   │   ├── DrivingVehicle.js
│   │   │   └── ...
│   │   ├── home
│   │   │   ├── Home.js
│   │   │   └── ...
│   │   └── ...
│   ├── helper
│   │   └── utility.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...

Src/Api : all the api request are maintained here
Src/Atoms : The atoms folder has subfolders representing different types of atomic components, such as buttons, inputs etc.
Src/Components : The Components folder contains various reusable components.
Src/Helper : The Helper folder has helper functions<br/>

USAGE:

Usage
1.Create a Scenario:
Click on the "Create Scenario" button.
Fill in the scenario name and time.
Click "Save" to create the scenario.

2.View Scenarios:
Scenarios are listed on the main page.
Click on a scenario to view its details.

3.Update a Scenario:
Click on the "Edit" button of the desired scenario.
Modify the scenario details.
Click "Save" to update the scenario.

4.Delete a Scenario:
Click on the "Delete" button of the desired scenario.
Confirm the deletion.

5.Create a Vehicle:
Inside a scenario, click on the "Add Vehicle" button.
Fill in the vehicle name, initial position (X and Y), speed, and direction.
Click "Save" to create the vehicle.

6.View Vehicles:
Inside a scenario, vehicles associated with that scenario are listed.
Click on a vehicle to view its details.

7.Update a Vehicle:
Inside a scenario, click on the "Edit" button of the desired vehicle.
Modify the vehicle details.
Click "Save" to update the vehicle.

8.Delete a Vehicle:
Inside a scenario, click on the "Delete" button of the desired vehicle.
Confirm the deletion.

9.Move Vehicles:
Inside a scenario, click on the "Move Vehicles" button.
Vehicles will move based on their assigned scenario and parameters.
<br/>

LINKS :