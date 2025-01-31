# React Native Project

## Getting Started

Follow these steps to clone and run the React Native project on your local machine.

## Prerequisites

Ensure you have the following installed:

- Node.js (Recommended: LTS version)
- Git
- React Native CLI or Expo CLI
- Android Studio (for Android development) / Xcode (for iOS development)

## Clone the Repository

```sh
git clone https://github.com/SuzyKenne/HNG-Mobile-Desktop-app-internship.git/Task-1
# (Depending on the task you want to run)
```

## Install Dependencies

```sh
npm install
```

## Running the Project

### For React Native CLI

#### Start Metro Bundler
```sh
npx react-native start
```

#### Run on Android
```sh
npx react-native run-android
```

#### Run on iOS (Mac Only)
```sh
npx react-native run-ios
```

### For Expo Projects

#### Start Development Server
```sh
npx expo start
```

## Additional Configurations

- Ensure your emulator or physical device is connected.
- Check for any missing configurations in the `.env` file if required.

## Troubleshooting

Run the following command to check for issues:
```sh
npx react-native doctor
```

If an error occurs, try clearing the cache:
```sh
npx react-native start --reset-cache
```

Ensure your system meets React Native requirements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

