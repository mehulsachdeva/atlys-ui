# Atlys UI

### [https://atlys-ui-mehulsachdevas-projects.vercel.app/](https://atlys-ui-mehulsachdevas-projects.vercel.app/)

## Version: 1.0.0

### Technologies Used
- React
- TypeScript
- CSS Modules

### Development Tools
- Husky: Configured to run formatting on commits.

### Features

This mini authentication app consists of a frontend interface utilizing local storage to manage the user data and handle authentication process.
- **Login Page**: Authenticate users with predefined mock credentials stored in local storage.

- **Registration**: Allow new users to register and add them to the local storage user list.

- **Dashboard**: An area accessible to all users to post and see the posted comments. If logged out user tries to access any feature on this page, they'll be asked to register or login. Includes a logout button to end the session (if exists).

### Authentication Mechanism

- **Local Storage**:
  - On the initial load, a set of predefined mock users is saved to local storage.
  - During login, user credentials are validated against the stored list.
  - New registrations are appended to the local storage user list.

- **User Sessions**:
  - A session is established by storing the user information in local storage upon successful login.
  - Logging out clears the session.

### Mock Credentials

For testing purposes, the following mock user credentials are predefined:

- **User 1:**
  - **Username**: `Jane`
  - **Email**: `jane@example.com`
  - **Password**: `jane123`

- **User 2:**
  - **Username**: `Patrick`
  - **Email**: `patrick@example.com`
  - **Password**: `patrick123`

### Pages

Login and Registration - [https://atlys-ui-mehulsachdevas-projects.vercel.app/](https://atlys-ui-mehulsachdevas-projects.vercel.app/)<br/>
Dashboard - [https://atlys-ui-mehulsachdevas-projects.vercel.app/dashboard](https://atlys-ui-mehulsachdevas-projects.vercel.app/dashboard)
 
### Demo

[Watch the video](https://github.com/mehulsachdeva/atlys-ui/blob/main/demo/demo.webm)

| ![Placeholder Image 1](https://github.com/mehulsachdeva/atlys-ui/blob/main/demo/screenshot1.webp) | ![Placeholder Image 2](https://github.com/mehulsachdeva/atlys-ui/blob/main/demo/screenshot2.webp) |
|:---------------------------------------------:|:---------------------------------------------:|
| ![Placeholder Image 3](https://github.com/mehulsachdeva/atlys-ui/blob/main/demo/screenshot3.webp) | ![Placeholder Image 4](https://github.com/mehulsachdeva/atlys-ui/blob/main/demo/screenshot4.webp) |


## Getting Started

To get started with Atlys UI, first clone the repository using:
### `git clone https://github.com/mehulsachdeva/atlys-ui.git`

Once cloned, navigate to the project directory:
### `cd atlys-ui`

Then, install the necessary dependencies with:
### `npm install`

To run the app in development mode, use:
### `npm start`

This will start the server, and you can view the app in your browser at [http://localhost:3000](http://localhost:3000).

<br />In order to build the app for <b>production</b>, use:
### `npm run build`
This bundles React in production mode and optimizes the build for the best performance.
