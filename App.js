import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './src/Home'
const Navigation = createStackNavigator({
  Home:
  {
    screen:Home,
  },
}, 
{
  initialRouteName: 'Home'
})

export default  createAppContainer(Navigation);
