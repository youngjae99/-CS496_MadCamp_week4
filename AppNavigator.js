import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
 
 
const AppNavigator = createStackNavigator({
  FirstScreen: { screen: LoginScreen },
  SecondScreen: { screen: MainScreen }
});
 
export default createAppContainer(AppNavigator, {
  initialRouteName: 'LoginScreen',
});