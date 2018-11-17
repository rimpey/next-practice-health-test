This is my partial solution for the take home test. My first commit was the scaffolding of the project using the node module create-react-app to generate a boilerplate of a react app. I spent about 3 or so hours creating the solution with reading and tutorials prior to the first commit and then committed my final part solution.

My approach was to focus on the registration definition JSON and to create a generic form based on datatypes to determine the resulting HTML output. I put in a small amount of layout styling but not so much. I spent most of the time constructing the JSON file and thinking about how to loop through array values using the .map function using React and then dealing with the error message that was resolved with a unique key passed in. I did think that once I had output the form fields successfully using return statements in the switch construct that I would then replace that and try to create components and call them instead to tidy up the code but needed to do a bit more reading. I might try this outside these test conditions.

Going forward I would need to think about how I would deal with the guardian details which would need to be hidden until the user selected the checkbox but still needed to be generated. I wasn't quite sure how this would play out at this point in time. I would also need to add validation to the form using refs and then to think about how to generate the next JSON based on data entered on submit.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
