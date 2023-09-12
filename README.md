

# Ecommerce Backend

## Overview

This is the backend component of an Ecommerce web application. It provides the server-side logic and APIs required for managing user accounts, products, orders, and more.

## Features

- User authentication and authorization.
- Product catalog management.
- Shopping cart functionality.
- Order processing and tracking.
- Security measures including encryption (bcrypt) and JWT-based authentication.
- Logging and error handling (Winston).

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Prisma (Database ORM)
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing
- Winston for logging
- Zod for data validation
- Cors for Cross-Origin Resource Sharing

## Prerequisites

Before running the project, make sure you have the following dependencies installed:

- Node.js
- npm or yarn
- Prisma CLI (globally installed)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   Create a `.env` file in the project root and configure the necessary environment variables, including database connection details and JWT secrets.

4. Database migration:

   ```bash
   npx prisma db migrate
   ```

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

The server should now be running locally at `http://localhost:your-port`. You can begin making API requests to the specified endpoints.

## Scripts

- `npm start` or `yarn start`: Starts the server in production mode.
- `npm run dev` or `yarn dev`: Starts the server in development mode with hot-reloading using ts-node-dev.
- `npm test` or `yarn test`: Run your test suite.
- `npm run lint-check` or `yarn lint-check`: Check your code for linting errors.
- `npm run lint-fix` or `yarn lint-fix`: Fix linting errors automatically.
- `npm run prettier-check` or `yarn prettier-check`: Check your code formatting with Prettier.
- `npm run prettier-fix` or `yarn prettier-fix`: Format your code automatically with Prettier.

## License

This project is licensed under the [ISC License](LICENSE).

---

Feel free to add more sections, documentation, and details as per your project's requirements.
