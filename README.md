#TODO 

This is an Angular Application designed to make note of todo items in a list, edit or change existing todo items and strike out completed todo items from the list.

##Notes Component

Here in this component it has a input textbox and save button in the view to get the todo item input from the user and push it to the data service array.It also displays all the todo items and an edit button which redirects to edit component.

##Edit Component 

Here in this component we are provided with a view to modify the selected todo item and a back button to redirect back to notes component.

##Page Not Found Component

When user enters a invalid url it redirects to this component.

##Data Service

Data service stores all the todo list items.These todo items are accessed by the components which has subscribed to it.

##App Routing Module

In this module we specify all the paths in the application.Also have used a constant array variable to store list of components that are used in paths.so that we can add this constant to the app module declaration inspite of adding all the components individually in that constant array.

#Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

![alt text] (src\assets\screenshots\one.png)

![alt text] (src\assets\screenshots\two.png)

![alt text] (src\assets\screenshots\three.png)

![alt text] (src\assets\screenshots\four.png)

![alt text] (src\assets\screenshots\five.png)