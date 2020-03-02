[![Maintainability](https://api.codeclimate.com/v1/badges/6af0968f87adc7121b8e/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/trashpanda-be/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/6af0968f87adc7121b8e/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/trashpanda-be/test_coverage)

🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### Backend deployed at [Heroku](https://trashpanda-be.herokuapp.com/) <br>

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework goes here

Along with Node.js, we as a team are using Apollo Server and GraphQL (along with a few other smaller pieces).

- GraphQL empowers the front end developer to only return what they want.
- Apollo Server has many great tools, such as apollo-datasource that make building a backend easy and structured.
- Apollo Server takes in data from the Earth911 and allows us to easily access that information on the front end with Apollo Client
- Knex makes it easy to translate the information to PostgreSQL and SQLite3.

## 2️⃣ Endpoints

🚫This is a placeholder, replace the endpoints, access control, and descriptioin to match your project

#### Organization Routes

| Method | Endpoint                                                                             | Access Control   | Description                                                                                                                                     |
| ------ | ------------------------------------------------------------------------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `earth911.getMaterials${this.apiKey}`                                                | all materials    | Returns all of the materials in the database. Requires an api key.                                                                              |
| GET    | `earth911.getMaterials${this.apiKey}`                                                | material         | Returns the material with the corresponding material_id. Requires an api key.                                                                   |
| GET    | `earth911.searchLocations${this.apiKey}&latitude=${latitude}&longitude=${longitude}` | locations nearby | Returns an array of locations nearby the entered latitude and longitude. Requires an api key, latitude and longitude.                           |
| GET    | `earth911.getLocationDetails${this.apiKey}&location_id=${id}`                        | location details | Returns details about the location with the corresponding location_id. Requires a successful searchLocations request, api key, and location_id. |
| GET    | `earth911.getFamilies${this.apiKey}&family_type_id=1`                                | categories       | Returns all of the available categories for sorting materials. Requires an api key.                                                             |
| GET    | `earth911.getPostalData${this.apiKey}&postal_code=${postal_code}&country=${country}` | postal code      | Returns properly processed location from the entered postal code.. Requires an api key, postal code, and country.                               |

#### User Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/current`        | all users           | Returns info for the logged in user.               |
| GET    | `/users/org/:userId`    | owners, supervisors | Returns all users for an organization.             |
| GET    | `/users/:userId`        | owners, supervisors | Returns info for a single user.                    |
| POST   | `/users/register/owner` | none                | Creates a new user as owner of a new organization. |
| PUT    | `/users/:userId`        | owners, supervisors |                                                    |
| DELETE | `/users/:userId`        | owners, supervisors |                                                    |

# Data Model

## Schema Definitions

- `!` denotes a required field.
- integer: Int
- boolean: Boolean
- float: Float
- string: String

#### QUERY TYPES

---

```
 type Query {
    material(id: Int): Material
    materials: [Material]
    family: Family
    postal_code(postal_code: String!, country: String!): PostalCode
    families: [Family]
    locations(latitude: Float!, longitude: Float!): [Location]
    getZip(latitude: String!, longitude: String!): PostalCode
  }
```

#### FAMILY

---

```
type Family {
    material_ids: [Int]
    family_id: Int
    description: String
    family_type_id: Int
  }
```

#### MATERIAL

---

```
type Material {
    description: String
    material_id: Int!
    long_description: String
    notes: String
    dropoff: Boolean
    pickup: Boolean
    bin_trash: Boolean
    bin_recycle: Boolean
    bin_compost: Boolean
  }
```

#### LOCATION

---

```
type Location {
    curbside: Boolean
    municipal: Boolean
    description: String
    longitude: Float
    latitude: Float
    address: String
    city: String
    province: String
    country: String
    postal_code: String
    region: String
    full_address: String
    national: Boolean
    location_type_id: Int
    event_only: Boolean
    fax: String
    hours: String
    phone: String
    notes_public: String
    url: String
  }
```

#### POSTAL CODE

---

```
type PostalCode {
    postal_code: String!
    longitude: Float!
    latitude: Float!
  }
```

## Actions

`getAllMaterials()` -> Returns all materials.

`getMaterial({ material_id })` -> Returns a material with the corresponding `material_id`.

`getAllLocations({ latitude, longitude })` -> Returns nearby locations from the given latitude and longitude.

`getPostalData({ postal_code, country })` -> Returns proper location information from the given `postal_code` and `country`.

`getAllFamilies(` -> Returns all categories that contain all of the materials.

`getZip({ latitude, longitude })` -> Returns a PostalCode object mainly containing the zip code based on latitude/longitude given.
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app

\_ DATABASE_URL=https://trashpanda-be.herokuapp.com
\_ DB_ENV=
\_ earth911_secret=
\_ DataScience_URL=http://trashpanda-detect.eba-acqmen85.us-east-2.elasticbeanstalk.com
(Optional) \_ PORT=

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/trashpanda-fe) for details on the fronend of our project.
