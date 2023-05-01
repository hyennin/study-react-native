import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../src/pages/profile';
import Competition from '../src/pages/competition';
import Community from '../src/pages/community';
import BookBarcode from '../src/pages/bookBarcode';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Competition" component={Competition} />
            <Stack.Screen name="Community" component={Community} />
            <Stack.Screen name="BookBarcode" component={BookBarcode} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;