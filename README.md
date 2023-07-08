# Project Title: Mars Rover Photo Viewer

This project is a React application that connects to the NASA API to retrieve and display photos taken by the Mars Rovers: Curiosity, Opportunity, and Spirit. The app provides various features for browsing and filtering the photos.

## Features

- **NASA API Integration**: The app connects to the NASA Open APIs and fetches photos from the 'Mars Rover' endpoint.
- **Rover Selection**: Users can choose a specific rover (Curiosity, Opportunity, or Spirit) to view the corresponding photos.
- **Pagination**: The photos are displayed in a paginated manner, with a maximum of 25 photos per page. Dynamic loading similar to Facebook or Instagram is implemented for a smooth browsing experience (optional).
- **Camera Filtering**: Users can filter the rover photos by the camera used to capture them. This feature allows users to narrow down the selection based on their preferences.
- **Default Date**: By default, the app displays the latest photos available for the current day.
- **Search by Earth Day**: Users can search for photos based on a specific 'Earth Day' date. For example, entering the date '2020-09-22' will show the corresponding photos taken on that day.
- **Search by Sol Date**: Users can search for photos based on the 'Sol' date. For example, entering the Sol date '2890' will display photos taken on that specific Martian day.

- **Favorite**: Users can mark photos as favorites and view them in a separate section of the app. This feature allows users to save photos that they like and revisit them later.
- **Search Parameters**: Users can save their search parameters and view them in a separate section of the app. This feature allows users to save their favorite search parameters and revisit them later.
- **Testing**: The inclusion of tests is highly encouraged and will be awarded extra points. Writing tests for the application's components, functionality, and integration can help ensure its reliability and robustness.

## How to Run the Application

To run the application, follow these steps:

1.  Create a `.env` file with the same information as the provided `.env-example` file. This file contains the `API_KEY` needed for the app to connect to the NASA API.
2.  In the terminal, run the following command to install the project dependencies:

    Copy code

    `pnpm install`

3.  To run the tests, use the following command:

    bashCopy code

    `pnpm test`

4.  To run the application, use the following command:

    Copy code

    `pnpm dev`

Make sure to have `pnpm` installed globally on your machine before running the commands.

Please note that for testing, the application uses React, TypeScript, and CSS modules.
