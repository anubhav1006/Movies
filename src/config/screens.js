import {Navigation} from 'react-native-navigation';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Page_1 from '../app/pages/Page_1';
import Page_2 from '../app/pages/Page_2';
import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';

export function registerScreens(store, Provider, persistor) {
  Navigation.registerComponent(
    'mainApp.Page_1',
    () => (props) => (
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator size="large" color="red" />}
          persistor={persistor}>
          <Page_1 {...props} />
        </PersistGate>
      </Provider>
    ),
    () => Page_1,
  );

  Navigation.registerComponent(
    'mainApp.Page_2',
    () => (props) => (
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator size="large" color="Yellow" />}
          persistor={persistor}>
          <Page_2 {...props} />
        </PersistGate>
      </Provider>
    ),
    () => Page_2,
  );
}
