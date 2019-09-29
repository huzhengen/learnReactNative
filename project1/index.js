/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorldApp from './HelloWorldApp';
import Bananas from './Bananas';
import BlinkApp from './BlinkApp';
import LotsOfGreetings from './LotsOfGreetings';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LotsOfGreetings);
