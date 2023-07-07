# Project Title: Mars Rover Photo Viewer

This project is a React application that connects to the NASA API to retrieve and display photos taken by the Mars Rovers: Curiosity, Opportunity, and Spirit. The app provides various features for browsing and filtering the photos.

## Features

- **NASA API Integration**: The app connects to the NASA Open APIs and fetches photos from the 'Mars Rover' endpoint.
- **Rover Selection**: Users can choose a specific rover (Curiosity, Opportunity, or Spirit) to view the corresponding photos.
- **Pagination**: The photos are displayed in a paginated manner, with a maximum of 25 photos per page. Dynamic loading similar to Facebook or Instagram is implemented for smooth browsing experience (optional).
- **Camera Filtering**: Users can filter the rover photos by the camera used to capture them. This feature allows users to narrow down the selection based on their preferences.
- **Default Date**: By default, the app displays the latest photos available for the current day.
- **Search by Earth Day**: Users can search for photos based on a specific 'Earth Day' date. For example, entering the date '2020-09-22' will show the corresponding photos taken on that day.
- **Search by Sol Date**: Users can search for photos based on the 'Sol' date. For example, entering the Sol date '2890' will display photos taken on that specific Martian day.

## Optional Features

- **Favorite/Search Parameter Storage**: Users have the option to save their favorite search parameters or bookmarks within the app. This allows them to recall and revisit specific sets of photos in the future. Local storage or any serverless method of storing data can be used for implementing this feature.
- **Testing**: The inclusion of tests is highly encouraged and will be awarded extra points. Writing tests for the application's components, functionality, and integration can help ensure its reliability and robustness.
- **Next.js Integration**: Using Next.js to develop the application will earn additional points. Next.js provides server-side rendering, enhanced performance, and other benefits that can improve the overall development experience.
