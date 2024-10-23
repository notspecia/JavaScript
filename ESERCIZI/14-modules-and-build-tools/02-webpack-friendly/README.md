# package.json
<br>

## package.json scripts
They are controls defined by the user who allow you to automate a series of operations using NPM (Node Package Manager), scripts are very useful for carrying out recurring tasks such as the start of a server, the compilation of the code, the execution of the tests... list of some scripts created:

`npm run test`: a test to see if it will go to perform what is inside the test script.
`npm run build`: script properties, webpack will be performed for the final construction of the optimized package inside the ./dist folder
`npm run start`: start the web server that we have configured.
<br>

## package.json devDependencies
contains the dependencies of the project.Devdependencies are the addictions used only during development and are not necessary for the execution of the project, some used are:

* **@babel/core** --> it provides a set of transformations to convert the modern javascript code into compatible format with browser and older environments.

* **babel-loader** --> use Babel to transform the JavaScript code during compilation.

* **html-webpack-plugin** --> webpack plugins that generates a basic HTML file for application.