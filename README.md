


# TopNews

TopNews is an ios/android application built with React Native

![Simulator Screen Shot - iPhone 11 - 2021-03-04 at 16 09 28](https://user-images.githubusercontent.com/65682335/109984415-09a3c100-7d04-11eb-9a7d-617ac0805229.png)
![Simulator Screen Shot - iPhone 11 - 2021-03-04 at 16 04 00](https://user-images.githubusercontent.com/65682335/109983933-9b5efe80-7d03-11eb-892b-6704126b1748.png)
![Simulator Screen Shot - iPhone 11 - 2021-03-04 at 16 07 16](https://user-images.githubusercontent.com/65682335/109984205-d4976e80-7d03-11eb-85f4-d7f828c8fd0e.png)
![Simulator Screen Shot - iPhone 11 - 2021-03-04 at 16 08 39](https://user-images.githubusercontent.com/65682335/109984318-f0027980-7d03-11eb-84ec-dfa8f3c4bc1a.png)

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
