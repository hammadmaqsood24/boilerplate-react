# React Boilerplate
This is a react application boilerplate that will be used for making new projects withour spending any time on setip

## Node Version Used
```
$ node -v
v16.16.0
$ npm -v
v8.15.0
```

## Setup
After cloning the repo run the following command to install all the dependencies:

```
$ npm install
```

By default, the app will start on port 3001 using the `local` environment. For overriding the default environment, run the below commands using the <environment\> from `local`/`dev`/`live`.
```
$ set REACT_APP_STAGE=<environment>
```
For overriding the default port just provide a port number as an environment variable before running `npm start` 
```
$ set PORT=<port_number>
```
After the dependencies have been installed successfully and the environment variables have been set, run the following command to start the application:
```
$ npm start
```

## Build For Deployment
The default build will be made for port 5001 using the `local` environment. This can be overridden using the commands given above. After running those commands, run the following command to get a build based on your choosen environment.
```
$ npm build
```

### Changing Environment Variables Configuration
Make your way to `src/EnvConfigs/<environment>.js` and change the environment variables according to your needs.