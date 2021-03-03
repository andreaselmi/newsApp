# TopNews

TopNews is an ios/android application built with React Native

## Installation

Go to https://newsapi.org/ and get an Api Key

open .env.example and replace "YourApiKeyHere" with the Api Key from https://newsapi.org/ (without double quotes)

```
API_KEY=YourApiKeyHere
```

rename file in .env

Use the package manager [npm](https://www.npmjs.com/) to install dependencies: 
open terminal on the root folder of the project and run this command

```bash
npm install
```

and for ios

```bash
cd ios && pod install && cd ..
```

## Usage

install on ios simulator

```
npx react-native run-ios
```

install on android simulator

```
npx react-native run-android
```
