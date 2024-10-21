# AQA Engineer test assessment - Playlist App

## Overview
This project uses Cypress for UI testing of the [Playlist App](https://vite-react-alpha-lemon.vercel.app/), including features like searching, adding tracks, and creating custom playlists.

## Prerequisites
- Node.js
- npm

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/JulianRiedinger7/develops-today-assessment.git
   cd <your-project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

1. Headed Mode using Cypress GUI:
   ```bash
   npm run test
   ```

2. Headless mode:
   ```bash
   npm run test-headless
   ```

3. Headed mode without Cypress GUI:
   ```bash
   npx cypress run --headed --browser chrome
   ```
    You can replace **chrome** with **firefox** or **electron** to use different browsers