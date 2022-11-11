# mthrift
A repository for the student group VOID Tech at the
University of Michigan to work on their app MThrift. 

## Quick Start

First, clone the repository:
```bash
$ git clone https://github.com/void-tech-um/mthrift.git # HTTPS
$ git clone git@github.com:void-tech-um/mthrift.git # SSH
```

Then, cd into the directory and install the dependencies:
```bash
$ cd mthrift
$ npm ci
$ npm install @react-navigation/native
# The dependencies below are needed since this is an Expo managed project
$ npx expo install react-native-screens react-native-safe-area-context
```

Finally, run the app:
```bash
$ npm start
```
