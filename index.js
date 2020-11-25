/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import App from './App';
import {Provider} from 'react-redux';
import {initNavigation, goToInit} from './src/config/navigation';
import {registerScreens} from './src/config/screens';
import {persistor, store} from './src/store';

registerScreens(store, Provider, persistor);
Navigation.events().registerAppLaunchedListener(() => {
  initNavigation();
  goToInit();
});
