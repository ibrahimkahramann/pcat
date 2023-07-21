## Pcat photo app

![Image](/snapshots/main.png)

#### PhotoCat is a web application built using Express.js and MongoDB that allows users to manage photos, including creating, reading, updating, and deleting photos. It also provides basic static pages for the "About" section and photo management.

<br>

## Technologies Used

- <strong>Express.js:</strong> Express is a popular web application framework for Node.js. It provides a simple and robust set of features for building web applications and APIs.

- <strong>MongoDB:</strong> MongoDB is a NoSQL database that stores data in JSON-like documents with dynamic schemas. It is used as the backend database for storing photo information.

- <strong>Mongoose:</strong> Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction for interacting with MongoDB, making it easier to define schemas and perform database operations.

- <strong>Express-FileUpload:</strong> Express-FileUpload: This middleware enables file uploading in Express applications. It is used in this app to handle photo uploads.

- <strong>Method-Override:</strong> Method-Override: The method-override middleware is used to override the HTTP request method. This is particularly useful for supporting DELETE and PUT methods, which are not directly supported by HTML forms.

- <strong>EJS (Embedded JavaScript):</strong> EJS (Embedded JavaScript): EJS is a templating engine that allows you to embed dynamic content within HTML. It is used as the template engine in this application for rendering dynamic views.

<br>
<br>

## Snapshots

![Image](/snapshots/main-2.png)
![Image](/snapshots/main-page-2.png)
![Image](/snapshots/content.png)
![Image](/snapshots/content-edit.png)

<br>
<br>

## Installation and Setup:
To run the PhotoCat application locally, follow these steps:

1. Install Node.js and npm (Node Package Manager) on your machine if you haven't already.

2. Clone the repository from GitHub.

3. Install the project dependencies by running the following command in the project's root directory:

```
    npm install
```
4. Make sure you have MongoDB installed and running on your local machine or provide a valid MongoDB connection string in the mongoose.connect method.

5. To start the application, run the following command:

```
    node app.js
```

6. Open your web browser and visit http://localhost:3000 to access the PhotoCat application.

## Routes:

The application defines the following routes:

- ``` GET / ``` : Displays all photos on the home page.
- ``` GET /photos/:id ``` : Shows the details of a specific photo.
- ``` POST /photos ``` : Creates a new photo and adds it to the database.
- ``` PUT /photos/:id ``` : Updates the information of a specific photo.
- ``` DELETE /photos/:id ``` : Deletes a photo from the database.
- ``` GET /about ``` : Displays information about the application.
- ``` GET /add ``` : Shows the page to add a new photo.
- ``` GET /photos/edit/:id ``` : Shows the page to edit the information of a specific photo.

<br>

## Contributing:

If you want to contribute to the PhotoCat application, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your branch to your forked repository.
5. Create a pull request (PR) to the original repository.
6. Your changes will be reviewed, and once approved, they will be merged into the main branch.

<br>

## License:

This project is licensed under the MIT License.