/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorldApp from './HelloWorldApp';
import Bananas from './Bananas';
import BlinkApp from './BlinkApp';
import LotsOfStyles from './LotsOfStyles';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import LotsOfGreetings from './LotsOfGreetings';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FlexDimensionsBasics);
