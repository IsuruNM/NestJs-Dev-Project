# NestJS Learn Project

This project is a learning repository for NestJS, a progressive Node.js framework. It provides a starting point for building server-side applications using TypeScript.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed:

- Node.js (version 19.9.0 or higher)
- npm (version 9.6.3 or higher)
- yarn (version 1.22.19 or higher)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/IsuruNM/nestjs-project.git

   ```

2. Change into the project's directory:
   cd nestjs-learn-project

3. Install the dependencies:
   yarn install

4. Start the development server:
   yarn start:dev

   This command will start the server and automatically restart it whenever you make changes to the source code.

5. Open your browser and navigate to http://localhost:3000 to see the running application.

6. Use Docker
   check installed docker version - docker --version

   use docker compose - allow spawn and destroy docker container
   Run - docker compose up dev-db -d (dev-db: database name, -d: background run)
   check status - docker ps

7. install prisma
   install Prisma - yarn add -D prisma
   install client library - yarn add @prisma/client

Project Structure
The project follows a standard NestJS application structure:

nestjs-learn-project/
├── src/
│ ├── main.ts
│ ├── app.module.ts
│ ├── app.controller.ts
│ └── app.service.ts
├── test/
│ └── app.e2e-spec.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md

> src/main.ts: The entry file of the application.
> src/app.module.ts: The root module that imports and configures all other modules.
> src/app.controller.ts: An example controller with sample routes.
> src/app.service.ts: An example service that the controller uses.
> test/app.e2e-spec.ts: An end-to-end testing file.
> package.json: The NPM package configuration file.
> tsconfig.json: The TypeScript compiler configuration file.
> .gitignore: Specifies intentionally untracked files to ignore by Git.
> Feel free to explore and modify the source code files to learn more about NestJS.
