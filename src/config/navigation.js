import {Navigation} from 'react-native-navigation';
import {Platform} from 'react-native';
import colors from '../constants/colors';

export const initNavigation = () => {
  ios = Platform.OS == 'ios' ? true : false;
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: colors.primaryComplement,
    },
    topBar: {
      visible: false,
      drawBehind: true,
      animate: false,
      backButton: {
        visible: true,
        color: colors.primary,
      },
    },
    layout: {
      orientation: ['portrait'],
    },
  });
};

export const goToInit = () => {
  Navigation.setRoot(mainRoot);
};

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'mainApp.Page_1',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'mainApp.Page_2',
                },
              },
            ],
          },
        },
      ],
    },
  },
};
