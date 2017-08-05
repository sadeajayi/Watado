WATADO
To currently run application:
Open your terminal and navigate to where you want the app to be downloaded to.

Clone the app to the folder like so: git clone https://bitbucket.org/sadeajayi/watado

Install the node dependencies (express, body-parser, mongoose, express-session, connect-mongo). By running command npm install <dependency-name>

After installing all required dependencies, start mongodb in new terminal by running command mongod. This starts the mongo database service.

On a new terminal, launch the app with command npm start or node index.js

The app should start without errors - if the database connection was successful. In your browser, open the app by entering URL: localhost:3000