# Book Store

This project is a Book Store application featuring a frontend built with ReactJS and a backend developed with NodeJS. The frontend and backend run on different ports and should be started sequentially to ensure proper functionality.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Frontend and Backend Together](#frontend-and-backend-todether)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/TVictor87/frontend-coding-challenge.git
cd frontend-coding-challenge
```

2. Install dependencies for both frontend and backend:

```bash
npm install

```

## Running the Project

### Frontend and Backend Together

To start both the frontend and backend together:

```bash
npm start
```

This command will start the frontend on http://localhost:5173 and the backend on http://localhost:3000.

### Backend

To start the backend only:

```bash
npm run server
```

This command will start the frontend on http://localhost:3000

### Frontend

Please start the backend first, as the frontend relies on it to fetch data through API calls.
To start the frontend only:

```bash
npm run dev
```

This command will start the frontend on http://localhost:5173

## Running Tests

Simple run the tests:

```bash
npm run test
```

To run the tests with a UI:

```bash
npm run test:ui
```

This command will start the Vitest UI at `http://localhost:51204/__vitest__/`

## Project Structure

```bash
book-store/
├── fake-server/
│   └── db.json
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   ├── api/
│   │   ├── apiGetBookStores.ts
│   │   ├── apiGetCountryFlag.ts
│   │   └── types.d.ts
│   ├── components/
│   │   ├── BestSellingTable/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── BookStore/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── CountryFlag/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── Rating/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   ├── mock/
│   │   └── fakeBookStores.ts
│   ├── tests/
│   │   ├── main.test.ts
│   │   └── components/
│   │       ├── Rating.test.tsx
│   │       ├── BestSellingTable.test.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── config.ts
│   ├── vite-env.d.ts
│   └── assets/
│       └── react.svg
├── .gitignore
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

## Configuration

All URLs and static information are stored in the config.ts file in the frontend. This helps to manage and update URLs and static data easily.

File location:

```bash
/src/config.ts
```

The configuration file contains constants used throughout the application. These constants help manage URLs and static information in a centralized way, making it easier to maintain and update the application.

```bash
// API URLs
export const API_BASE_URL = "http://localhost:3000";

export const STORES_API_URL = `${API_BASE_URL}/stores`;
export const BOOKS_API_URL = `${API_BASE_URL}/books`;
export const COUNTRIES_API_URL = `${API_BASE_URL}/countries`;
export const AUTHORS_API_URL = `${API_BASE_URL}/authors`;

// API to get country flag
export const COUNTRY_FLAG_API_URL = "https://restcountries.com/v3.1/alpha";

// Static Information
export const APP_NAME = "Book Store";
export const APP_VERSION = "2.0.0";

// Number of books to display per store
export const BOOKS_PER_STORE = 2;

```

Here's a breakdown of each constant:

**API_BASE_URL:** The base URL for the backend API. This is the starting point for all API requests.

**STORES_API_URL:** The URL endpoint to fetch store data. It is constructed by appending /stores to the API_BASE_URL.

**COUNTRY_FLAG_API_URL:** The base URL for fetching country flag images. This URL is used to retrieve flag images based on the country code.

**APP_NAME:** The name of the application. This can be used for display purposes throughout the app, such as in the header or title.

**APP_VERSION:** The version of the application. This helps keep track of the current version of the app and can be useful for debugging and user support.

**BOOKS_PER_STORE:** The maximum number of books to display for each store. This constant helps control the number of books shown in the UI, ensuring consistency and manageability.
