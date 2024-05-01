# Take Me Home

Welcome to the Take Me Home project! This is a rideshare service created to provide students at West Virginia University a means to get or provide a ride home for break.

## Motivation

The motivation behind this project is to address the need for students to find convenient and affordable rides home during university breaks. Many students face challenges in arranging transportation, especially if they don't have their own vehicles or live far from campus. Take Me Home aims to connect students who are willing to offer rides with those who need them, creating a mutually beneficial solution.

## Tech/Framework

Take Me Home is built using the following technologies and frameworks:

- React: A JavaScript library for building user interfaces.
- Firebase: A comprehensive development platform that provides backend services such as authentication, database, and hosting.
- Firebase Authentication: Used for user authentication and authorization.
- Cloud Firestore: A NoSQL document database provided by Firebase, used to store and retrieve data.
- HTML/CSS: Used for structuring and styling the web pages.
- JavaScript: The primary programming language used for the application logic.

## Installation

To run the Take Me Home project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/take-me-home.git
   ```

2. Navigate to the project directory:
   ```
   cd take-me-home
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Retrieve the Firebase configuration object.
   - Update the `firebaseConfig.js` file in the project with your Firebase configuration.

5. Start the development server:
   ```
   npm start
   ```

6. Open your browser and visit `http://localhost:3000` to see the application running.

## How to Use

Using Take Me Home is simple and intuitive. Follow these steps to get started:

1. Sign up for an account using your WVU email address.

2. Once logged in, you can either create a new ride listing or browse existing listings.

3. To create a new ride listing:
   - Click on the "Add Listing" button.
   - Fill in the required details such as trip date, destination, meeting time, meetup location, available seats, smoking preference, car type, and any additional notes.
   - Click "Publish" to post your ride offer.

4. To view existing listings:
   - Click on the "View Listings" button.
   - Browse through the available ride offers.
   - Click on a listing to view more details.
   - If interested, you can contact the ride provider using the provided contact information.

5. To view and update your account information:
   - Click on the "View Account" button.
   - You can view your email, name, preferences, phone number, and student ID.
   - To edit your account details, click on the "Edit" button, make the necessary changes, and click "Save".

That's it! You're now ready to use Take Me Home to find or offer rides home during university breaks. If you have any further questions or need assistance, please don't hesitate to reach out to our support team.

Happy riding!
