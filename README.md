# ExpressJS Backend Server with CRUD API

This project is a simple backend server built using **ExpressJS** and **TypeScript**. It provides a CRUD interface to manage resources and connects to a basic database for data persistence.

## Features

1. **Create a resource**: Allows the user to create a new resource.
2. **List resources**: Lists resources with basic filters (optional query parameters).
3. **Get details of a resource**: Fetches detailed information of a specific resource by ID.
4. **Update resource**: Allows the user to update the details of an existing resource.
5. **Delete a resource**: Deletes a resource from the database.

## Technologies Used

- **ExpressJS**: A web framework for Node.js to build RESTful APIs.
- **TypeScript**: For type safety and better development experience.
- **Database**: Database ( MySQL) for data persistence.

## Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js** (version 20)
- **Docker**

## Running steps

- Initialize database by docker-compose
  `docker compose up -d`
- Install package
  `yarn`
- Run project
  `yarn dev`
