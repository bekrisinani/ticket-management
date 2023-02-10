In the project directory, you can run:

### `npm start`

To run the project without issue, you need to have `node >= 14`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Tech Stack used
ReactTS <br/>
Tailwind <br/>
MaterialUI <br/>


## How to use the app
Under `Home` page I list all Sprints and Tickets. 
Every table has a button where we can create a Sprint or a Ticket. 
On click of those buttons, the modal will open where the user can enter data accordingly.<br/>
Under `Tickets` page I list only created Tickets and also the user has ability to create a Ticket there. <br/>
Under `Sprints` page I list all created Sprints, User can select any row (Sprint) from the first table and if that Sprint has Tickets, they will be shown in the table below the Sprints otherwise the text will be shown that says: `There are no Tickets for selected Sprint`