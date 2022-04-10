# Aston University Map Navigation System
This is a map navigation system used for a final year project at Aston University. 

## Getting Started

To get started, please open Android Studio and download this project. Next, to run the application, open up command prompt, change directory to the 'MobileApplication' folder. Then type:

> expo start

to launch the Expo Developer tools, then open up your phone emulator from Android Studio and have it ready. Finally, click on 'Run on Android Device/Emulator'.

## Features Implemented

- A fully functioning Room search system for all rooms that exist at Aston University.
- Keywords such as 'The Hub' or 'The Great Hall' will also work.
- Map of each floor of the main building displayed on the screen with each room labelled.
- Ability to switch between each map of the floor via navigation bar.
- Icons for lifts, stairs and toilets.
- Ability to zoom in, zoom out and pan.
- Application is coded in React-Native.
- Basic colour-code system.

## Future Concepts and Ideas

- History list of rooms based on the user's search. (Also the ability to clear history)
- Dynamic tracking - Such as drawing lines from Point A to Point B.
- Highlighting a room when searched in a different and more obvious colour.
- Auto pan/zoom to the room that was searched.
- Ability to move up from Main Building to North Wing, and move down from Main Building to South Wing.

## Dependencies

- dudigital/react-native-zoomable-view by SimonErich (https://github.com/DuDigital/react-native-zoomable-view)
- react-native-community by Kelset (https://github.com/react-native-community/releases)
- react-navigation by Satya164 (https://github.com/react-navigation/react-navigation)

## Prerequisities

Please ensure that you have the following installed before attempting to run the project:
- Android Studio
> brew install node
> npm install expo-cli --global

## Built With
- <a href="https://www.reactnative.dev">React Native</a>
- <a href="https://expo.io">Expo</a>
