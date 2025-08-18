# Code Rush

Code Rush is a small, time-bound React application built to be completed in a single sitting. It includes: Home Page, Word Counter, Chuck Norris Joke generator, and an additional Error page for fallback.

The goal is to practice building within a fixed time frame and deploying to Netlify.

## Requirements

### General

- Build a React application within a fixed time frame.
- Use React Router for navigation.
- Deploy the application.

### Pages & Features

- **Home**: A landing page
- **Word Counter**: A page where users can input text and see the word count.
- **Chuck Norris Joke Generator**: A page that fetches and displays random Chuck Norris jokes.
- **Error**: A fallback page for unmatched routes.

## Routing

react-router-dom is used to navigate between the Home page, the Word Counter page, the Chuck Norris Joke generator page, and the Error page for any undefined routes.

## Deployment

Deploy the completed application to Netlify and ensure it is publicly accessible.

## Local Setup & Installation

### 1. Clone the repository
Clone the repository using SSH:
```bash
git clone https://github.com/s-varun22/code-rush.git
cd code-rush
```

### 2. Install dependencies
Install the required dependencies:
```bash
npm install
```

### 3. Run the development server
Start the development server:
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Time Challenge Rules

- Complete the entire application in a single sitting.
- Do not use any code generators or copy-paste large chunks of code.
- Focus on functionality first, then styling.
- Ensure the app is deployed and working before time ends.