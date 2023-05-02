import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../src/pages/profile';
import Competition from '../src/pages/competition';
import Community from '../src/pages/community';
import BookBarcode from '../src/pages/bookBarcode';
import MyPage from '../src/pages/mypage';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'rgba(194, 194, 194, 0.1)'
        },
        headerTitle: ({children}) => (
          <View>
            <Text>{children}</Text>
          </View>
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 500
        }
      }}>
        <Stack.Screen name="마이페이지" component={MyPage} />
        <Stack.Screen name="프로필 설정" component={Profile} />
        <Stack.Screen name="공모전" component={Competition} />
        <Stack.Screen name="커뮤니티" component={Community} />
        <Stack.Screen name="도서대출증" component={BookBarcode} />
    </Stack.Navigator>
  );
}

export default MyStack;