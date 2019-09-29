/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWrold from './HelloWorldApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloWrold);
