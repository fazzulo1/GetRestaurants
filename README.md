# Back-end Web Application Name:

GetRestaurants

# Team Members

Aaliyah Rodriguez, Nick Ortiz and Harold Miranda

# Goal:

To create a restaurant database and server connections in order to provide the front-end application (Foodso) with restaurant data.

# Structure

The application has the following pillars to allow its performance: Server.js, Controllers (restaurantcontrollers.js and user.js) and Models(seed.js, restaurantSchema and user.js).

Server.js contains the libraries and mechanisms as well as the server connections
Controllers handle the main routes which include Index (render all restautants), Create (add a new restaurants), Delete (discard arestaurant).
Models holds seed data and the Restaurant and User Schemas used to provide the application with the required data.

# Seed Data and Schemas

As an alternative to using an API as the application data source, the team members decided to seed some avaliable local restaurant data and set the following schema elements to provide the user with enough information about restaurants.
Restaurant Schema:
name: { type: String, required: true }, image: { type: String }, address: { type: String}, theme: String, menu: {item1: {item: String, price: Number}},like: { type: Number}, url: { type: String},phone: { type: String}

In oder to handle the Signup and Login process the application has a user.js controller file to allow for the aforementioned process, and it operates under an established schema.
User Schema:
username: { type: String, required: true }, password: { type: String, required: true }, favorites: [{}]

# Languages, Libraries, Mechanisms:

Express, Mongoose, NodeJS, CORS

# Deployment

The application was deployed to Heroku:
https://git.heroku.com/foodso.git
