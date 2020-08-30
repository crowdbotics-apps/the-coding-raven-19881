import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList95498Navigator from '../features/ArticleList95498/navigator';
import ArticleList95497Navigator from '../features/ArticleList95497/navigator';
import ArticleList95496Navigator from '../features/ArticleList95496/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList95498: { screen: ArticleList95498Navigator },
ArticleList95497: { screen: ArticleList95497Navigator },
ArticleList95496: { screen: ArticleList95496Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
