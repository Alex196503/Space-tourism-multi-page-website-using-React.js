### This project is represented by a SPA application, multi-page space exploration platform built with React and TypeScript. Beyond just a static interface, the app features a fully functional CRUD system powered by LocalStorage, allowing users to manage bookings with persistent data.

# Key features:
* Users can view each page and are able to toggle between the tabs to see new information
* View the optimal layout for each of the website's pages depending on their device's screen size(responsive for 50% of the devices) and see hover states for all interactive elements on the page
* Users can create, delete and edit components like : Planets, Members and Technologies
* All of these data are synced with LocalStorage, ensuring data persists across browser sessions.

### Preview: https://multi-page-space-tourism-app-react-react.onrender.com/
![Image that shows the interface of the app](https://github.com/Alex196503/Multi-Page-Space-Tourism-App-React-React-Router-LocalStorage-CRUD/blob/0bec5883a2f6c4484cc3b6c4735eedc778b4c363/screenshot.png)

# Technologies used : 
| Category    | Technology |
| ----------  | ---        |
| Front-end styling        |  HTML5, CSS3, TailwindCSS, JS ES6, Vite(production tool used to speed up web development), React Toastify(real-time feedback for user actions and form validation)          |
| Front-end functionality            | React.js & TypeScript (Ensuring type-safety and scalable component architecture)           |
| Routing between pages        | React Router (Implementing seamless navigation and server-side fallback handling.)            |
| Saving data  | LocalStorage | Managing state persistence for a seamless "offline-first" user experience. |
| Production Tool | Vite |
| Deployment      | Render | 

# Setup & Instalation
This project is built with TypeScript for logic and Tailwind CSS for styling. Since the browser cannot execute TypeScript or Tailwind directives directly, the project requires a local compilation step before previewing it with the Vite tool.
1. Clone this repository: `git clone https://github.com/Alex196503/Multi-Page-Space-Tourism-App-React-React-Router-LocalStorage-CRUD`
2. Install dependencies: `npm install`
3. Start the project: `npm run dev`

# Tehnical challenges
* **TypeScript typing errors**: I initially struggled with typing the dynamic data coming from the JSON file versus the data being created by the user. I had to move away from using any and actually define robust Interfaces/Types for my Space Entities.
* **Edit problems**: One of the trickiest logic issues I faced was during the Edit functionality. Initially, the app was duplicating entries in LocalStorage instead of updating the existing ones. I had to implement a more precise filtering and mapping logic — identifying the exact item by its index, merging the new changes, and then re-syncing the entire array.

# Current limitations
* **Manual Asset Management**: Due to the app being a client-side-only project (no backend/cloud storage), image uploads are currently handled manually. While the CRUD logic for adding new items is fully functional, users must place the image files in the /public/assets directory and reference them by path.
* **The input upload challenge Challenge**: Implementing a real-time input type="file" that persists images in a local-only environment is a known browser security limitation

# Core Concepts Applied: 
* Used **useState** hook for UI interactions, **useEffect** for data synchronization, and **useParams** for obtaining the params from the URL.
* **React Router v6**: Implemented dynamic routing with nested paths and protected the user experience with fallback "404" handling.
* **State Persistence**: Managed complex state updates to ensure seamless CRUD operations without a backend.
* **Conditional Rendering**: Built a dynamic UI that adapts content based on user-selected categories (Destinations, Crew, Tech).

# Project status 
* Status: **finished**
* This project  **was deployed via Render and can be viewed live** using this link: https://multi-page-space-tourism-app-react-react.onrender.com/ 
* Author: Moldovan Alex-Cristian
